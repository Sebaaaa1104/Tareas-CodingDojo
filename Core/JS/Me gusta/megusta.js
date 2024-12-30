var mg1 = document.querySelector("#like1");
var likes1 = 0
var boton1 = document.getElementById("blike1")
boton1.addEventListener("click", function() {
    likes1++;
    mg1.innerText = likes1 + " like(s)";
});

var mg2 = document.querySelector("#like2");
var likes2 = 0
var boton2 = document.getElementById("blike2")
boton2.addEventListener("click", function() {
    likes2++;
    mg2.innerText = likes2 + " like(s)";
});

var mg3 = document.querySelector("#like3");
var likes3 = 0
var boton3 = document.getElementById("blike3")
boton3.addEventListener("click", function() {
    likes3++;
    mg3.innerText = likes3 + " like(s)";
});
