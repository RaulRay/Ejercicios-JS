/* Aquí es como sería la función si hubiesemos hecho dos arrays definidos al principio del programa principal:
    notas [practica, teorica, problemas];
    pesos [10,40,50];
 function calcula_notas (alumno) {
    let nota = 0;
    const max=notas.length;
    for (let i=0; i<max;i++){
        nota += pedir_nota(notas[i],pesos[i]);
    }
    console.log (`La nota de ${alumno} es ${nota}`)
} */

const prompt = require("prompt-sync")();
let nombre;
do {
    nombre = prompt("Introduce un nombre: ");
    if (nombre !== "") {
        calcula_notas (nombre);
    }
} while (nombre !== "");

function calcula_notas (alumno) {
    let notaPractica = pedir_nota ("practica", 10);
    let notaTeorica = pedir_nota ("teorica", 40);
    let notaProblemas = pedir_nota ("problemas", 50);
    console.log (`La nota de ${alumno} es ${notaPractica+notaTeorica+notaProblemas}`)
}

function pedir_nota (nota,porcentaje) {
    let valor = Number(prompt(`Introduce la nota de ${nota}: `))
    return valor * porcentaje / 100;
}