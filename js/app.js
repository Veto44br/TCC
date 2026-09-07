const CART_KEY = "urbanwear_cart";
const USER_KEY = "urbanwear_user";

const $ = (selector) => document.querySelector(selector);

function isSubPage() {
    return window.location.pathname.replace(/\\/g, "/").includes("/paginas/");
}

function sitePath(path) {
    return isSubPage() ? `../${path}` : path;
}

function imagePath(filename) {
    return sitePath(`img/${filename}`);
}

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const element = $("#cartCount");

    if (!element) {
        return;
    }

    const total = getCart().reduce((sum, item) => sum + Number(item.q || 0), 0);
    element.textContent = total;
}

function money(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function productCard(product) {
    const productUrl = sitePath(`paginas/produto.html?id=${product.id}`);

    return `
        <article class="product-card">
            <a href="${productUrl}" class="product-link">
                <div class="product-img">
                    <img
                        src="${imagePath(product.imagens[0])}"
                        alt="${product.nome}"
                        loading="lazy"
                    >
                    <span class="tag">NOVA</span>
                </div>
            </a>

            <div class="product-info">
                <p class="product-cat">${product.categoria}</p>
                <h3 class="product-name">${product.nome}</h3>
                <p class="price">
                    ${money(product.preco)}
                    <span class="old">${money(product.precoAnterior)}</span>
                </p>

                <div class="card-actions">
                    <a class="btn" href="${productUrl}">Ver produto</a>
                    <button class="btn" type="button" data-quick-add="${product.id}">
                        Adicionar
                    </button>
                </div>
            </div>
        </article>
    `;
}

function quickAdd(id) {
    const product = PRODUTOS.find((item) => item.id === id);

    if (!product) {
        return;
    }

    const cart = getCart();
    const key = `${id}-M-${product.cores[0]}`;
    const item = cart.find((cartItem) => cartItem.key === key);

    if (item) {
        item.q += 1;
    } else {
        cart.push({
            key,
            id,
            q: 1,
            size: "M",
            color: product.cores[0]
        });
    }

    saveCart(cart);

    const button = document.querySelector(`[data-quick-add="${id}"]`);

    if (button) {
        const originalText = button.textContent;
        button.textContent = "✓ Adicionado";

        setTimeout(() => {
            button.textContent = originalText;
        }, 1200);
    }
}

function initQuickAdd() {
    document.querySelectorAll("[data-quick-add]").forEach((button) => {
        button.addEventListener("click", () => {
            quickAdd(Number(button.dataset.quickAdd));
        });
    });
}

function initHeader() {
    const menuButton = $("#menuBtn");
    const nav = $("#nav");
    const accessButton = $("#accessBtn");
    const accessPanel = $("#accessPanel");

    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    if (accessButton && accessPanel) {
        accessButton.addEventListener("click", () => {
            accessPanel.classList.toggle("open");
        });
    }

    updateCartCount();
}

function changeFont(direction) {
    let size = Number(localStorage.getItem("fontSize") || 100);
    size += direction * 10;
    size = Math.max(80, Math.min(150, size));

    localStorage.setItem("fontSize", size);
    document.documentElement.style.fontSize = `${size}%`;
}

function toggleContrast() {
    document.body.classList.toggle("high-contrast");
}

function initFeatured() {
    const element = $("#featured");

    if (!element) {
        return;
    }

    element.innerHTML = PRODUTOS.slice(0, 8).map(productCard).join("");
    initQuickAdd();
}

function initCatalog() {
    const catalog = $("#catalog");

    if (!catalog) {
        return;
    }

    const search = $("#search");
    const category = $("#category");
    const sort = $("#sort");
    const size = $("#size");
    const resultCount = $("#resultCount");

    [...new Set(PRODUTOS.map((product) => product.categoria))]
        .sort((a, b) => a.localeCompare(b, "pt-BR"))
        .forEach((categoryName) => {
            category.insertAdjacentHTML(
                "beforeend",
                `<option value="${categoryName}">${categoryName}</option>`
            );
        });

    const params = new URLSearchParams(window.location.search);
    category.value = params.get("categoria") || "";

    function renderCatalog() {
        let products = [...PRODUTOS];
        const query = search.value.trim().toLowerCase();

        if (query) {
            products = products.filter((product) => {
                const searchableText = `${product.nome} ${product.categoria}`.toLowerCase();
                return searchableText.includes(query);
            });
        }

        if (category.value) {
            products = products.filter(
                (product) => product.categoria === category.value
            );
        }

        if (size.value) {
            products = products.filter((product) => product.tamanhos.includes(size.value));
        }

        if (sort.value === "low") {
            products.sort((a, b) => a.preco - b.preco);
        }

        if (sort.value === "high") {
            products.sort((a, b) => b.preco - a.preco);
        }

        catalog.innerHTML = products.map(productCard).join("");
        resultCount.textContent = `${products.length} produtos encontrados`;
        initQuickAdd();
    }

    [search, category, sort, size].forEach((element) => {
        element.addEventListener("input", renderCatalog);
        element.addEventListener("change", renderCatalog);
    });

    renderCatalog();
}

function renderDetailGallery(product) {
    const galleryItems = product.imagens.map((filename) => ({
        src: imagePath(filename),
        alt: product.nome
    }));

    if (product.modelo && !product.imagens.includes(product.modelo)) {
        galleryItems.push({
            src: imagePath(product.modelo),
            alt: `Gabriel Angelo usando ${product.nome}`
        });
    }

    window.detailGallery = galleryItems;
    window.detailGalleryIndex = 0;

    const thumbs = galleryItems.map((item, index) => `
        <button
            type="button"
            class="gallery-thumb ${index === 0 ? "active" : ""}"
            data-gallery-index="${index}"
            aria-label="Ver imagem ${index + 1}"
        >
            <img src="${item.src}" alt="${item.alt}">
        </button>
    `).join("");

    return `
        <div class="gallery">
            <div class="thumbs" id="galleryThumbs">
                ${thumbs}
            </div>

            <div class="main-photo">
                <button
                    type="button"
                    class="gallery-arrow gallery-prev"
                    id="galleryPrev"
                    aria-label="Imagem anterior"
                >
                    ‹
                </button>

                <img
                    id="mainPhoto"
                    src="${galleryItems[0].src}"
                    alt="${galleryItems[0].alt}"
                >

                <button
                    type="button"
                    class="gallery-arrow gallery-next"
                    id="galleryNext"
                    aria-label="Próxima imagem"
                >
                    ›
                </button>

                <span class="gallery-counter" id="galleryCounter">
                    1 / ${galleryItems.length}
                </span>
            </div>
        </div>
    `;
}

function updateGallery() {
    const item = window.detailGallery[window.detailGalleryIndex];
    const mainPhoto = $("#mainPhoto");
    const counter = $("#galleryCounter");

    if (!item || !mainPhoto) {
        return;
    }

    mainPhoto.src = item.src;
    mainPhoto.alt = item.alt;

    if (counter) {
        counter.textContent = `${window.detailGalleryIndex + 1} / ${window.detailGallery.length}`;
    }

    document.querySelectorAll(".gallery-thumb").forEach((thumb, index) => {
        thumb.classList.toggle("active", index === window.detailGalleryIndex);
    });
}

function changeGallery(direction) {
    if (!window.detailGallery?.length) {
        return;
    }

    const total = window.detailGallery.length;
    window.detailGalleryIndex =
        (window.detailGalleryIndex + direction + total) % total;

    updateGallery();
}

function setGallery(index) {
    if (!window.detailGallery?.[index]) {
        return;
    }

    window.detailGalleryIndex = index;
    updateGallery();
}

function initDetail() {
    const element = $("#productDetail");

    if (!element) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id")) || 1;
    const product = PRODUTOS.find((item) => item.id === id) || PRODUTOS[0];

    window.detailState = {
        product,
        selectedSize: "M",
        selectedColor: product.cores[0],
        qty: 1
    };

    const modelSection = product.modelo
        ? `
            <div class="model-block">
                <h2>Veja no modelo</h2>
                <p class="muted">
                    Gabriel Angelo usando esta peça.
                </p>
                <div class="model-photo">
                    <img src="${imagePath(product.modelo)}" alt="Gabriel Angelo usando ${product.nome}">
                </div>
            </div>
        `
        : "";

    element.innerHTML = `
        <div class="detail">
            <div>
                ${renderDetailGallery(product)}
            </div>

            <div class="detail-info">
                <p class="product-cat">${product.categoria}</p>
                <h1>${product.nome}</h1>

                <p class="price detail-price">
                    ${money(product.preco)}
                    <span class="old">${money(product.precoAnterior)}</span>
                </p>

                <p class="rating">
                    ★★★★★ ${product.avaliacao} (${product.avaliacoes} avaliações)
                </p>

                <p class="muted">${product.descricao}</p>

                <div class="options">
                    <div class="option-title">Cor</div>
                    <div class="option-row" id="colors">
                        ${product.cores.map((color, index) => `
                            <button
                                class="option ${index === 0 ? "active" : ""}"
                                type="button"
                                data-color="${color}"
                            >
                                ${color}
                            </button>
                        `).join("")}
                    </div>

                    <div class="option-title">Tamanho</div>
                    <div class="option-row" id="sizes">
                        ${product.tamanhos.map((sizeName) => `
                            <button
                                class="option ${sizeName === "M" ? "active" : ""}"
                                type="button"
                                data-size="${sizeName}"
                            >
                                ${sizeName}
                            </button>
                        `).join("")}
                    </div>

                    <div class="option-title">Quantidade</div>
                    <div class="qty">
                        <button type="button" id="detailQtyMinus" aria-label="Diminuir quantidade">−</button>
                        <span id="detailQty">1</span>
                        <button type="button" id="detailQtyPlus" aria-label="Aumentar quantidade">+</button>
                    </div>

                    <button class="btn wide" type="button" id="addDetailButton">
                        🛒 Adicionar ao carrinho
                    </button>
                </div>

                ${modelSection}
            </div>
        </div>
    `;

    document.querySelectorAll(".gallery-thumb").forEach((button) => {
        button.addEventListener("click", () => {
            setGallery(Number(button.dataset.galleryIndex));
        });
    });

    $("#galleryPrev").addEventListener("click", () => changeGallery(-1));
    $("#galleryNext").addEventListener("click", () => changeGallery(1));

    document.addEventListener("keydown", handleGalleryKeyboard);

    document.querySelectorAll("#sizes .option").forEach((button) => {
        button.addEventListener("click", () => {
            selectSize(button, button.dataset.size);
        });
    });

    document.querySelectorAll("#colors .option").forEach((button) => {
        button.addEventListener("click", () => {
            selectColor(button, button.dataset.color);
        });
    });

    $("#detailQtyMinus").addEventListener("click", () => changeQty(-1));
    $("#detailQtyPlus").addEventListener("click", () => changeQty(1));
    $("#addDetailButton").addEventListener("click", () => addDetail(product.id));
}

function handleGalleryKeyboard(event) {
    if (!window.detailGallery) {
        return;
    }

    if (event.key === "ArrowLeft") {
        changeGallery(-1);
    }

    if (event.key === "ArrowRight") {
        changeGallery(1);
    }
}

function selectSize(button, value) {
    document.querySelectorAll("#sizes .option").forEach((option) => {
        option.classList.remove("active");
    });

    button.classList.add("active");
    window.detailState.selectedSize = value;
}

function selectColor(button, value) {
    document.querySelectorAll("#colors .option").forEach((option) => {
        option.classList.remove("active");
    });

    button.classList.add("active");
    window.detailState.selectedColor = value;
}

function changeQty(delta) {
    if (!window.detailState) {
        return;
    }

    window.detailState.qty = Math.max(1, window.detailState.qty + delta);

    const quantity = $("#detailQty");

    if (quantity) {
        quantity.textContent = window.detailState.qty;
    }
}

function addDetail(id) {
    const state = window.detailState;

    if (!state || state.product.id !== id) {
        return;
    }

    const cart = getCart();
    const key = `${id}-${state.selectedSize}-${state.selectedColor}`;
    const item = cart.find((cartItem) => cartItem.key === key);

    if (item) {
        item.q += state.qty;
    } else {
        cart.push({
            key,
            id,
            q: state.qty,
            size: state.selectedSize,
            color: state.selectedColor
        });
    }

    saveCart(cart);

    const button = $("#addDetailButton");

    if (button) {
        button.textContent = "✓ Adicionado ao carrinho";

        setTimeout(() => {
            button.textContent = "🛒 Adicionar ao carrinho";
        }, 1400);
    }
}

function initCart() {
    const list = $("#cartList");
    const summary = $("#summary");
    const empty = $("#cartEmpty");

    if (!list) {
        return;
    }

    function renderCart() {
        const cart = getCart();
        const validItems = cart.filter((item) =>
            PRODUTOS.some((product) => product.id === item.id)
        );

        if (validItems.length !== cart.length) {
            saveCart(validItems);
        }

        if (!validItems.length) {
            empty.style.display = "block";
            list.style.display = "none";
            summary.style.display = "none";
            return;
        }

        empty.style.display = "none";
        list.style.display = "block";
        summary.style.display = "block";

        list.innerHTML = validItems.map((item, index) => {
            const product = PRODUTOS.find((entry) => entry.id === item.id);

            return `
                <div class="cart-row">
                    <img src="${imagePath(product.imagens[0])}" alt="${product.nome}">

                    <div class="cart-product-info">
                        <a href="${sitePath(`paginas/produto.html?id=${product.id}`)}">
                            <b>${product.nome}</b>
                        </a>
                        <p class="muted">${product.categoria}</p>

                        <div class="cart-controls">
                            <label>
                                Tamanho
                                <select class="cart-select" data-cart-size="${index}">
                                    ${product.tamanhos.map((sizeName) => `
                                        <option value="${sizeName}" ${sizeName === item.size ? "selected" : ""}>
                                            ${sizeName}
                                        </option>
                                    `).join("")}
                                </select>
                            </label>

                            <label>
                                Cor
                                <select class="cart-select" data-cart-color="${index}">
                                    ${product.cores.map((color) => `
                                        <option value="${color}" ${color === item.color ? "selected" : ""}>
                                            ${color}
                                        </option>
                                    `).join("")}
                                </select>
                            </label>
                        </div>
                    </div>

                    <div class="qty cart-qty">
                        <button type="button" data-cart-qty="${index}" data-delta="-1" aria-label="Diminuir quantidade">−</button>
                        <span>${item.q}</span>
                        <button type="button" data-cart-qty="${index}" data-delta="1" aria-label="Aumentar quantidade">+</button>
                    </div>

                    <b>${money(product.preco * item.q)}</b>

                    <button
                        class="icon-btn"
                        type="button"
                        data-remove-cart="${index}"
                        aria-label="Remover ${product.nome}"
                    >
                        🗑️
                    </button>
                </div>
            `;
        }).join("");

        const subtotal = validItems.reduce((total, item) => {
            const product = PRODUTOS.find((entry) => entry.id === item.id);
            return total + product.preco * item.q;
        }, 0);

        const shipping = subtotal >= 199 ? 0 : 19.9;
        const total = subtotal + shipping;

        summary.innerHTML = `
            <div class="summary-line">
                <span>Subtotal</span>
                <b>${money(subtotal)}</b>
            </div>

            <div class="summary-line">
                <span>Frete</span>
                <b>${shipping ? money(shipping) : "Grátis"}</b>
            </div>

            <div class="summary-line total">
                <span>Total</span>
                <b>${money(total)}</b>
            </div>

            <h3 class="payment-title">Forma de pagamento</h3>

            <div class="payment" id="paymentOptions">
                <label class="payment-option">
                    <input type="radio" name="pay" value="cartao" checked>
                    <span>💳 Cartão</span>
                </label>

                <label class="payment-option">
                    <input type="radio" name="pay" value="pix">
                    <span>Pix</span>
                </label>

                <label class="payment-option">
                    <input type="radio" name="pay" value="qr">
                    <span>▦ QR Code</span>
                </label>
            </div>

            <div class="payment-info" id="paymentInfo">
                Pagamento com cartão selecionado. Esta é uma simulação acadêmica.
            </div>

            <button class="btn wide" type="button" id="finishPurchaseButton">
                Finalizar compra
            </button>
        `;

        bindCartControls();
        initPaymentOptions();
    }

    function bindCartControls() {
        document.querySelectorAll("[data-cart-qty]").forEach((button) => {
            button.addEventListener("click", () => {
                cartQty(
                    Number(button.dataset.cartQty),
                    Number(button.dataset.delta)
                );
            });
        });

        document.querySelectorAll("[data-remove-cart]").forEach((button) => {
            button.addEventListener("click", () => {
                removeCart(Number(button.dataset.removeCart));
            });
        });

        document.querySelectorAll("[data-cart-size]").forEach((select) => {
            select.addEventListener("change", () => {
                changeCartSize(Number(select.dataset.cartSize), select.value);
            });
        });

        document.querySelectorAll("[data-cart-color]").forEach((select) => {
            select.addEventListener("change", () => {
                changeCartColor(Number(select.dataset.cartColor), select.value);
            });
        });
    }

    renderCart();
}

function cartQty(index, delta) {
    const cart = getCart();

    if (!cart[index]) {
        return;
    }

    cart[index].q = Math.max(1, Number(cart[index].q) + delta);
    saveCart(cart);
    initCart();
}

function removeCart(index) {
    const cart = getCart();

    if (!cart[index]) {
        return;
    }

    cart.splice(index, 1);
    saveCart(cart);
    initCart();
}

function changeCartSize(index, value) {
    updateCartVariant(index, "size", value);
}

function changeCartColor(index, value) {
    updateCartVariant(index, "color", value);
}

function updateCartVariant(index, property, value) {
    const cart = getCart();
    const item = cart[index];

    if (!item) {
        return;
    }

    item[property] = value;
    item.key = `${item.id}-${item.size}-${item.color}`;

    const duplicateIndex = cart.findIndex((other, otherIndex) =>
        otherIndex !== index && other.key === item.key
    );

    if (duplicateIndex !== -1) {
        cart[duplicateIndex].q += item.q;
        cart.splice(index, 1);
    }

    saveCart(cart);
    initCart();
}

function initPaymentOptions() {
    const options = document.querySelectorAll('input[name="pay"]');
    const info = $("#paymentInfo");
    const finishButton = $("#finishPurchaseButton");

    if (!options.length || !info || !finishButton) {
        return;
    }

    const texts = {
        cartao: "Pagamento com cartão selecionado. Nenhum dado real é solicitado nesta simulação.",
        pix: "PIX selecionado. A chave PIX exibida é fictícia e serve apenas para demonstração.",
        qr: "QR Code selecionado. O código abaixo é ilustrativo e não realiza pagamentos reais."
    };

    function updatePayment() {
        const selected = document.querySelector('input[name="pay"]:checked');
        info.innerHTML = texts[selected.value];

        if (selected.value === "qr") {
            info.innerHTML += `
                <div class="fake-qr" aria-label="QR Code ilustrativo">
                    ${"1010010011010010011010010110100101101001011010010110100101101001".split("").map((bit) =>
                        `<span class="qr-${bit}"></span>`
                    ).join("")}
                </div>
            `;
        }

        if (selected.value === "pix") {
            info.innerHTML += `
                <div class="pix-key">
                    Chave PIX: urbanwear@exemplo.com
                </div>
            `;
        }
    }

    options.forEach((option) => {
        option.addEventListener("change", updatePayment);
    });

    finishButton.addEventListener("click", finishPurchase);
    updatePayment();
}

function finishPurchase() {
    const payment = document.querySelector('input[name="pay"]:checked');

    if (!payment) {
        alert("Selecione uma forma de pagamento.");
        return;
    }

    const paymentNames = {
        cartao: "Cartão",
        pix: "PIX",
        qr: "QR Code"
    };

    alert(
        `${paymentNames[payment.value]} selecionado.\n\n` +
        "Compra finalizada com sucesso!\n" +
        "Esta é uma simulação acadêmica: nenhum pagamento real foi realizado."
    );

    localStorage.removeItem(CART_KEY);
    window.location.href = sitePath("index.html");
}

function initAuth() {
    const loginForm = $("#loginForm");
    const registerForm = $("#registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            localStorage.setItem(
                USER_KEY,
                JSON.stringify({
                    email: $("#email").value.trim()
                })
            );

            window.location.href = sitePath("index.html");
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();

            if ($("#senha").value !== $("#confirmar").value) {
                alert("As senhas não coincidem.");
                return;
            }

            localStorage.setItem(
                USER_KEY,
                JSON.stringify({
                    nome: $("#nome").value.trim(),
                    email: $("#email").value.trim()
                })
            );

            window.location.href = sitePath("index.html");
        });
    }
}

function initGalleryPage() {
    const gallery = $("#gallery");

    if (!gallery) {
        return;
    }

    gallery.innerHTML = PRODUTOS.map(productCard).join("");
    initQuickAdd();
}

document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initFeatured();
    initCatalog();
    initDetail();
    initCart();
    initAuth();
    initGalleryPage();

    const savedFontSize = localStorage.getItem("fontSize");

    if (savedFontSize) {
        document.documentElement.style.fontSize = `${savedFontSize}%`;
    }
});
