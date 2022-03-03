/*El factorial de un número N es la multiplicación de todos los números desde 1 hasta N. Es decir, para
N = 5, el factorial de 5 sería: 5! = 5*4*3*2*1 = 120*/

const prompt = require('prompt-sync')();
let numero = Number(prompt("Introduce numero: "));

console.log("El factorial de", numero, "es", factorial(numero));

function factorial(numero) { 
    let factor = 1;
    for (let i = 1; i <= numero; i++) {
        factor *= i;
    }
    return factor;
}