//Declarar os inputs e labels//

//Mensagens de erro e sucesso ao cadastrar
let msgSuccess = document.querySelector("#success")
let msgError = document.querySelector("#error")

//Nome do cliente
let nomee = document.querySelector("#inputNome")
let labelNome = document.querySelector("#divValidar1")
let validNome = false

//Data de nascimento
let dataa = document.querySelector("#inputData")
let labelData = document.querySelector("#divValidar2")
let validData = false

//Nome materno
let nomeMaterno = document.querySelector("#inputMaterno")
let labelMaterno = document.querySelector("#divValidar3")
let validMaterno = false

//Nome paterno
let nomePaterno = document.querySelector("#inputPaterno")
let labelPaterno = document.querySelector("#divValidar4")
let validPaterno = false

//CPF do cliente
let cpf = document.querySelector("#inputCpfCad")
let labelCpf = document.querySelector("#divValidar5")
let validCpf = false

//Telefone celular
let telefone = document.querySelector("#telefone")
let labelTelefone = document.querySelector("#divValidar6")
let validTelefone = false

//Telefone fixo
let fixo = document.querySelector("#fixo")
let labelFixo = document.querySelector("#divValidar7")
let validFixo = false

//Endereço completo
let endereco = document.querySelector("#inputEndereco")
let labelEndereco = document.querySelector("#divValidar8")
let validEndereco = false

//login do cliente
let login = document.querySelector("#inputLogin")
let labelLogin = document.querySelector("#divValidar9")
let validLogin = false

//email do cliente
let email = document.querySelector("#inputEmail")
let labelEmail = document.querySelector("#divValidar10")
let validEmail = false

//senha
let senha = document.querySelector("#password")
let labelSenha = document.querySelector("#divValidar11")
let validSenha = false

//confirmação de senha
let confirma = document.querySelector("#confirm_password")
let labelConfirma = document.querySelector("#divValidar12")
let validConfirma = false

//INICIO DA VALIDAÇÃO//

// Validação do Nome do Cliente
nomee.addEventListener('keyup', () => {
    if (nomee.value.length <= 13 || /\s\s/.test(nomee.value)) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Insira o nome corretamente!'
        nomee.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = ''
        nomee.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
        validNome = true
    }
})

// Validação data de nascimento
// data.addEventListener('blur', () => {
//     if(data.value.length != 10){
//         labelData.setAttribute('style', 'color: red')
//         labelData.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Insira uma data de nascimento válida!'
//         validData = false
//     } else {
//         labelData.setAttribute('style', 'color: green')
//         labelData.innerHTML = ''
//         data.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
//         validData = true
//     }
// })
//Máscara para data de nascimento
function mascaraData(campo, e) {
    var kC = (document.all) ? Event.keyCode : e.keyCode;
    if (kC != 8 && kC != 46) {
        if (data.length == 2) {
            campo.value = data += '/';
        } else if (data.length == 5) {
            campo.value = data += '/';
        } else {
            campo.value = data;
        }
    }
}

function dataValid(retorn) {
    if (retorn == true) {
        labelData.setAttribute('style', 'color: green')
        labelData.innerHTML = ''
        dataa.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
        validData = true
    } else {
        labelData.setAttribute('style', 'color: red')
        labelData.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Você precisa ter entre 18 e 70 anos para se cadastrar!'
        dataa.setAttribute('style', 'border-color: red')
        validData = false
    }
}

function validadata() {
    var data = document.querySelector("#inputData").value; // pega o valor do input
    data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
    var data_array = data.split("-"); // quebra a data em array

    // para o IE onde será inserido no formato dd/MM/yyyy
    if (data_array[0].length != 4) {
        data = data_array[2] + "-" + data_array[1] + "-" + data_array[0]; // remonto a data no formato yyyy/MM/dd
    }

    // comparo as datas e calculo a idade
    var hoje = new Date();
    var nasc = new Date(data);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

    if (idade < 18) {
        return false;
    }

    if (idade >= 18 && idade <= 70) {
        return true;
    }

    // se for maior que 70 não vai acontecer nada!
    return false;
}
//----------------------------------------//

