function showPasswd() {
    var x = document.getElementById("inputPasswd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}