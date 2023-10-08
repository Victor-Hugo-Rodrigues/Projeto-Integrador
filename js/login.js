

function entrar() {
    const email = document.getElementById('email');
    const senha = document.getElementById('password');
    const msgError = document.getElementById('msgError');

    let listUser = JSON.parse(localStorage.getItem('listUser'));

    let encontrouUsuario = false;

    listUser.forEach((item) => {
        if (email.value === item.emailCad && senha.value === item.senhaCad) {
            encontrouUsuario = true;
    
            let token = Math.random().toString(16).substring(2);
            localStorage.setItem('userToken', token);
    
            // Armazene o usuário logado como um objeto
            let uservalid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            };
    
            localStorage.setItem('userLogado', JSON.stringify(uservalid));
        }
    });
    

    if (encontrouUsuario) {
        msgError.textContent = '';
        userEmail.style.color = 'green';
        userSenha.style.color = 'green';

        // Redirecione o usuário para a próxima página
        window.location.href = '../html/blog.html';
    } else {
        msgError.textContent = 'Usuário não encontrado ou senha incorreta';
        userEmail.style.color = 'red';
        userSenha.style.color = 'red';
    }
}
