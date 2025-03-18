document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        var usuario = document.getElementById("txtUsuario").value,
            senha = document.getElementById("txtSenha").value,
            mensagemErro = document.getElementById("mensagemErro");

        if (usuario !== "ADM" || senha !== "1234") {
           alert("Usuario ou senha incorretos!")
            
        } else {
            window.location.href = "indice.html";
        }
    });
});