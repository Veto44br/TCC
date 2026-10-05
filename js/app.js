const CART_KEY = "altwear_cart";
const USER_KEY = "altwear_user";
const ORDERS_KEY = "altwear_orders";
const RETURNS_KEY = "altwear_returns";
const REVIEWS_KEY = "altwear_reviews";

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

    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            nav.classList.toggle("open");
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

    const products = PRODUTOS.slice(0, 8);
    element.innerHTML = products.map((product) => `
        <article class="home-product-card">
            <a href="${sitePath(`paginas/produto.html?id=${product.id}`)}">
                <div class="home-product-image">
                    <img src="${imagePath(product.imagens[0])}" alt="${product.nome}" loading="lazy">
                    <span class="home-product-tag">Mais vendidos</span>
                    <span class="home-product-heart" aria-hidden="true">♡</span>
                </div>
                <div class="home-product-info">
                    <h3>${product.nome}</h3>
                    <p class="price">${money(product.preco)} <span class="old">${money(product.precoAnterior)}</span></p>
                </div>
            </a>
        </article>
    `).join("");

    initProductCarousel(products.length);
}

function initProductCarousel(total) {
    const track = $("#featured");
    const previous = $("#carouselPrev");
    const next = $("#carouselNext");
    const dots = $("#carouselDots");

    if (!track || !previous || !next) {
        return;
    }

    let index = 0;
    const getStep = () => {
        const item = track.querySelector(".carousel-item, .home-product-card");
        return item ? item.getBoundingClientRect().width + 22 : 0;
    };

    function update() {
        const step = getStep();
        track.style.transform = `translateX(-${index * step}px)`;

        if (dots) {
            dots.querySelectorAll("button").forEach((dot, dotIndex) => {
                dot.classList.toggle("active", dotIndex === index);
            });
        }
    }

    const pages = () => Math.max(1, total - visibleCarouselItems() + 1);

    function visibleCarouselItems() {
        const viewport = document.querySelector(".carousel-viewport, .home-products-viewport");
        const item = track.querySelector(".carousel-item, .home-product-card");

        if (!viewport || !item) {
            return 1;
        }

        return Math.max(1, Math.floor((viewport.clientWidth + 22) / (item.getBoundingClientRect().width + 22)));
    }

    function rebuildDots() {
        if (!dots) {
            return;
        }

        const count = pages();
        index = Math.min(index, count - 1);
        dots.innerHTML = Array.from({ length: count }, (_, dotIndex) => `
            <button type="button" aria-label="Ir para grupo ${dotIndex + 1}" class="${dotIndex === index ? "active" : ""}"></button>
        `).join("");

        dots.querySelectorAll("button").forEach((dot, dotIndex) => {
            dot.addEventListener("click", () => {
                index = dotIndex;
                update();
            });
        });
    }

    previous.addEventListener("click", () => {
        index = Math.max(0, index - 1);
        update();
    });

    next.addEventListener("click", () => {
        index = Math.min(pages() - 1, index + 1);
        update();
    });

    window.addEventListener("resize", () => {
        rebuildDots();
        update();
    });

    rebuildDots();
    update();
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

            <h3 class="payment-title" id="pagamento">Forma de pagamento</h3>

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

    const cart = getCart();
    const subtotal = cart.reduce((total, item) => {
        const product = getProductById(item.id);
        return total + (product ? product.preco * item.q : 0);
    }, 0);
    const shipping = subtotal >= 199 ? 0 : 19.9;
    const orders = getJson(ORDERS_KEY, []);

    const currentUser = getUser();
    const order = {
        id: `AW-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`,
        email: currentUser?.email || "visitante@altwear.local",
        date: new Date().toLocaleDateString("pt-BR"),
        status: "A caminho",
        delivery: "Previsão: em até 7 dias úteis",
        total: subtotal + shipping,
        items: cart.map((item) => ({
            productId: item.id,
            q: item.q,
            size: item.size,
            color: item.color
        }))
    };

    orders.unshift(order);
    saveJson(ORDERS_KEY, orders);
    if (typeof saveOrderToDatabase === "function") {
        saveOrderToDatabase(order);
    }

    alert(
        `${paymentNames[payment.value]} selecionado.\n\n` +
        "Compra finalizada com sucesso!\n" +
        "Seu pedido foi salvo em Minha conta.\n" +
        "Esta é uma simulação acadêmica: nenhum pagamento real foi realizado."
    );

    localStorage.removeItem(CART_KEY);
    window.location.href = sitePath("paginas/perfil.html");
}

