const prompt = require("prompt-sync")();

let a = Number(prompt("Cuato cuesta? ")); 
let b = Number(prompt("Cuanto pagas?")); 

if (b < a) 
    console.log("te faltan", (a-b))
    else if (b > a)
    console.log("te devuelvo", (b-a))
    else 
    console.log("Gracias por la compra");