const prompt = require("prompt-sync")();

let a = Number(prompt("Introduce un número: ")); //Number convierte a numero lo que introduces por la consola (string por defecto)

let b = Number(prompt("Introduce otro numero: "));

let c = a;
a = b;
b = c;

console.log("El primer numero ahora es: " + b);
console.log("El segundo numero ahora es: " + a);