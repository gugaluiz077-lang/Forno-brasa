const botoesFiltro = document.querySelectorAll(".filtro-btn");
const cards = document.querySelectorAll(".card");
const contador = document.querySelector("#contador");
const btnFinalizar = document.querySelector("#btn-finalizar");

botoesFiltro.forEach(function(botao) {
    botao.addEventListener("click", function() {

        botoesFiltro.forEach(function(btn) {
            btn.classList.remove("ativo");
        });
        botao.classList.add("ativo");

        cards.forEach(function(card) {
            if (card.dataset.categoria === botao.dataset.filtro) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });

    });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function() {
    nav.classList.toggle("aberto");
});

const pedido = [];
const botoesAdicionar = document.querySelectorAll(".btn-adicionar");

botoesAdicionar.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const card = botao.closest(".card");

        const item = {
            nome: card.dataset.nome,
            preco: card.dataset.preco
        };

        pedido.push(item);
        console.log(pedido);

        contador.textContent = pedido.length + " itens no pedido";
    });
});

btnFinalizar.addEventListener("click", function() {
    let mensagem = "Ola, gostaria de fazer o seguinte pedido:\n";

    pedido.forEach(function(item) {
        mensagem = mensagem + "- " + item.nome + " (R$ " + item.preco + ")\n";
    });

    const mensagemCodificada = encodeURIComponent(mensagem);
    const link = "https://wa.me/558494639734?text=" + mensagemCodificada;

    window.open(link, "_blank");
});