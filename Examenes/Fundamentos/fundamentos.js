var botonSesion = document.getElementById("sesion");
botonSesion.addEventListener("click", function() { // Evento para alerta de inicio de sesión
    alert("Inicio de sesión exitoso");
});

var botonRentar1 = document.getElementById("rentar1"); //Boton de renta
var botonRentar2 = document.getElementById("rentar2"); //  "   "    "
var botonRentar3 = document.getElementById("rentar3"); //  "   "    "
var botonNodisponible1 = document.getElementById("nodisponible1"); //Boton de no disponible
var botonNodisponible2 = document.getElementById("nodisponible2"); //  "   "   "     "
var botonNodisponible3 = document.getElementById("nodisponible3"); //  "   "   "     "
botonRentar1.addEventListener("click", function() { //Evento card 1
    botonRentar1.style.display = "none"
    botonNodisponible1.style.display = "block"
});
botonRentar2.addEventListener("click", function() { //Evento card 2
    botonRentar2.style.display = "none";
    botonNodisponible2.style.display = "block";
});
botonRentar3.addEventListener("click", function() { //Evento card 3
    botonRentar3.style.display = "none";
    botonNodisponible3.style.display = "block";
});

var tituloGenero = document.getElementById("titulo_gen") //Funcion para cambio de título de genero
function cambiarTitulo(titulo) {
    var strTitulo = titulo.innerText
    tituloGenero.innerText = strTitulo;
}