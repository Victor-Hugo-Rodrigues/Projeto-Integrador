// Array de objetos representando os trabalhos
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


const maxCardsPerPage = 8;
const jobContainer = document.querySelector(".section-container");
const paginationContainer = document.querySelector(".pagination");
let currentPage = 0;

function createElement(tagName, className, textContent, id) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    if (id) element.id = id;
    return element;
}

function createJobListing(job, index) {
    const section = createElement("section", "job-listing");
    section.id = `job-${index}`;

    const imageContainer = createElement("div", "image-container");
    const image = createElement("img", null, null);
    image.src = job.imageSrc;
    image.alt = job.altText;
    imageContainer.appendChild(image);

    const contentContainer = createElement("div", "content-container");
    const h2 = createElement("h2", null, job.jobTitle);
    const companyName = createElement("p", "company-name", job.companyName);
    const jobLevel = createElement("span", "job-level");
    jobLevel.innerHTML = `<i class="fas fa-fire"></i> ${job.jobLevel}`;
    const language = createElement("span", "language");
    language.innerHTML = `<i class="fas fa-globe"></i> ${job.language}`;

    const link = createElement("a");
    link.href = job.link;
    const learnMoreButton = createElement("button", "learn-more", "Saiba mais");
    link.appendChild(learnMoreButton);

    contentContainer.appendChild(h2);
    contentContainer.appendChild(companyName);
    contentContainer.appendChild(jobLevel);
    contentContainer.appendChild(language);
    contentContainer.appendChild(link);

    section.appendChild(imageContainer);
    section.appendChild(contentContainer);

    return section;
}

function updatePaginationButtons() {
    paginationContainer.innerHTML = "";

    const totalPages = Math.ceil(jobs.length / maxCardsPerPage);

    for (let i = 0; i < totalPages; i++) {
        const pageButton = createElement("button", "page-button", `${i + 1}`);
        pageButton.addEventListener("click", function () {
            currentPage = i;
            updateJobListings();
        });

        paginationContainer.appendChild(pageButton);
    }

    const paginationButtons = document.querySelectorAll(".pagination .page-button");
    paginationButtons[currentPage].classList.add("selected");
}

function updateJobListings() {
    jobContainer.innerHTML = "";

    const startIndex = currentPage * maxCardsPerPage;
    const endIndex = startIndex + maxCardsPerPage;

    for (let i = startIndex; i < endIndex && i < jobs.length; i++) {
        const jobListing = createJobListing(jobs[i], i);
        jobContainer.appendChild(jobListing);
    }

    updatePaginationButtons();
}

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
