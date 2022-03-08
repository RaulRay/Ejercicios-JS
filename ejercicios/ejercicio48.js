/*Almacenar una lista de nombres en un array y luego ordenarlos alfabéticamente. Para la entrada de
datos se utiliza una estructura Mientras, sin saber a priori la cantidad de datos que se ingresarán.
Pista: Los datos alfanuméricos (strings) también se pueden comparar con los operadores < y >.*/

const prompt = require('prompt-sync')();
let lista = [];
let item;
let index = 0;
// const comparar = function(a,b){
//     if (a > b){
//     return 1;
// } else {
//     return -1;
// }}
do {
    item = prompt("Introduce un dato: ");
    if (item !== "")
    lista [index++] = item;
} while ( item !== "");

console.log(lista)
console.log(lista.sort((a,b) => a > b ? 1 : -1));