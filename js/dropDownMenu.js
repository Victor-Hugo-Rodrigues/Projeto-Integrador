// Obtém a referência para o elemento da seta para baixo
const menuToggle = document.getElementById('menu-toggle');

// Obtém a referência para o elemento do menu suspenso
const dropdownMenu = document.querySelector('.dropdown-menu');

// Adiciona um ouvinte de eventos de clique à seta para baixo
menuToggle.addEventListener('click', () => {
    // Verifica se o menu está atualmente visível
    const isVisible = dropdownMenu.style.display === 'block';

    // Alterna a visibilidade do menu
    dropdownMenu.style.display = isVisible ? 'none' : 'block';
});


