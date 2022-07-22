function alphaOnly(event) {

    alert(event);

    var key;

    if (window.event) {
        key = window.event.key;
    } else if (e) {
        key = e.which;
    }
    //var key = window.event.key || event.key;
    alert(key.value);
    return ((key >= 65 && key <= 90) || (key >= 95 && key <= 122));

}