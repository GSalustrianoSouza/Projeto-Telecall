//Pega o item userLogado do localStorage
let userLogado = JSON.parse(localStorage.getItem('userLogado'))
    //Puxa a div onde irá mostrar o nome do usuário logado.
let logado = document.querySelector("#logged")
    //Se o token no localStorage for diferente de "nada", mostre a mensagem de bem-vindo
if (localStorage.getItem('token') != null) {
    //Mensagem e chamada de função
    logado.innerHTML = `Seja bem-vindo, ${userLogado.loginCad}. <a id="sair" onclick="sair()">Sair</a>`
        //Variavel do botão de cadastro de novo usuário
    let cadastrese = document.querySelector("#botaoCad")
    let cliente = document.querySelector("#botaoClientex")
        //Remove o botão caso esteja logado
    cliente.remove()
    cadastrese.remove()
        //Se não, mostre nada
} else {
    logado.innerHTML = ''
}
//Função para deslogar o usuário, retornar ele para tela de login e apagar o token do localStorage
function sair() {
    localStorage.removeItem('token')
        //Irá aguardar alguns milisegundos até enviar o usuário para tela de login.
    setTimeout(() => {
        window.location.assign("telalogin.html")
    }, 750)
}



//!!!!!!!!!! Dark Mode !!!!!!!!!!!!

// Recebe o valor da checkbox
let darkTheme = document.getElementById('chk');
// Assimila o valor da checkbox com o valor salvo no localStorage
darkTheme.checked = JSON.parse(localStorage.getItem('darkTheme', darkTheme))
    // Verifica o valor
darkTheme.checked ?
    document.body.classList.add('dark') : // true
    document.body.classList.remove('dark'); // false

// Toda vez que o usuário mudar a checkbox
darkTheme.addEventListener('change', function(event) {
    darkTheme.checked ?
        document.body.classList.add('dark') :
        document.body.classList.remove('dark');
    // Atualiza o localStorage
    localStorage.setItem('darkTheme', darkTheme.checked)
})