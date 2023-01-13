class CadastroController {
    constructor(full_name, email, password, password_confirmation, rg) {
        this.array_cadastro = new Array();
        this.full_name = full_name;
        this.email = email;
        this.password = password;
        this.password_confirmation = password_confirmation
        this.rg = rg
        this.erro=['',
                   'Senha e Confirmação diferentes', 
                   'Senha tem menos de 8 caracteres', 
                   'Senha tem mais de 20 caracteres']
    }
    passwordIsValid = function (password, password_confirmation) {
        if ((password === password_confirmation) &&
            (password.length >= 8) && 
            (password.length <= 20)) {
            return true;
        }
        else if(password !== password_confirmation){
            return this.erro[1];
        }
        else if(password.length < 8){
            return this.erro[2];
        }
        else if(password.length > 20){
            return this.erro[3];
        }
    }
}
const form = document.querySelector('form');
cadastroController = new CadastroController(document.getElementById('full_name').value, document.getElementById('email').value,
                                            document.getElementById('password').value,
                                            document.getElementById('password_confirmation').value,
                                            document.getElementById('rg').value);
form.addEventListener('submit', (e) => {
    const cadastro = new Cadastro(document.getElementById('full_name').value, document.getElementById('email').value,
        document.getElementById('password').value, document.getElementById('password_confirmation').value,
        document.getElementById('rg').value)
        let erro = cadastroController.passwordIsValid(cadastroController.password,cadastroController.password_confirmation)
    if(erro == true) {
        cadastroController.array_cadastro.push(cadastro)
        alert("Você se cadastrou na lista de Espera");
    }
    else {
        console.log("Erro")
        alert(erro);
        e.preventDefault();
    }
});