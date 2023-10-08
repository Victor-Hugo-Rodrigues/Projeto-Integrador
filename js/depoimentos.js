

const cardsDepoimentos = [
    {
        imgSrc: "../imgs/gabriel-silva.webp",
        imgAlt: "Foto De Perfil Gabriel",
        userNane: "Gabriel Silva",
        avaliacao: "O site oferece uma ampla gama de oportunidades de trabalho remoto em diferentes setores e áreas de atuação. Através dele consegui a minha primeira oportunidade de trabalho como UX design"
    },
    {
        imgSrc: "../imgs/thalita-fernada.webp",
        imgAlt: "Foto De Perfil Thalita",
        userNane: "Thalita Fernanda",
        avaliacao: "Gente, vocês precisam conhecer esse site! Se você é da área de tecnologia e quer trabalhar de casa, é o lugar certo. Eu consegui um emprego dos sonhos aqui, com uma empresa top. Além disso, a comunidade é bem ativa e cheia de dicas valiosas. Tô adorando!"
    },
    {
        imgSrc: "../imgs/tatiane-silva.webp",
        imgAlt: "Foto De Tatiane ",
        userNane: "Tatiane Silva",
        avaliacao: "Achei o site por acaso, e que sorte a minha! Estava querendo uma vaga em segurança cibernética e encontrei várias aqui. Já estou participando da comunidade também, é bem ativa e acolhedora."
    },
    {
        imgSrc: "../imgs/jose-santos.webp",
        imgAlt: "Foto De Perfil José",
        userNane: "José Santos",
        avaliacao: "Encontrei este site por recomendação de um amigo e não poderia estar mais feliz. A variedade de oportunidades de trabalho remoto é incrível. Consegui uma vaga como desenvolvedor front-end em uma startup promissora. Recomendo a todos que estão em busca de empregos remotos."
    },
    {
        imgSrc: "../imgs/ana-oliveira.webp",
        imgAlt: "Foto De Perfil Ana",
        userNane: "Ana Oliveira",
        avaliacao: "Eu estava em busca de uma oportunidade de trabalho remoto na área de marketing digital e encontrei este site. Fiquei impressionada com a variedade de vagas disponíveis. Graças a ele, consegui um emprego incrível como gerente de marketing digital em uma empresa de renome. Recomendo a todos!"
    },
    {
        imgSrc: "../imgs/lucas-santos.webp",
        imgAlt: "Foto De Lucas ",
        userNane: "Lucas Santos",
        avaliacao: "Achei o site por acaso, e que sorte a minha! Estava querendo uma vaga em segurança cibernética e encontrei várias aqui. Já estou participando da comunidade também, é bem ativa e acolhedora."
    },
    {
        imgSrc: "../imgs/isabele-pereira.webp",
        imgAlt: "Foto De Perfil Isabele",
        userNane: "Isabele Pereira",
        avaliacao: "Não poderia estar mais feliz por ter encontrado este site. Como especialista em segurança cibernética, era importante para mim encontrar uma plataforma que oferecesse vagas desafiadoras e remotas. Aqui, encontrei várias oportunidades emocionantes e conheci pessoas incríveis na comunidade. É simplesmente fenomenal!"
    },
    {
        imgSrc: "../imgs/rafael-almeida.webp",
        imgAlt: "Foto De Perfil Rafael",
        userNane: "Rafael Almeida",
        avaliacao: "Encontrei este site por acaso enquanto procurava uma vaga de desenvolvedor de software remoto. Estou muito satisfeito com as oportunidades que encontrei aqui. Consegui meu emprego dos sonhos e estou trabalhando com uma equipe incrível."
    },
    {
        imgSrc: "../imgs/laura-ferreira.webp",
        imgAlt: "Foto De Perfil Laura",
        userNane: "Laura Ferreira",
        avaliacao: "Como designer gráfico, encontrar trabalhos remotos de qualidade era uma prioridade. Este site superou minhas expectativas. Encontrei várias vagas que se encaixam no meu perfil e já estou trabalhando em projetos interessantes."
    },
    {
        imgSrc: "../imgs/pedro-santos.webp",
        imgAlt: "Foto De Perfil Pedro",
        userNane: "Pedro Santos",
        avaliacao: "Se você é um entusiasta da segurança cibernética, como eu, este é o lugar para estar. Encontrei vagas desafiadoras e estimulantes aqui. A comunidade também é ótima para trocar conhecimentos e experiências."
    },
    {
        imgSrc: "../imgs/maria-oliveira.webp",
        imgAlt: "Foto De Perfil Maria",
        userNane: "Maria Oliveira",
        avaliacao: "Estava procurando por uma oportunidade de trabalho em marketing digital e este site tornou minha busca muito mais fácil. Encontrei uma vaga incrível e estou impressionada com a diversidade de oportunidades disponíveis."
    },
    {
        imgSrc: "../imgs/felipe-pereira.webp",
        imgAlt: "Foto De Perfil Felipe",
        userNane: "Felipe Pereira",
        avaliacao: "Como desenvolvedor de jogos, estava em busca de uma oportunidade remota que me permitisse trabalhar em projetos criativos. Este site me conectou a empresas que valorizam minha paixão por jogos e tecnologia. Estou adorando!"
    },

];

// Container onde os depoimentos serão inseridos
const depoimentosContainer = document.querySelector('.card-container');

// Variável para contar os IDs únicos
let uniqueIdCounter = 1;

// Função para criar depoimentos com IDs únicos
function createDepoimento(depoimento) {
    const depoimentoElement = document.createElement('div');
    depoimentoElement.classList.add('depoimentos');
    depoimentoElement.id = `depoimento-${uniqueIdCounter}`;
    uniqueIdCounter++;

    depoimentoElement.innerHTML = `
        <img src="${depoimento.imgSrc}" alt="${depoimento.imgAlt}">
        <div class="depoimento-content">
            <p>${depoimento.userNane}</p>
            <div class="star-rating">
                ${Array(5).fill('<i class="fas fa-star"></i>').join('')}
            </div>
        </div>
        <br> 
        <br> 
        <p>${depoimento.avaliacao}</p>
    `;

    depoimentosContainer.appendChild(depoimentoElement);
}

// Criar os depoimentos com IDs únicos
cardsDepoimentos.forEach(createDepoimento);


let currentIndex = 0; // Inicie o índice em 0

// Função para mostrar os cards com base no índice atual
function showCards() {
    const cards = document.querySelectorAll('.depoimentos');
    const indicators = document.querySelectorAll('.indicator');

    cards.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + 4) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Atualize a classe 'active' para a bolinha de indicador correta
    indicators.forEach((indicator, index) => {
        if (index === Math.floor(currentIndex / 4)) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Função para avançar para os próximos cards
function nextCards() {
    currentIndex += 4;

    // Verifique se o índice excede o número de cards disponíveis
    if (currentIndex >= cardsDepoimentos.length) {
        currentIndex = 0;
    }

    showCards();
}
// Função para voltar para os cards anteriores
function prevCards() {
    currentIndex -= 4;

    // Verifique se o índice é menor que 0 e ajuste para o último grupo de cards
    if (currentIndex < 0) {
        currentIndex = Math.floor((cardsDepoimentos.length - 1) / 4) * 4;
    }

    showCards();
}
// Mostrar os primeiros 4 cards inicialmente
showCards();

// Adicionar eventos de clique para as setas
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', prevCards);
rightArrow.addEventListener('click', nextCards);

// Adicionar eventos de clique para os indicadores
const indicators = document.querySelectorAll('.indicator');
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index + 1;
        showCards();
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
