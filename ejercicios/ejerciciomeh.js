const prompt = require("prompt-sync")();
let suma = 0;
let nota = 0;
let contador = 0;
while (nota >= 0 && nota <= 10) {
    nota = Number(prompt("Introduce la nota: "));
    if(nota >= 0 && nota <= 10){
    suma = suma + nota;
    contador++}
}

console.log("La media es ", suma/contador)