function entrar() {
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('password');
    const msgError = document.getElementById('msgError');

    // Verifica se os campos de e-mail e senha estão vazios
    if (emailInput.value.trim() === '' || senhaInput.value.trim() === '') {
        exibirMensagemDeErro('Preencha todos os campos antes de continuar.');
        return; // Retorna imediatamente para evitar a execução subsequente
    }

    const listUser = JSON.parse(localStorage.getItem('listUser')) || [];
    let encontrouUsuario = false;

    for (const item of listUser) {
        if (emailInput.value === item.emailCad && senhaInput.value === item.senhaCad) {
            encontrouUsuario = true;

            const token = gerarToken();
            localStorage.setItem('userToken', token);

            const usuarioLogado = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            };

            localStorage.setItem('userLogado', JSON.stringify(usuarioLogado));
            break;
        }
    }

    if (encontrouUsuario) {
        limparMensagemDeErro();
        redirecionarParaPaginaBlog();
    } else {
        exibirMensagemDeErro('Usuário não encontrado ou senha incorreta');
    }
}

function exibirMensagemDeErro(mensagem) {
    const msgError = document.getElementById('msgError');
    msgError.innerHTML = mensagem;
    msgError.style.display = 'block';
}

function limparMensagemDeErro() {
    const msgError = document.getElementById('msgError');
    msgError.textContent = '';
    msgError.style.display = 'none';
}

function gerarToken() {
    return Math.random().toString(16).substring(2);
}

function redirecionarParaPaginaBlog() {
    window.location.href = '../html/blog.html';
}