//Validação do nome materno
nomeMaterno.addEventListener('keyup', () => {
    if (nomeMaterno.value.length <= 13 || /\s\s/.test(nomeMaterno.value)) {
        labelMaterno.setAttribute('style', 'color: red')
        labelMaterno.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Insira o nome corretamente!'
        nomeMaterno.setAttribute('style', 'border-color: red')
        validMaterno = false
    } else {
        labelMaterno.setAttribute('style', 'color: green')
        labelMaterno.innerHTML = ''
        nomeMaterno.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
        validMaterno = true
    }
})

//Validação do nome nome paterno
nomePaterno.addEventListener('keyup', () => {
    if (nomePaterno.value.length >= 13 || nomePaterno.value.length == 0) {
        labelPaterno.setAttribute('style', 'color: green')
        labelPaterno.innerHTML = ''
        nomePaterno.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
        validPaterno = true
    } else {
        labelPaterno.setAttribute('style', 'color: red')
        labelPaterno.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Insira o nome corretamente!'
        nomePaterno.setAttribute('style', 'border-color: red')
        validPaterno = false
    }
})

//Validação do cpf

// cpf.addEventListener('keyup', () => {
//     if(cpf.value.length <= 13){
//         labelCpf.setAttribute('style', 'color: red')
//         labelCpf.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Insira um CPF válido!'
//         validCpf = false
//     } else {
//         labelCpf.setAttribute('style', 'color: green')
//         labelCpf.innerHTML = ''
//         cpf.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
//         validCpf = true
//     }
// })

function validaCpf(retorno) {
    if (retorno == true) {
        cpf.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
        $(labelCpf).html("");
        validCpf = true
    } else {
        $(labelCpf).css("color", 'red');
        $(labelCpf).html('<i class="bi bi-exclamation-triangle-fill"></i> Insira um CPF válido!');
        cpf.setAttribute('style', 'border-color: red')
        validCpf = false
    }
}

function TestaCPF(strCPF) {

    str = strCPF.replace('.', '').replace('.', '').replace('-', '');
    var cpfmask = str;
    var Soma;
    var Resto;
    Soma = 0;
    if (cpfmask == "00000000000" || cpfmask == "11111111111" || cpfmask == "22222222222" || cpfmask == "33333333333" || cpfmask == "44444444444" || cpfmask == "55555555555" || cpfmask == "66666666666" || cpfmask == "77777777777" || cpfmask == "88888888888" || cpfmask == "99999999999")
        return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(cpfmask.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(cpfmask.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfmask.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(cpfmask.substring(10, 11))) return false;
    return true;

}

//Validação telefone Celular
telefone.addEventListener('keyup', () => {
    if (telefone.value.length <= 14) {
        labelTelefone.setAttribute('style', 'color: red')
        labelTelefone.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Insira um número válido!'
        telefone.setAttribute('style', 'border-color: red')
        validTelefone = false
    } else {
        labelTelefone.setAttribute('style', 'color: green')
        labelTelefone.innerHTML = ''
        telefone.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
        validTelefone = true
    }
})

//Validação fixo
fixo.addEventListener('keyup', () => {
    //Verifica se a quantidade de caracteres inseridos é menor ou igual a 9, se sim, não valida
    if (fixo.value.length == 14 || fixo.value.length == 0) {
        labelFixo.setAttribute('style', 'color: green')
        labelFixo.innerHTML = ''
        fixo.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
        validFixo = true
            //Se não, valida
    } else {
        labelFixo.setAttribute('style', 'color: red')
        labelFixo.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Insira um número válido!'
        fixo.setAttribute('style', 'border-color: red')
        validFixo = false
    }
})


//Validação Endereço
endereco.addEventListener('keyup', () => {
    //Verifica se a quantidade de caracteres inserida é menor ou igual a 24, caso sim, não valida
    if (endereco.value.length <= 24) {
        labelEndereco.setAttribute('style', 'color: red')
        labelEndereco.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Insira no mínimo 25 caractéres!'
        endereco.setAttribute('style', 'border-color: red')
        validEndereco = false
            //Se não, valida
    } else {
        labelEndereco.setAttribute('style', 'color: green')
        labelEndereco.innerHTML = ''
        endereco.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
        validEndereco = true
    }
})

//Validar email
//ReGex da validação de email
let ev = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

function validate(emaill) {
    //Verifica se o email inserido bate com o ReGex (deve conter @ e de 2 a 3 caracteres após o ponto)
    //Caso não seja verdade, não valida
    if (!ev.test(emaill) || emaill.length < 8) {
        labelEmail.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Insira um e-mail válido!'
        labelEmail.setAttribute("style", "color: red")
        email.setAttribute('style', 'border-color: red')
        validEmail = false;
        //Se não, valida
    } else {
        labelEmail.innerHTML = "";
        email.setAttribute(
            "style",
            "border-color: green",
            "box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)"
        );
        validEmail = true;
    }
}

//Validação login
login.addEventListener('keyup', () => {
    if (login.value.length < 2) {
        //Verifica se o login inserido é menor ou igual a 5, se sim, não valida
        labelLogin.setAttribute('style', 'color: red')
        labelLogin.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Insira no mínimo 2 caractéres!'
        login.setAttribute('style', 'border-color: red')
        validLogin = false
            //Se não, valida
    } else {
        labelLogin.setAttribute('style', 'color: green')
        labelLogin.innerHTML = ''
        login.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
        validLogin = true
    }
})

//Validação senha
senha.addEventListener('keyup', () => {
    //Verifica se senha é menor ou igual a 11, se sim, da mensagem de erro e não valida
    if (senha.value.length <= 11) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Senha fraca! Insira no mínimo 12 caractéres!'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
            //Se não, valida
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = ''
        senha.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
        validSenha = true
    }
})

