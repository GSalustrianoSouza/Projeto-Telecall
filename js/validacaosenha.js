// checkPwd = function() {
//     var str = document.getElementById('password').value;
//     if (str.length < 6) {
//         alert("A senha está muito pequena!");
//         return ("too_short");
//     } else if (str.length > 50) {
//         alert("A senha é muito longa!");
//         return ("too_long");
//     } else if (str.search(/\d/) == -1) {
//         alert("Não há números na senha.");
//         return ("no_num");
//     } else if (str.search(/[a-zA-Z]/) == -1) {
//         alert("Não há letras na senha.");
//         return ("no_letter");
//     } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) {
//         alert("A senha possui cactéres inválidos!");
//         return ("bad_char");
//     }
//     return ("ok");
// }