const prompt = require("prompt-sync")();

let a = Number(prompt("Introduce un número: ")); 

let b = Number(prompt("Introduce otro numero: "));

let c = a + b; 
let d = a - b; 
let e = a * b; 
let f = a / b;
let g = a % b;  

console.log("la suma es: ", c)
console.log("la resta es: ", d)
console.log("la multiplicación es: ", e)
console.log("la división es: ", f)
console.log("El resto de la division es: ", g)