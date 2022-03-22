document.addEventListener ('DOMContentLoaded', evento => inicio(evento));

function inicio(event) {
  document.getElementById("calcular").addEventListener("click", calcular);
}
function calcular() {
    let a = parseInt(document.getElementById("numUno").value);
    let b = parseInt(document.getElementById("numDos").value);
    let c = a;
    a = b;
    b = c;
window.alert("El primer numero ahora es: " + a);
window.alert("El segundo numero ahora es: " + b);
}