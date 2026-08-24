/* ==============================
   MENU MOBILE
================================= */

const botaoMenu = document.getElementById("botaoMenu");
const menu = document.querySelector(".menu");

if (botaoMenu) {

    botaoMenu.addEventListener("click", () => {

        const aberto = menu.classList.toggle("aberto");

        botaoMenu.setAttribute(
            "aria-expanded",
            aberto
        );

    });

}


/* ==============================
   CARRINHO
================================= */

let carrinho = JSON.parse(
    localStorage.getItem("carrinho")
) || [];

const contadorCarrinho =
    document.getElementById("contadorCarrinho");

function atualizarContador() {

    if (!contadorCarrinho) {
        return;
    }

    const quantidade = carrinho.reduce(
        (total, produto) => total + produto.quantidade,
        0
    );

    contadorCarrinho.textContent = quantidade;
}

atualizarContador();


const botoesCarrinho =
    document.querySelectorAll(".botao-carrinho");

botoesCarrinho.forEach(botao => {

    botao.addEventListener("click", () => {

        const nome =
            botao.dataset.produto;

        const preco =
            Number(botao.dataset.preco);

        const produtoExistente =
            carrinho.find(
                produto => produto.nome === nome
            );

        if (produtoExistente) {

            produtoExistente.quantidade++;

        } else {

            carrinho.push({
                nome: nome,
                preco: preco,
                quantidade: 1
            });

        }

        localStorage.setItem(
            "carrinho",
            JSON.stringify(carrinho)
        );

        atualizarContador();

        botao.textContent = "✓ Adicionado!";

        setTimeout(() => {
            botao.textContent =
                "Adicionar ao carrinho";
        }, 1200);

    });

});


/* ==============================
   ACESSIBILIDADE
================================= */

const botaoAcessibilidade =
    document.getElementById(
        "botaoAcessibilidade"
    );

const painelAcessibilidade =
    document.getElementById(
        "painelAcessibilidade"
    );


if (botaoAcessibilidade) {

    botaoAcessibilidade.addEventListener(
        "click",
        () => {

            const aberto =
                painelAcessibilidade.classList.toggle(
                    "aberto"
                );

            painelAcessibilidade.setAttribute(
                "aria-hidden",
                !aberto
            );

        }
    );

}


/* ==============================
   TAMANHO DA FONTE
================================= */

let tamanhoFonte = 100;


const aumentarFonte =
    document.getElementById(
        "aumentarFonte"
    );

const diminuirFonte =
    document.getElementById(
        "diminuirFonte"
    );


if (aumentarFonte) {

    aumentarFonte.addEventListener(
        "click",
        () => {

            if (tamanhoFonte < 150) {

                tamanhoFonte += 10;

                document.documentElement.style
                    .fontSize =
                    `${tamanhoFonte}%`;

            }

        }
    );

}


if (diminuirFonte) {

    diminuirFonte.addEventListener(
        "click",
        () => {

            if (tamanhoFonte > 80) {

                tamanhoFonte -= 10;

                document.documentElement.style
                    .fontSize =
                    `${tamanhoFonte}%`;

            }

        }
    );

}


/* ==============================
   ALTO CONTRASTE
================================= */

const altoContraste =
    document.getElementById(
        "altoContraste"
    );


if (altoContraste) {

    altoContraste.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "alto-contraste"
            );

        }
    );

}


/* ==============================
   LEITOR DE TEXTO
================================= */

const lerPagina =
    document.getElementById(
        "lerPagina"
    );


if (lerPagina) {

    lerPagina.addEventListener(
        "click",
        () => {

            if (!("speechSynthesis" in window)) {

                alert(
                    "Seu navegador não suporta leitura de texto."
                );

                return;
            }

            speechSynthesis.cancel();

            const texto =
                document.querySelector("main")
                    ?.innerText;

            if (!texto) {
                return;
            }

            const fala =
                new SpeechSynthesisUtterance(texto);

            fala.lang = "pt-BR";
            fala.rate = 1;
            fala.pitch = 1;

            speechSynthesis.speak(fala);

        }
    );

}