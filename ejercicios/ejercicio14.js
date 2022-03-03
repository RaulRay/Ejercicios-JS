const prompt = require("prompt-sync")();
const gasolina = 1.333
const galon = gasolina * 3.78541
let cantidadgalon = Number(prompt("¿Cuantos galones van? "))
console.log("Te toca pagar: ", cantidadgalon*galon, "€")