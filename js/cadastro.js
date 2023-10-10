
const labelNome = document.getElementById("labelNome");
const name = document.getElementById("name");
const msgErroNome = document.getElementById("msgErroNome"); 
let validNome = false;

const labelEmail = document.getElementById("labelEmail");
const email = document.getElementById("email");
const msgErroEmail = document.getElementById("msgErroEmail"); 
let validEmail = false;

const labelPassword = document.getElementById("labelPassword");
const password = document.getElementById("password"); 
const msgErroPassword = document.getElementById("msgErroPassword"); 
let validPassword = false;

// Validação do campo Nome
name.addEventListener('keyup', () => {
    if (name.value.length <= 7) {
        labelNome.style.color = 'red';
        msgErroNome.style.color = 'red';
        msgErroNome.innerHTML = '* Insira no mínimo 8 caracteres';
        validNome = false;
    } else {
        labelNome.style.color = 'green';
        msgErroNome.innerHTML = '';
        validNome = true;
        name.style.backgroundColor = '';
    }
});

email.addEventListener('keyup', () => {
    if (!isValidEmail(email.value)) {
        labelEmail.style.color = 'red';
        msgErroEmail.style.color = 'red';
        msgErroEmail.innerHTML = '* Insira um email válido';
        validEmail = false;
    } else {
        labelEmail.style.color = 'green';
        msgErroEmail.innerHTML = '';
        validEmail = true;
    }
});

password.addEventListener('keyup', () => {
    if (password.value.length <= 5) { 
        labelPassword.style.color = 'red';
        msgErroPassword.style.color = 'red';
        msgErroPassword.innerHTML = '* Insira no mínimo 6 caracteres'; 
        validPassword = false;
    } else {
        labelPassword.style.color = 'green';
        msgErroPassword.innerHTML = '';
        validPassword = true;
    }
});


// Esta função verifica se uma string se parece com um endereço de e-mail válido.
// Ela utiliza uma expressão regular para validar o formato básico do endereço,
// verificando se ele contém uma parte local (antes do "@"), um "@" e um domínio
// válido (após o "@"), com restrições de caracteres permitidos. No entanto, esta
// função não verifica se o endereço de e-mail é real ou está ativo, apenas o formato.

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function cadastrar(submitEvent) {

    msgError.style.display = 'none'; // Limpar a mensagem de erro
    msgErroNome.innerHTML = '';
    msgErroEmail.innerHTML = '';
    msgErroPassword.innerHTML = '';

    // Verifica se algum dos campos obrigatórios está vazio ou não é válido
    if (name.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "" || !validNome || !validEmail || !validPassword) {

        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Preencha todos os campos corretamente antes de cadastrar';
        msgSuccess.innerHTML = '';
        msgSuccess.setAttribute('style', 'display: none');
    } else {
        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = '';

        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]');

        listUser.push(
            {
                nomeCad: name.value,
                emailCad: email.value,
                senhaCad: password.value
            }
        );
        

        localStorage.setItem('listUser', JSON.stringify(listUser));
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
}

// Adicione um manipulador de evento para o evento 'submit' do formulário
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    cadastrar(event); // Chama a função de cadastro
});
