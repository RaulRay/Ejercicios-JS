//Construir un algoritmo que dado la categoría y sueldo de un trabajador calcule el aumento de
//sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del trabajador y
//su nuevo sueldo.
//CATEGORIA INCREMENTO
//1 15%
//2 10%
//3 6%
//4 3%*/

const prompt = require("prompt-sync")();
let categoria = Number(prompt("Define la categoria: "));
let sueldo = Number(prompt("Define el sueldo actual: "));

if (!isNaN(categoria) && !isNaN(sueldo)) {
  switch (categoria) {
    case 1:
      console.log("El sueldo ahora es", sueldo * 1.15);
      break;
    case 2:
      console.log("El sueldo ahora es", sueldo * 1.1);
      break;
    case 3:
      console.log("El sueldo ahora es", sueldo * 1.06);
      break;
    case 4:
      console.log("El sueldo ahora es", sueldo * 1.03);
    default: 
      console.log("Error, categoria equivocada");
  }
}

console.log("Pero que has escrito?")