const prompt = require("prompt-sync")();

let a = Number(prompt("Introduce un número: ")); 

if (isNaN(a)) 
    console.log("No es un numero")
else if (a % 2 === 0)
    console.log("par")
else if (a % 0 !== 0) 
    console.log("impar")
 else 
    console.log("nulo");

