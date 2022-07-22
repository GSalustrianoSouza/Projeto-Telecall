/* Máscara telefone celular */
function mascaraa(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascaraa()", 1)
}

function execmascaraa() {
    v_obj.value = v_fun(v_obj.value)
}

function mcel(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    return v;
}

function id(el) {
    return document.getElementById(el);
}
window.onload = function() {
        id('telefone').onkeydown = function() {
            mascaraa(this, mcel);
        }
    }
    //Máscara telefone fixo

function Mascara(objeto) {
    if (objeto.value.length == 1)
        objeto.value = '(' + objeto.value;

    if (objeto.value.length == 3)
        objeto.value = objeto.value + ') ';

    if (objeto.value.length == 9)

        objeto.value = objeto.value + '-';
}


//Duas separadas pois dão conflito, uma funciona e a outra não