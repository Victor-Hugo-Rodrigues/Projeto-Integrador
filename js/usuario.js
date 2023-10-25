

const userLogadoJSON = localStorage.getItem('userLogado');

// Verifique se os dados do usuário existem no localStorage
if (userLogadoJSON) {
    const userLogado = JSON.parse(userLogadoJSON);

    // Acesse o nome completo do usuário e atualize o elemento HTML
    const logado = document.querySelector("#logado");
    logado.innerHTML = `Olá, ${userLogado.nome}`;
} else {
    // Trate o caso em que os dados do usuário não estão definidos no localStorage
    console.log('Dados do usuário não encontrados no localStorage');
}

function sair() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userLogado');
    window.location.href = '../home.html';
}


