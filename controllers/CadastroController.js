class CadastroController {
    constructor(full_name, email, password, password_confirmation, rg) {
        this.array_cadastro = new Array();
        this.full_name = full_name;
        this.email = email;
        this.password = password;
        this.password_confirmation = password_confirmation
        this.rg = rg
    }
    /*telephoneIsValid=function() {
        let phoneRegex = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
        var digits = telephone.replace(/\D/g, "");
        return phoneRegex.test(digits);
        
      }*/
    passwordIsValid = function (password, password_confirmation) {
        if ((password === password_confirmation) && (password.length >= 8) && (password.length <= 20)) {
            return true;
        }
        else {
            return false;
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
    if(cadastroController.passwordIsValid(cadastroController.password,cadastroController.password_confirmation) == true) {
        cadastroController.array_cadastro.push(cadastro)
        alert("Você se cadastrou na lista de Espera");
    }
    else {
        console.log("Erro")
        alert("Erro: Não foi possível a realização do cadastro na lista de Espera");
        e.preventDefault();
    }
});