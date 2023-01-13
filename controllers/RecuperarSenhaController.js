function recuperarSenha() {
    let count = 0
    const email = document.getElementById('email').value;
    cadastro = new CadastroController("teste", "teste@gmail.com", "testeteste", "testeteste", "111111111");
    console.log(cadastro.array_cadastro)
    cadastro.array_cadastro.map(cadastro1 => {
        cadastro1.email === email ? (count++, alert("Foi enviado para o e-mail informado o link de recuperação de senha")) : ('')
    })
    if (count == 0) {
        alert(`${email} não cadastrado`)
    }

}