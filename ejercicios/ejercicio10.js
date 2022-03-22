//Construir un algoritmo que dado la categoría y sueldo de un trabajador calcule el aumento de
//sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del trabajador y
//su nuevo sueldo.
//CATEGORIA INCREMENTO
//1 15%
//2 10%
//3 6%
//4 3%*/

// const prompt = require("prompt-sync")();
// let categoria = Number(prompt("Define la categoria: "));
// let sueldo = Number(prompt("Define el sueldo actual: "));
document.addEventListener ('DOMContentLoaded', evento => inicio(evento));

function inicio(event) {
  document.getElementById("enviarCat").addEventListener("click", calcular);
}
function calcular (){
  const incr = [1.15,1.1,1.06,1.03]
  const sueldo = parseInt(document.getElementById("sueldo").value);
  const categoria = parseInt(document.getElementById("categoria").value);
  const nuevo = sueldo * incr[categoria-1];
  switch (categoria) {
    case 1:
      window.alert(nuevo);
      break;
    case 2:
      window.alert("El sueldo ahora es" + nuevo);
      break;
    case 3:
      window.alert("El sueldo ahora es" + nuevo);
      break;
    case 4:
      window.alert("El sueldo ahora es"+  nuevo);
    default: 
    window.alert("Error, categoria equivocada");
  }
}
