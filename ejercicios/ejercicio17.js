const prompt = require("prompt-sync")();
let suma = 0
let X = 1
let N = Number(prompt("Introduce un número: ")); 
while (X <= N)
{
    suma = suma + X;
    X = X + 1;
}
console.log("La suma de los ", N, "primeros numeros es ", suma)