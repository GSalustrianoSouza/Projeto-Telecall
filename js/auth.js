//Inicio da função de entrar
function entrar() {
    //Chamando os inputs e labels
    var cpfUsuario = document.getElementById("inputCpf")
    var labelCpf = document.getElementById("labelCpf")

    var senhaInput = document.getElementById("inputPasswd")
    var labelSenha = document.getElementById("labelSenha")
        //Mensagens de erro e sucesso
    var msgError = document.getElementById("error")
    var msgSuccess = document.getElementById("success")
        //Define uma lista vazia
    var listaUsers = []
        //Lista com dados que irá puxar do localStorage
    var userValid = []
        //Coleta do localStorage a lista
    listaUsers = JSON.parse(localStorage.getItem('listaUsers'))
        //Coleta os dados do localStorage
    listaUsers.forEach((item) => {
        if (cpfUsuario.value == item.CpfCad && senhaInput.value == item.senhaCad) {
            userValid = {
                CpfCad: item.CpfCad,
                senhaCad: item.senhaCad,
                loginCad: item.loginCad
            }
        }
    })
    if (cpfUsuario.value == userValid.CpfCad && senhaInput.value == userValid.senhaCad) {
        //Token para deslogar o usuario sem apagar o localStorage inteiro
        var token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
            //Retira mensagem de erro caso haja
        msgError.setAttribute('style', 'display: none')
            //Faz aparecer a mensagem de sucesso
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<i class="bi bi-check2-circle"></i> Logado! Redirecionando à página principal...'
            //Borda verde
        cpfUsuario.setAttribute('style', 'border-color: green')
        senhaInput.setAttribute('style', 'border-color: green')
            //Define um tempo de espera para o redirecionamento
        setTimeout(() => {
            window.location.assign("CPaaS.html")
        }, 3000)
    } else {
        //Define estilo da mensagem de erro
        cpfUsuario.setAttribute('style', 'border-color: red')
        senhaInput.setAttribute('style', 'border-color: red')
            //Aparece a mensagem de erro
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<i class="bi bi-exclamation-triangle-fill"></i> Usuário ou senha inválidos!'
            //Faz o foco do usuario ser o input de cpf
        cpfUsuario.focus()

    }
}
//Compara para ver se os dados digitados são corretos