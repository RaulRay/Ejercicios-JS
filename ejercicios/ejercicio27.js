const prompt = require('prompt-sync')();
const max = 10;

let numero = Number(prompt("Introduce un número: "));
for (let i = 1; i <= max; i++) {
    console.log(numero, "x", i, "=", numero*i)
}