/*Desarrollar un timer o temporizador. La cantidad de segundos con la que se quiere hacer la cuenta
atrás se introducirá por teclado. Cuando llegue al final, se imprimirá "¡¡Ring!!“ y el programa acabará.*/

const prompt = require('prompt-sync')();
let time = Number(prompt("Cuantos segundos? "));

const tiempo = setTimeout(myRing, time*1000);

function myRing(){
    console.log("¡¡¡¡RING!!!!");
    clearTimeout(tiempo); //Para limpiar el temporizador o acabar intervalos
}
