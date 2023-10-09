function entrar() {
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('password');
    const msgError = document.getElementById("msgError");

    const listUser = JSON.parse(localStorage.getItem('listUser')) || [];
    
    let encontrouUsuario = false;

    for (const item of listUser) {
        if (emailInput.value === item.emailCad && senhaInput.value === item.senhaCad) {
            encontrouUsuario = true;
    
            const token = Math.random().toString(16).substring(2);
            localStorage.setItem('userToken', token);
    
            const uservalid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            };
    
            localStorage.setItem('userLogado', JSON.stringify(uservalid));
            break; 
            
        }
    }
    
    if (encontrouUsuario) {
        msgError.textContent = ''; 


        window.location.href = '../html/blog.html';
    } else {
        msgError.innerHTML = 'Usuário não encontrado ou senha incorreta'; // Exibe a mensagem de erro
    }

    msgError.style.display = 'block';
}
