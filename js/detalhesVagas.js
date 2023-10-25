
const jobs = [
    {
        imageSrc: "../imgs/imagem-de-close-up-de-programador-trabalhando-em-sua-mesa-no-escritorio.jpg",
        altText: "Foto pessoa programando",
        jobTitle: "Desenvolvedor(a) Front-End",
        companyName: "Unilever Brasil",
        jobLevel: "Pleno",
        language: "Português",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/vista-traseira-do-programador-trabalhando-a-noite-toda.jpg",
        altText: "Foto pessoa de senta de costas programando",
        jobTitle: "Desenvolvedor(a) Flutter",
        companyName: "Google",
        jobLevel: "Pleno",
        language: "Espanhol",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/desenvolvedor-full-stack.jpg",
        altText: "Foto pessoa programando",
        jobTitle: "Desenvolvedor(a) Full Stack",
        companyName: "McDonald's",
        jobLevel: "Júnior",
        language: "Inglês",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/desenvolvimento-de-jogos.jpg",
        altText: "Foto pessoa programando",
        jobTitle: "Desenvolvedor de Jogos",
        companyName: "Rockset",
        jobLevel: "Sênior",
        language: "Inglês",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/analise-dados.jpeg",
        altText: "Foto estagiário trabalhando",
        jobTitle: "Analista de Dados",
        companyName: "Microsoft",
        jobLevel: "Estágio",
        language: "Português",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/desenvolvedor-pcd.png",
        altText: "Foto trabalhador com deficiência",
        jobTitle: "Desenvolvedor(a) PCD",
        companyName: "Apple",
        jobLevel: "PCD",
        language: "Português",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/engenheiro-de-software.jpg",
        altText: "Foto freelancer trabalhando em casa",
        jobTitle: "Engenheiro de Software",
        companyName: "FreelanceTech",
        jobLevel: "Freelancer",
        language: "Inglês",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/seguranca.jpg",
        altText: "Foto Segurança Cibernética",
        jobTitle: "Segurança Cibernética",
        companyName: "Apple",
        jobLevel: "Sênior",
        language: "Bilíngue",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/ux-designer.png",
        altText: "Foto de um Designer de Experiência do Usuário",
        jobTitle: "UX Designer",
        companyName: "Amazon",
        jobLevel: "Sênior",
        language: "Inglês",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/desenvolvedor-backend.jpeg",
        altText: "Foto de uma pessoa trabalhando em desenvolvimento backend",
        jobTitle: "Desenvolvedor(a) Backend",
        companyName: "Netflix",
        jobLevel: "Pleno",
        language: "Português",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/engenheiro-devops.png",
        altText: "Foto de um Engenheiro DevOps",
        jobTitle: "Engenheiro DevOps",
        companyName: "Microsoft",
        jobLevel: "Sênior",
        language: "Inglês",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/desenvolvimento-mobile.jpg",
        altText: "Foto de um Desenvolvedor Mobile",
        jobTitle: "Desenvolvedor Mobile",
        companyName: "Facebook",
        jobLevel: "Pleno",
        language: "Espanhol",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/arquiteto-de-sistemas.jpg",
        altText: "Foto de um Arquiteto de Sistemas",
        jobTitle: "Arquiteto de Sistemas",
        companyName: "Google",
        jobLevel: "Sênior",
        language: "Inglês",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/imagem-de-close-up-de-programador-trabalhando-em-sua-mesa-no-escritorio.jpg",
        altText: "Foto de um Desenvolvedor Frontend",
        jobTitle: "Desenvolvedor(a) Frontend",
        companyName: "Apple",
        jobLevel: "Pleno",
        language: "Inglês",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/cientista-de-dados.jpeg",
        altText: "Foto de um Cientista de Dados",
        jobTitle: "Cientista de Dados",
        companyName: "IBM",
        jobLevel: "Sênior",
        language: "Português",
        link: "detalhes_vaga.html"
    },
    {
        imageSrc: "../imgs/tester-de-software.png",
        altText: "Foto de um Tester de Software",
        jobTitle: "Tester de Software",
        companyName: "Tesla",
        jobLevel: "Júnior",
        language: "Inglês",
        link: "detalhes_vaga.html"
    }
];

// Função para criar elementos HTML com classes e conteúdo
function createElement(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

// Função para criar um botão de candidatura



const container = document.getElementById("job-cards-container");
const maxCards = 4; // Defina o número máximo de cartões desejado

// Função para selecionar aleatoriamente 4 empregos
function getRandomJobs(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random()); // Embaralhe o array
    return shuffled.slice(0, num); // Pegue os primeiros "num" empregos
}

// Obtenha 4 empregos aleatórios
const randomJobs = getRandomJobs(jobs, maxCards);

randomJobs.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("job-card");

    const image = document.createElement("img");
    image.src = job.imageSrc;
    image.alt = job.altText;

    const title = document.createElement("h2");
    title.textContent = job.jobTitle;

    const company = document.createElement("p");
    company.textContent = job.companyName;
    company.style.fontSize = "13.5px";

    const jobLevel = createElement("span", "job-level");
    const jobLevelIcon = document.createElement("i");
    jobLevelIcon.classList.add("fas", "fa-fire");

    jobLevel.appendChild(jobLevelIcon);
    jobLevel.appendChild(document.createTextNode(job.jobLevel));
    
    const language = createElement("span", "language");
    const languageIcon = document.createElement("i");
    languageIcon.classList.add("fas", "fa-globe");

    language.appendChild(languageIcon);
    language.appendChild(document.createTextNode(job.language));
    


    // Adicione o botão à lista de elementos do cartão
    const elements = [image, title, company, jobLevel, language];

    // Itera pela lista de elementos e adiciona cada um ao cartão
    elements.forEach(element => {
        card.appendChild(element);
    });

    // Aplicar estilo ao texto para afastá-lo da imagem
    title.style.margin = "10px"; // Ajuste conforme necessário
    company.style.marginTop = "5px"; // Ajuste conforme necessário

    // Adicione o cartão à div do contêiner
    container.appendChild(card);
});


