var botonCambiar = document.getElementById("sesion");
botonCambiar.addEventListener("click", function() {
    this.innerText = "Cerrar sesión";
});

var botonEliminar = document.getElementById("botdef");
botonEliminar.addEventListener("click", function() {
    this.remove();
});

var mggato = 22
var botonEliminar = document.getElementById("mg1");
botonEliminar.addEventListener("click", function() {
    alert("Gato Atigrado was liked");
    mggato++
    this.innerText = mggato + " me gusta";
});

var mgperro = 45
var botonEliminar = document.getElementById("mg2");
botonEliminar.addEventListener("click", function() {
    alert("Golden Retriever was liked");
    mgperro++
    this.innerText = mgperro + " me gusta";
});