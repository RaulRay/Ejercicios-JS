document.addEventListener("DOMContentLoaded", (evento) => inicio(evento));

function inicio(event) {
  document.getElementById("calcular").addEventListener("click", calcular);
}
function calcular() {
  const operacion = document.getElementById("operacion").value;
  const num1 = parseInt(document.getElementById("numUno").value);
  const num2 = parseInt(document.getElementById("numDos").value);
  window.alert("Resultado: " + zuitch(operacion, num1, num2));
}
  function zuitch (operacion, num1, num2) {
    switch (operacion) {
      case "suma":
        return num1 + num2;
      case "resta":
        return num1 - num2;
      case "multiplicacion":
        return num1 * num2;
      case "division":
        return num1 / num2;
      case "resto":
        return num1 % num2;
    }
  } 

