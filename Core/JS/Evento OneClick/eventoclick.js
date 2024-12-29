var botonCambiar = document.getElementById("sesion");
botonCambiar.addEventListener("click", function() {
    this.innerText = "Cerrar sesión";
});

var botonEliminar = document.getElementById("botdef");
botonEliminar.addEventListener("click", function() {
    this.remove();
});

var botonEliminar = document.getElementById("mg1");
botonEliminar.addEventListener("click", function() {
    alert("Gato Atigrado was liked");
    this.innerText = "23 me gusta";
});

var botonEliminar = document.getElementById("mg2");
botonEliminar.addEventListener("click", function() {
    alert("Golden Retriever was liked");
    this.innerText = "46 me gusta";
});