//Confirmar senha
confirma.addEventListener('keyup', () => {
    //Verifica se o valor inserido em "senha" é diferente do confirma senha
    if (senha.value != confirma.value) {
        //Se for diferente da a mensagem de erro e não valida
        labelConfirma.setAttribute('style', 'color: red')
        labelConfirma.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> As senhas devem ser idênticas!'
        confirma.setAttribute('style', 'border-color: red')
        validConfirma = false
            //Se não, valida
    } else {
        labelConfirma.setAttribute('style', 'color: green')
        labelConfirma.innerHTML = ''
        confirma.setAttribute('style', 'border-color: green', 'box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6)')
        validConfirma = true
    }
})

//Valida os campos e coloca os dados no localStorage
function cadastrar() {
    //Verifica se todos os campos estão validos
    if (validNome && validData && validMaterno && validPaterno && validCpf && validTelefone && validFixo && validEndereco && validEmail && validLogin && validSenha && validConfirma) {
        //Cria a array que vai guardar os dados
        let listaUsers = JSON.parse(localStorage.getItem('listaUsers') || '[]')
        listaUsers.push({
                nomeCad: nomee.value,
                dataNascimentoCad: dataa.value,
                nome_maternoCad: nomeMaterno.value,
                nome_paternoCad: nomePaterno.value,
                CpfCad: cpf.value,
                celularCad: telefone.value,
                fixoCad: fixo.value,
                endereçoCad: endereco.value,
                loginCad: login.value,
                emailCad: email.value,
                senhaCad: senha.value
            })
            //Coloca a lista em um arquivo JSON de strings
        localStorage.setItem('listaUsers', JSON.stringify(listaUsers))
            //Retira a mensagem de erro
        msgError.setAttribute('style', 'display: none')
            //Coloca a mensagem de sucesso
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<i class="bi bi-check2-circle"></i> Cadastrado! Redirecionando em 5 segundos...'
            //Define um tempo de espera de 5 segundos e envia o usuario para a tela de login
        setTimeout(() => {
            window.location.assign("telalogin.html")
        }, 5000)
    } else {
        //Retira a mensagem de sucesso caso haja
        msgSuccess.setAttribute('style', 'display: none')
            //Envia a mensagem de erro
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Há campos preenchidos incorretamente <i class="bi bi-exclamation-triangle-fill"></i>'
    }
}