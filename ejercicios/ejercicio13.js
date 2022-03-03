const prompt = require("prompt-sync")();

let base = Number(prompt("Define la base:"))
let altura = Number(prompt("Define la altura:"))

if (base === 0 || altura === 0) {
    console.log("Datos imposibles")
} else {
let superficie = base * altura;
let perimetro = 2 * (base + altura);

console.log("Tu superficie es:", superficie, "y el perimetro:", perimetro)}