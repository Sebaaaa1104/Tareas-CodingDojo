var botba = document.getElementById("buenosaires");
var botcdm = document.getElementById("cdmex");
var botsan = document.getElementById("santiago");
var botsp = document.getElementById("saopablo");
var botqui = document.getElementById("quito");
var divba = document.querySelector("#ba");
var divcdm = document.querySelector("#cdm");
var divsan = document.querySelector("#san");
var divsp = document.querySelector("#sp");
var divqui = document.querySelector("#qui");
botba.addEventListener("click", function() {
    divba.style.display = "block"
    divcdm.style.display = "none"
    divsan.style.display = "none"
    divsp.style.display = "none"
    divqui.style.display = "none"
});
botcdm.addEventListener("click", function() {
    divba.style.display = "none"
    divcdm.style.display = "block"
    divsan.style.display = "none"
    divsp.style.display = "none"
    divqui.style.display = "none"
});
botsan.addEventListener("click", function() {
    divba.style.display = "none"
    divcdm.style.display = "none"
    divsan.style.display = "block"
    divsp.style.display = "none"
    divqui.style.display = "none"
});
botsp.addEventListener("click", function() {
    divba.style.display = "none"
    divcdm.style.display = "none"
    divsan.style.display = "none"
    divsp.style.display = "block"
    divqui.style.display = "none"
});
botqui.addEventListener("click", function() {
    divba.style.display = "none"
    divcdm.style.display = "none"
    divsan.style.display = "none"
    divsp.style.display = "none"
    divqui.style.display = "block"
});

function inicio() {
    alert("Cargando Reporte del Clima");
}
setTimeout(inicio,1);

var botcoky = document.getElementById("coky");
var barracoky = document.querySelector(".cookies")
botcoky.addEventListener("click", function() {
    barracoky.remove()
});