function initAuth() {
    const loginForm = $("#loginForm");
    const registerForm = $("#registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const email = $("#email").value.trim().toLowerCase();
            const senha = $("#senha").value;
            const stored = typeof findUserInDatabase === "function" ? await findUserInDatabase(email) : null;

            if (stored && stored.passwordHash && stored.passwordHash !== await hashPassword(senha)) {
                alert("E-mail ou senha incorretos.");
                return;
            }

            const user = {
                nome: stored?.nome || email.split("@")[0],
                email
            };

            localStorage.setItem(USER_KEY, JSON.stringify(user));
            window.location.href = sitePath("index.html");
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            if ($("#senha").value !== $("#confirmar").value) {
                alert("As senhas não coincidem.");
                return;
            }

            const email = $("#email").value.trim().toLowerCase();
            const passwordHash = await hashPassword($("#senha").value);
            const user = {
                nome: $("#nome").value.trim(),
                email,
                passwordHash,
                createdAt: new Date().toISOString()
            };

            if (typeof findUserInDatabase === "function" && await findUserInDatabase(email)) {
                alert("Este e-mail já está cadastrado.");
                return;
            }

            if (typeof saveUserToDatabase === "function") {
                await saveUserToDatabase(user);
            }

            localStorage.setItem(USER_KEY, JSON.stringify({ nome: user.nome, email: user.email }));
            alert("Conta criada com sucesso!");
            window.location.href = sitePath("index.html");
        });
    }
}

async function hashPassword(value) {
    if (!window.crypto?.subtle) {
        return value;
    }
    const data = new TextEncoder().encode(value);
    const buffer = await crypto.subtle.digest("SHA-256", data);
    return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}


function getUser() {
    try {
        return JSON.parse(localStorage.getItem(USER_KEY) || "null");
    } catch {
        return null;
    }
}

function saveJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getJson(key, fallback = []) {
    try {
        return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch {
        return fallback;
    }
}

function getProductById(id) {
    return PRODUTOS.find((product) => product.id === Number(id));
}

function getDemoOrders() {
    return [
        {
            id: "UW-2026-001",
            date: "28/09/2026",
            status: "A caminho",
            delivery: "Previsão: 06/10/2026",
            total: 199.90,
            items: [{ productId: 11, q: 1, size: "M", color: "Azul clara" }]
        },
        {
            id: "UW-2026-002",
            date: "19/09/2026",
            status: "Entregue",
            delivery: "Entregue em 24/09/2026",
            total: 189.90,
            items: [{ productId: 6, q: 1, size: "G", color: "Preto" }]
        }
    ];
}

function ensureDemoProfileData() {
    if (!localStorage.getItem(ORDERS_KEY)) {
        saveJson(ORDERS_KEY, getDemoOrders());
    }

    if (!localStorage.getItem(REVIEWS_KEY)) {
        saveJson(REVIEWS_KEY, [
            {
                productId: 6,
                rating: 5,
                text: "A modelagem ficou ótima e a estampa é muito bonita.",
                date: "25/09/2026"
            }
        ]);
    }

    if (!localStorage.getItem(RETURNS_KEY)) {
        saveJson(RETURNS_KEY, [
            {
                id: "DEV-2026-001",
                orderId: "UW-2026-002",
                status: "Reembolso concluído",
                amount: 189.90,
                method: "PIX",
                date: "27/09/2026"
            }
        ]);
    }
}

function initProfile() {
    const profileTitle = $("#profileTitle");
    const ordersList = $("#ordersList");

    if (!profileTitle || !ordersList) {
        return;
    }

    const user = getUser();

    if (!user) {
        profileTitle.textContent = "Entre na sua conta";
        $("#profileEmail").textContent = "Acesse pedidos, entregas, avaliações e devoluções.";
        ordersList.innerHTML = `
            <div class="empty-state">
                <h3>Você ainda não está conectado.</h3>
                <p class="muted">Entre ou crie sua conta para acessar seu perfil.</p>
                <a class="btn" href="login.html">Entrar</a>
                <a class="btn btn-outline" href="cadastro.html">Criar conta</a>
            </div>
        `;
        $("#shippingList").innerHTML = "";
        $("#reviewsList").innerHTML = "";
        $("#returnsPreview").innerHTML = "";
        $("#logoutButton").style.display = "none";
        return;
    }

    ensureDemoProfileData();

    profileTitle.textContent = user.nome ? `Olá, ${user.nome.split(" ")[0]}!` : "Meu perfil";
    $("#profileEmail").textContent = user.email || "";

    $("#logoutButton").addEventListener("click", () => {
        localStorage.removeItem(USER_KEY);
        window.location.href = "../index.html";
    });

    renderProfileData();
}

function renderProfileData() {
    const orders = getJson(ORDERS_KEY, []);
    const reviews = getJson(REVIEWS_KEY, []);
    const returns = getJson(RETURNS_KEY, []);
    const shipping = orders.filter((order) => order.status === "A caminho");

    $("#profileStats").innerHTML = `
        <div class="profile-stat"><strong>${orders.length}</strong><span>Pedidos</span></div>
        <div class="profile-stat"><strong>${shipping.length}</strong><span>A caminho</span></div>
        <div class="profile-stat"><strong>${reviews.length}</strong><span>Avaliações</span></div>
        <div class="profile-stat"><strong>${returns.length}</strong><span>Devoluções</span></div>
    `;

    renderShipping(shipping);
    renderOrders(orders);
    renderReviews(reviews);
    renderReturnsPreview(returns);
}

function renderShipping(orders) {
    const element = $("#shippingList");

    if (!orders.length) {
        element.innerHTML = `<div class="empty-state"><h3>Nenhum produto a caminho.</h3><p class="muted">Quando uma compra for finalizada, ela aparecerá aqui.</p></div>`;
        return;
    }

    element.innerHTML = orders.map((order) => `
        <article class="order-card shipping-card">
            <div class="order-product-list">
                ${order.items.map((item) => {
                    const product = getProductById(item.productId);
                    if (!product) return "";
                    return `
                        <img src="${imagePath(product.imagens[0])}" alt="${product.nome}">

                        <div>
                            <h3>${product.nome}</h3>
                            <p class="muted">${item.q} unidade(s) · tamanho ${item.size}</p>
                        </div>
                    `;
                }).join("")}
            </div>
            <div class="order-status status-shipping">🚚 ${order.status}</div>
            <p class="muted">${order.delivery}</p>
        </article>
    `).join("");
}

function renderOrders(orders) {
    const element = $("#ordersList");

    element.innerHTML = orders.map((order) => `
        <article class="order-card">
            <div class="order-header">
                <div>
                    <strong>Pedido ${order.id}</strong>
                    <p class="muted">${order.date}</p>
                </div>
                <span class="order-status ${order.status === "Entregue" ? "status-delivered" : "status-shipping"}">${order.status}</span>
            </div>
            <div class="order-items-compact">
                ${order.items.map((item) => {
                    const product = getProductById(item.productId);
                    if (!product) return "";
                    return `<span>${item.q}× ${product.nome} · ${item.size}</span>`;
                }).join("")}
            </div>
            <div class="order-footer">
                <b>Total: ${money(order.total)}</b>
                <span class="muted">${order.delivery}</span>
            </div>
        </article>
    `).join("");
}

function renderReviews(reviews) {
    const element = $("#reviewsList");

    if (!reviews.length) {
        element.innerHTML = `<div class="empty-state"><h3>Nenhuma avaliação ainda.</h3><p class="muted">Depois de receber um produto, você poderá registrar sua opinião.</p></div>`;
        return;
    }

    element.innerHTML = reviews.map((review) => {
        const product = getProductById(review.productId);
        return `
            <article class="review-card">
                <div>
                    <strong>${product ? product.nome : "Produto"}</strong>
                    <div class="review-stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
                </div>
                <p>${review.text}</p>
                <span class="muted">${review.date}</span>
            </article>
        `;
    }).join("");
}

function renderReturnsPreview(returns) {
    const element = $("#returnsPreview");

    if (!returns.length) {
        element.innerHTML = `<div class="empty-state"><h3>Nenhuma devolução ou reembolso.</h3><p class="muted">Suas solicitações aparecerão aqui.</p></div>`;
        return;
    }

    element.innerHTML = returns.slice(0, 2).map((item) => `
        <article class="return-row">
            <div>
                <strong>${item.id}</strong>
                <p class="muted">Pedido ${item.orderId} · ${item.date}</p>
            </div>
            <div>
                <strong>${money(item.amount)}</strong>
                <p class="order-status status-delivered">${item.status}</p>
            </div>
        </article>
    `).join("");
}

function initReturns() {
    const list = $("#returnsList");

    if (!list) {
        return;
    }

    const user = getUser();
    if (!user) {
        list.innerHTML = `<div class="empty-state"><h3>Entre na sua conta para ver suas solicitações.</h3><a class="btn" href="login.html">Entrar</a></div>`;
        return;
    }

    ensureDemoProfileData();
    renderReturnsPage();

    const requestButton = $("#requestReturnButton");
    if (requestButton) {
        requestButton.addEventListener("click", requestReturn);
    }
}

function renderReturnsPage() {
    const list = $("#returnsList");
    const returns = getJson(RETURNS_KEY, []);

    if (!returns.length) {
        list.innerHTML = `<div class="empty-state"><h3>Nenhuma solicitação registrada.</h3><p class="muted">Você ainda não solicitou uma devolução.</p></div>`;
        return;
    }

    list.innerHTML = returns.map((item) => `
        <article class="return-row">
            <div>
                <strong>${item.id}</strong>
                <p class="muted">Pedido ${item.orderId} · ${item.date}</p>
                <p>Reembolso via ${item.method}</p>
            </div>
            <div class="return-value">
                <strong>${money(item.amount)}</strong>
                <span class="order-status status-delivered">${item.status}</span>
            </div>
        </article>
    `).join("");
}

function requestReturn() {
    const orders = getJson(ORDERS_KEY, []);
    const delivered = orders.find((order) => order.status === "Entregue");

    if (!delivered) {
        alert("Não há pedidos entregues disponíveis para uma devolução.");
        return;
    }

    const reason = prompt("Qual o motivo da devolução?", "Não serviu");
    if (!reason) {
        return;
    }

    const returns = getJson(RETURNS_KEY, []);
    returns.unshift({
        id: `DEV-${Date.now()}`,
        orderId: delivered.id,
        status: "Solicitação em análise",
        amount: delivered.total,
        method: "Forma de pagamento original",
        date: new Date().toLocaleDateString("pt-BR")
    });

    saveJson(RETURNS_KEY, returns);
    renderReturnsPage();
    alert("Solicitação registrada com sucesso.");
}

function initAccessibility() {
    const button = $("#accessBtn");
    const panel = $("#accessPanel");

    if (!button || !panel) {
        return;
    }

    const setOpen = (open) => {
        panel.classList.toggle("open", open);
        button.setAttribute("aria-expanded", String(open));
        panel.setAttribute("aria-hidden", String(!open));
    };

    button.addEventListener("click", () => setOpen(!panel.classList.contains("open")));

    document.querySelectorAll("[data-access-open]").forEach((element) => {
        element.addEventListener("click", () => setOpen(true));
    });

    document.querySelectorAll("[data-access-action]").forEach((element) => {
        element.addEventListener("click", () => handleAccessibilityAction(element.dataset.accessAction));
    });

    const savedFont = Number(localStorage.getItem("fontSize") || 100);
    document.documentElement.style.fontSize = `${savedFont}%`;

    if (localStorage.getItem("accessContrast") === "true") {
        document.body.classList.add("high-contrast");
    }

    if (localStorage.getItem("accessLinks") === "true") {
        document.body.classList.add("highlight-links");
    }

    if (localStorage.getItem("accessSpacing") === "true") {
        document.body.classList.add("wide-spacing");
    }
}

function handleAccessibilityAction(action) {
    if (action === "read") {
        speakPage();
    }

    if (action === "links") {
        const enabled = !document.body.classList.contains("highlight-links");
        document.body.classList.toggle("highlight-links", enabled);
        localStorage.setItem("accessLinks", String(enabled));
    }

    if (action === "font") {
        changeFont(1);
    }

    if (action === "spacing") {
        const enabled = !document.body.classList.contains("wide-spacing");
        document.body.classList.toggle("wide-spacing", enabled);
        localStorage.setItem("accessSpacing", String(enabled));
    }

    if (action === "contrast") {
        const enabled = !document.body.classList.contains("high-contrast");
        document.body.classList.toggle("high-contrast", enabled);
        localStorage.setItem("accessContrast", String(enabled));
    }

    if (action === "reset") {
        localStorage.setItem("fontSize", "100");
        localStorage.setItem("accessContrast", "false");
        localStorage.setItem("accessLinks", "false");
        localStorage.setItem("accessSpacing", "false");
        document.documentElement.style.fontSize = "100%";
        document.body.classList.remove("high-contrast", "highlight-links", "wide-spacing");
        window.speechSynthesis?.cancel();
    }
}

function speakText(text) {
    if (!text || !window.speechSynthesis) {
        alert("A leitura de voz não está disponível neste navegador.");
        return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.slice(0, 5000));
    utterance.lang = "pt-BR";
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
}

function speakPage() {
    const main = document.querySelector("main");
    speakText(main ? main.innerText : document.body.innerText);
}

function initGalleryPage() {
    const gallery = $("#gallery");

    if (!gallery) {
        return;
    }

    gallery.innerHTML = PRODUTOS.map(productCard).join("");
    initQuickAdd();
}

function initHomeSearch() {
    const form = $("#homeSearch");
    const input = $("#homeSearchInput");

    if (!form || !input) {
        return;
    }

    form.addEventListener("submit", () => {
        input.value = input.value.trim();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initHomeSearch();
    initFeatured();
    initCatalog();
    initDetail();
    initCart();
    initAuth();
    initGalleryPage();
    initProfile();
    initReturns();
    initAccessibility();

    const savedFontSize = localStorage.getItem("fontSize");

    if (savedFontSize) {
        document.documentElement.style.fontSize = `${savedFontSize}%`;
    }
});
