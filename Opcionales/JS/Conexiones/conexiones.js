var soliconexiones = 2
var misconexiones = 500
var cantidadsolicitudes = document.querySelector("#cantidadsoli");
var conexionestotales = document.querySelector("#cantidadconexiones")
document.addEventListener("DOMContentLoaded", function () {
    const botonesAceptar = document.querySelectorAll(".aceptar");
    botonesAceptar.forEach((boton) => {
        boton.addEventListener("click", function () {
            const solicitud = boton.parentElement;
            solicitud.remove();
            soliconexiones--
            cantidadsolicitudes.innerText = "Solicitudes de Conexión (" + soliconexiones + ")"
            misconexiones++
            conexionestotales.innerText = "Tus Conexiones (" + misconexiones + ")"
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const botonesAceptar = document.querySelectorAll(".rechazar");
    botonesAceptar.forEach((boton) => {
        boton.addEventListener("click", function () {
            const solicitud = boton.parentElement;
            solicitud.remove();
            soliconexiones--
            cantidadsolicitudes.innerText = "Solicitudes de Conexión (" + soliconexiones + ")"
        });
    });
});

var nombre = document.querySelector("#nombre");
var editarperfil = document.getElementById("button_perfil")
editarperfil.addEventListener("click", function() {
    nombre.innerText = "Soy Batman";
});