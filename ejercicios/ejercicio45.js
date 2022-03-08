/*Teniendo un vector con los números naturales que queramos, meter en otro de la misma longitud,
aquellos que sean pares y mayores que 25.
Después, mostrar el vector de origen completo y el de destino solo los números introducidos.*/

let arrayInicio = [];
let arraySecundario = [];

const prompt = require('prompt-sync')();
let tamaño = Number(prompt("Tamaño maximo: "));

for (let i = 0; i < tamaño; i++) {
    arrayInicio [i] = Math.floor(Math.random()* 1000) + 1;
    (arrayInicio [i] % 2 === 0 && arrayInicio [i] > 25) ? arraySecundario [i] = arrayInicio [i] : arraySecundario [i] = null;
}

console.log(arrayInicio, arraySecundario)