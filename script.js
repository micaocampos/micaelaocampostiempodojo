var elemento3 = document.getElementById("aceptar");
var elemento = document.getElementById("ciudad");
var elemento2 = document.getElementById("ciudad2");
var elemento4 = document.getElementById("ciudad3");
var elemento5 = document.getElementById("farenheit");
elemento.addEventListener("click", mensaje);
elemento2.addEventListener("click", mensaje);
elemento4.addEventListener("click", mensaje);
elemento3.addEventListener("click", cookies);
elemento5.addEventListener("change", temperatura);
function cookies() {
    console.log("hola");
    var alerta = document.getElementById("alerta");
    alerta.style.display = "none";
    console.log("hola");

}
function mensaje() {
    window.alert("Loading weather report...");
}
function temperatura() {
    //formula (v*9/5)+32

    document.getElementById("t1").innerHTML = "75.2°";

    document.getElementById("t1").style.color = "red";
    document.getElementById("t2").innerHTML = "64.4°";
    document.getElementById("t2").style.color = "blue";

    document.getElementById("t3").innerHTML = "80.6°";
    document.getElementById("t3").style.color = "red";
    document.getElementById("t4").innerHTML = "66.2°";
    document.getElementById("t4").style.color = "blue";

    document.getElementById("t5").innerHTML = "69.8°";
    document.getElementById("t5").style.color = "red";
    document.getElementById("t6").innerHTML = "60.8°";
    document.getElementById("t6").style.color = "blue";

    document.getElementById("t7").innerHTML = "78.8°";
    document.getElementById("t7").style.color = "red";
    document.getElementById("t8").innerHTML = "69.8°";
    document.getElementById("t8").style.color = "blue";
}