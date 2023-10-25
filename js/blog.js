// const cardsData = [
//     {
//         imgSrc: "../imgs/visto.webp",
//         imgAlt: "Imagem de Visto - Tipos de Vistos para quem quer trabalhar no exterior",
//         title: "Tipos de Vistos para quem quer trabalhar no exterior",
//     },
//     {
//         imgSrc: "../imgs/pc.webp",
//         imgAlt: "Imagem do Futuro Remoto - Como Surgiu a Futuro Remoto",
//         title: "Como Surgiu a Futuro Remoto",
//     },
//     {
//         imgSrc: "../imgs/vantagens.webp",
//         imgAlt: "Imagem do Futuro Remoto - Vantagens de Trabalhar Remotamente",
//         title: "Vantagens de Trabalhar Remotamente",
//     },
//     {
//         imgSrc: "../imgs/a.arte.webp",
//         imgAlt: "Imagem do Futuro Remoto - A Arte da Produtividade em Casa: Estratégias para Trabalho Remoto Eficiente",
//         title: "A Arte da Produtividade em Casa: Estratégias para Trabalho Remoto Eficiente",
//     },
//     {
//         imgSrc: "../imgs/construir.uma.webp",
//         imgAlt: "Imagem de Visto - Construindo uma Carreira Remota de Sucesso: Um Guia Passo a Passo",
//         title: "Construindo uma Carreira Remota de Sucesso: Um Guia Passo a Passo",
//     },
//     {
//         imgSrc: "../imgs/cultivando-habilid.webp",
//         imgAlt: "Imagem do Futuro Remoto - Cultivando Habilidades para o Futuro Desenvolvimento Profissional no Trabalho Remoto",
//         title: "Cultivando Habilidades para o Futuro Desenvolvimento Profissional no Trabalho Remoto",
//     },
//     {
//         imgSrc: "../imgs/educacao-a.webp",
//         imgAlt: "Imagem de Visto - Educação à Distância: Como se Destacar em Ambientes Virtuais de Trabalho",
//         title: "Educação à Distância: Como se Destacar em Ambientes Virtuais de Trabalho",
//     },
//     {
//         imgSrc: "../imgs/equilibrio-entre.webp",
//         imgAlt: "Imagem do Futuro Remoto - Mantendo o Equilíbrio entre Trabalho e Vida Pessoal no Mundo do Trabalho Remoto",
//         title: "Mantendo o Equilíbrio entre Trabalho e Vida Pessoal no Mundo do Trabalho Remoto",
//     },
//     {
//         imgSrc: "../imgs/ferramentas-e-tecno.webp",
//         imgAlt: "Imagem do Futuro Remoto - Ferramentas e Tecnologias para Facilitar o Trabalho Remoto e a Aprendizagem Online",
//         title: "Ferramentas e Tecnologias para Facilitar o Trabalho Remoto e a Aprendizagem Online",
//     },
//     {
//         imgSrc: "../imgs/dominando-trabalho.webp",
//         imgAlt: "Imagem do Futuro Remoto - Dominando o Trabalho Remoto: Dicas Essenciais para o Sucesso Profissional",
//         title: "Dominando o Trabalho Remoto: Dicas Essenciais para o Sucesso Profissional",
//     },
//     {
//         imgSrc: "../imgs/comunicacao-efetiva.webp",
//         imgAlt: "Imagem do Futuro Remoto - O Papel da Comunicação Efetiva no Trabalho Remoto: Dicas e Estratégias",
//         title: "O Papel da Comunicação Efetiva no Trabalho Remoto: Dicas e Estratégias",
//     },
//     {
//         imgSrc: "../imgs/ergonomia-e-saude.webp",
//         imgAlt: "Imagem de Visto - Ergonomia e Saúde no Trabalho Remoto: Como Manter um Ambiente de Trabalho Confortável",
//         title: "Ergonomia e Saúde no Trabalho Remoto: Como Manter um Ambiente de Trabalho Confortável",
//     },
// ];

// function createCard(cardData) {
//     return `
//         <article class="card">
//             <div class="card-content">
//                 <div class="card-image-container">
//                     <img src="${cardData.imgSrc}" alt="${cardData.imgAlt}" class="card-image">
//                 </div>
//                 <div class="card-text-container">
//                     <h3>${cardData.title}</h3>
//                     <a href="#" class="card-link">Leia mais</a>
//                 </div>
//             </div>
//         </article>
//     `;
// }

// function addCardsToContainer(cardsData, container) {
//     cardsData.forEach((cardData) => {
//         const cardHTML = createCard(cardData);
//         container.insertAdjacentHTML("beforeend", cardHTML);
//     });
// }

// // Obtém o container onde os cards serão adicionados
// const cardContainer = document.getElementById("card-container");

// // Cria e adiciona os cards ao container
// addCardsToContainer(cardsData, cardContainer);



const maxCardsPerPage = 6;
const cardContainer = document.getElementById("card-container");
const paginationContainer = document.getElementById("pagination");
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


let currentPage = 0;
const totalPages = Math.ceil(cardsData.length / maxCardsPerPage);

function createCard(cardData) {
    return `
        <article class="card">
            <div class="card-content">
                <div class="card-image-container">
                    <img src="${cardData.imgSrc}" alt="${cardData.imgAlt}" class="card-image">
                </div>
                <div class="card-text-container">
                    <h3>${cardData.title}</h3>
                    <a href="#" class="card-link"  style="color: white; text-decoration: none;" >Leia mais</a>
                </div>
            </div>
        </article>
    `;
}

function renderCards(page) {
    const start = page * maxCardsPerPage;
    const end = (page + 1) * maxCardsPerPage;
    const currentCards = cardsData.slice(start, end);

    cardContainer.innerHTML = ""; // Limpa o contêiner de cartões antes de renderizar

    currentCards.forEach((cardData) => {
        const cardHTML = createCard(cardData);
        cardContainer.insertAdjacentHTML("beforeend", cardHTML);
    });
}

function createPagination() {
    for (let i = 0; i < totalPages; i++) {
        const pageNumber = i + 1;
        const pageButton = document.createElement("button");
        pageButton.textContent = pageNumber;
        pageButton.classList.add("page-button");
        pageButton.addEventListener("click", () => {
            currentPage = i;
            renderCards(currentPage);
        });
        paginationContainer.appendChild(pageButton);
    }
}

function initialize() {
    createPagination();
    renderCards(currentPage);

    // Seleciona o botão "1" quando a página é carregada
    const firstPageButton = document.querySelector(".page-button");
    if (firstPageButton) {
        firstPageButton.classList.add("selected");
    }
}

initialize();

document.addEventListener("DOMContentLoaded", function () {
    const paginationButtons = document.querySelectorAll(".pagination .page-button");

    paginationButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            paginationButtons.forEach(function (btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
        });
    });

    updateJobListings();
});
