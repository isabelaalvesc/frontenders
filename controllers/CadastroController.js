class CadastroController {
    constructor(first_name, last_name, rg, cpf, email, phone, password, password_confirmation) {
        this.first_name = first_name;
        this.last_name=last_name;
        this.rg=rg
        this.cpf=cpf
        this.email = email;
        this.phone=phone
        this.password=password;
        this.password_confirmation=password_confirmation
        this.array_cadastro = [{first_name: 'teste', last_name: 'teste', rg:'123456789', cpf:'123456789101', email: 'teste@gmail.com', phone:1234567891011, password: 'testeteste'}];
        this.erro = ['',
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
        else if (password !== password_confirmation) {
            return this.erro[1];
        }
        else if (password.length < 8) {
            return this.erro[2];
        }
        else if (password.length > 20) {
            return this.erro[3];
        }
    }
    IsValidCPF=function() {
        let cpf = document.getElementById("cpf").value;
        cpf=cpf.replace(/[^\d]+/g,'');
        var cpfInteiro = new Array(11);
        var indice = 0;
        var tamanhoCPF = 11;
        var primeiroDigitoVerificador = 0;
        var vetorPrimeiroDigitoVerificador = new Array(10, 9, 8, 7, 6, 5, 4, 3, 2);
        var vetorSegundoDigitoVerificador = new Array(11, 10, 9, 8, 7, 6, 5, 4, 3, 2);
        var segundoDigitoVerificador = 0;
        if (cpf.length != tamanhoCPF) {
            console.log("Um CPF é composto de 11 números")
            return false;
        }
        if (cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999") {
            console.log("Não existe CPF com um único dígito repetido 11x");
            return false;
        }
        for (indice = 0; indice < tamanhoCPF; indice++) {
            if (!isNaN(cpf[indice])) {
                cpfInteiro[indice] = parseInt(cpf[indice]);
            }
            else {
                console.log("Caractere Inválido")
                return false
            }
        }
        for (indice = 0; indice < tamanhoCPF - 2; indice++) {
            primeiroDigitoVerificador += cpfInteiro[indice] * vetorPrimeiroDigitoVerificador[indice];
        }
        primeiroDigitoVerificador = primeiroDigitoVerificador % 11;
        if (primeiroDigitoVerificador < 2) {
            primeiroDigitoVerificador = 0;
        }
        else {
            primeiroDigitoVerificador = tamanhoCPF - primeiroDigitoVerificador;
        }
        if (cpfInteiro[9] != primeiroDigitoVerificador) {
            console.log("Primeiro Dígito Verificador Errado")
            return false
        }
        for (indice = 0; indice < tamanhoCPF - 1; indice++) {
            segundoDigitoVerificador += cpfInteiro[indice] * vetorSegundoDigitoVerificador[indice];
        }
        segundoDigitoVerificador = segundoDigitoVerificador % 11
        if (segundoDigitoVerificador < 2) {
            segundoDigitoVerificador = 0;
        }
        else {
            segundoDigitoVerificador = tamanhoCPF - segundoDigitoVerificador;
        }
        if (cpfInteiro[10] != segundoDigitoVerificador) {
            console.log("Segundo Dígito Verificador Errado")
            return false;
        }
        console.log("CPF Válido")
        return true;
    }
}
cadastrar=function() {
    const cadastroController = new CadastroController();
    const cadastro = new Cadastro(document.getElementById('first_name').value, 
                                document.getElementById('last_name').value,
                                document.getElementById('rg').value,
                                document.getElementById('cpf').value, 
                                document.getElementById('email').value,
                                document.getElementById('phone').value,
                                document.getElementById('password').value,
                                document.getElementById('password_confirmation').value,
                                document.getElementById('cep').value,
                                document.getElementById('rua').value,
                                document.getElementById('bairro').value,
                                document.getElementById('cidade').value,
                                document.getElementById('uf').value,
                                document.getElementById('ibge').value)
    let erroPassword = cadastroController.passwordIsValid(cadastro.password, cadastro.password_confirmation)
    let erroCPF= cadastroController.IsValidCPF(cadastro.cpf);
    if ((erroPassword == true)||(erroCPF == true)) {
        cadastroController.array_cadastro.push(cadastro)
        alert("Você se cadastrou na lista de Espera");
    }
    else {
        console.log("Erro")
        alert(erroPassword);
    }
}


/*const form = document.querySelector('form');
cadastroController = new CadastroController(document.getElementById('full_name').value, document.getElementById('email').value,
    document.getElementById('password').value,
    document.getElementById('password_confirmation').value,
    document.getElementById('rg').value);
form.addEventListener('submit', (e) => {
    const cadastro = new Cadastro(document.getElementById('full_name').value, document.getElementById('email').value,
        document.getElementById('password').value, document.getElementById('password_confirmation').value,
        document.getElementById('rg').value)
    let erro = cadastroController.passwordIsValid(cadastroController.password, cadastroController.password_confirmation)
    if (erro == true) {
        cadastroController.array_cadastro.push(cadastro)
        alert("Você se cadastrou na lista de Espera");
    }
    else {
        console.log("Erro")
        alert(erro);
        e.preventDefault();
    }
});*/