const cardsData = [
    {
        imgSrc: "../imgs/visto.webp",
        imgAlt: "Imagem de Visto - Tipos de Vistos para quem quer trabalhar no exterior",
        title: "Tipos de Vistos para quem quer trabalhar no exterior",
    },
    {
        imgSrc: "../imgs/pc.webp",
        imgAlt: "Imagem do Futuro Remoto - Como Surgiu a Futuro Remoto",
        title: "Como Surgiu a Futuro Remoto",
    },
    {
        imgSrc: "../imgs/vantagens.webp",
        imgAlt: "Imagem do Futuro Remoto - Vantagens de Trabalhar Remotamente",
        title: "Vantagens de Trabalhar Remotamente",
    },
    {
        imgSrc: "../imgs/a.arte.webp",
        imgAlt: "Imagem do Futuro Remoto - A Arte da Produtividade em Casa: Estratégias para Trabalho Remoto Eficiente",
        title: "A Arte da Produtividade em Casa: Estratégias para Trabalho Remoto Eficiente",
    },
    {
        imgSrc: "../imgs/construir.uma.webp",
        imgAlt: "Imagem de Visto - Construindo uma Carreira Remota de Sucesso: Um Guia Passo a Passo",
        title: "Construindo uma Carreira Remota de Sucesso: Um Guia Passo a Passo",
    },
    {
        imgSrc: "../imgs/cultivando-habilid.webp",
        imgAlt: "Imagem do Futuro Remoto - Cultivando Habilidades para o Futuro Desenvolvimento Profissional no Trabalho Remoto",
        title: "Cultivando Habilidades para o Futuro Desenvolvimento Profissional no Trabalho Remoto",
    },
    {
        imgSrc: "../imgs/educacao-a.webp",
        imgAlt: "Imagem de Visto - Educação à Distância: Como se Destacar em Ambientes Virtuais de Trabalho",
        title: "Educação à Distância: Como se Destacar em Ambientes Virtuais de Trabalho",
    },
    {
        imgSrc: "../imgs/equilibrio-entre.webp",
        imgAlt: "Imagem do Futuro Remoto - Mantendo o Equilíbrio entre Trabalho e Vida Pessoal no Mundo do Trabalho Remoto",
        title: "Mantendo o Equilíbrio entre Trabalho e Vida Pessoal no Mundo do Trabalho Remoto",
    },
    {
        imgSrc: "../imgs/ferramentas-e-tecno.webp",
        imgAlt: "Imagem do Futuro Remoto - Ferramentas e Tecnologias para Facilitar o Trabalho Remoto e a Aprendizagem Online",
        title: "Ferramentas e Tecnologias para Facilitar o Trabalho Remoto e a Aprendizagem Online",
    },
    {
        imgSrc: "../imgs/dominando-trabalho.webp",
        imgAlt: "Imagem do Futuro Remoto - Dominando o Trabalho Remoto: Dicas Essenciais para o Sucesso Profissional",
        title: "Dominando o Trabalho Remoto: Dicas Essenciais para o Sucesso Profissional",
    },
    {
        imgSrc: "../imgs/comunicacao-efetiva.webp",
        imgAlt: "Imagem do Futuro Remoto - O Papel da Comunicação Efetiva no Trabalho Remoto: Dicas e Estratégias",
        title: "O Papel da Comunicação Efetiva no Trabalho Remoto: Dicas e Estratégias",
    },
    {
        imgSrc: "../imgs/ergonomia-e-saude.webp",
        imgAlt: "Imagem de Visto - Ergonomia e Saúde no Trabalho Remoto: Como Manter um Ambiente de Trabalho Confortável",
        title: "Ergonomia e Saúde no Trabalho Remoto: Como Manter um Ambiente de Trabalho Confortável",
    },
];


    // Função para criar um card
    function createCard(cardData) {
        return `
            <article class="card">
                <div class="card-content">
                    <div class="card-image-container">
                        <img src="${cardData.imgSrc}" alt="${cardData.imgAlt}" class="card-image">
                    </div>
                    <div class="card-text-container">
                        <h3>${cardData.title}</h3>
                        <a href="#" class="card-link">Leia mais</a>
                    </div>
                </div>
            </article>
        `;
    }

    // Obtém o container onde os cards serão adicionados
    const cardContainer = document.getElementById("card-container");

    // Cria e adiciona os cards ao container
    cardsData.forEach((cardData) => {
        const cardHTML = createCard(cardData);
        cardContainer.insertAdjacentHTML("beforeend", cardHTML);
    });


    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll(".transparent-button");
        const pages = document.querySelectorAll(".page");
    
        buttons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const targetId = event.target.getAttribute("data-target");
                pages.forEach((page) => {
                    page.style.display = "none";
                });
                document.getElementById(targetId).style.display = "block";
            });
        });
    });
    
    $(document).ready(function() {
        $('.transparent-button').on('click', function() {
            // Remove a classe 'active' de todos os botões transparentes
            $('.transparent-button').removeClass('active');
            // Adiciona a classe 'active' apenas ao botão clicado
            $(this).addClass('active');
        });
    });
    
    function toggleButton() {
        if (!buttonSelected) {
            document.getElementById('depoimentosButton').classList.add('selected-button');
            buttonSelected = true;
            // Execute a ação desejada aqui, por exemplo, redirecionar para 'depoimentos.html'
            window.location.href = 'depoimentos.html';
        }
    }



// // Obtém a referência para o elemento da seta para baixo
// const menuToggle = document.getElementById('menu-toggle');

// // Obtém a referência para o elemento do menu suspenso
// const dropdownMenu = document.querySelector('.dropdown-menu');

// // Adiciona um ouvinte de eventos de clique à seta para baixo
// menuToggle.addEventListener('click', () => {
// // Verifica se o menu está atualmente visível
//   const isVisible = dropdownMenu.style.display === 'block';

// // Alterna a visibilidade do menu
//   dropdownMenu.style.display = isVisible ? 'none' : 'block';
// });
