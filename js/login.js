function entrar() {
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('password');

    if (!emailInput.value.trim() || !senhaInput.value.trim()) {
        exibirMensagemDeErro('Preencha todos os campos antes de continuar.');
        return;
    }

    const listUser = JSON.parse(localStorage.getItem('listUser')) || [];
    let encontrouUsuario = false;
    let senhaIncorreta = false;

    for (const item of listUser) {
        if (emailInput.value === item.emailCad) {
            if (senhaInput.value === item.senhaCad) {
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
            } else {
                senhaIncorreta = true;
            }
        }
    }

    if (encontrouUsuario) {
        limparMensagemDeErro();
        redirecionarParaPaginaBlog();
    } else {
        if (senhaIncorreta) {
            exibirMensagemDeErro('Senha incorreta. Por favor, tente novamente.');
        } else {
            exibirMensagemDeErro('Usuário não encontrado. Por favor, verifique seu email ou cadastre-se.');
        }
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
    const tokenLength = 32; 

    const array = new Uint8Array(tokenLength);
    crypto.getRandomValues(array);

    // Converte o array de bytes em uma representação hexadecimal
    const token = Array.from(array)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');

    return token;
}

function redirecionarParaPaginaBlog() {
    window.location.href = '../html/candidatar.html';
}


window.addEventListener('load', () => {
    const userToken = localStorage.getItem('userToken');
    const hasRedirected = localStorage.getItem('hasRedirected');

    if (userToken && !hasRedirected) {
        localStorage.setItem('hasRedirected', 'true'); // Marca como redirecionado
        redirecionarParaPaginaBlog();
    } else {
        
    }
});

localStorage.removeItem('hasRedirected');

