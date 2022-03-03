const prompt = require("prompt-sync")();
let number = Number(prompt("Introduzca el número: "));
for(let i=0;i<number;i++){
    console.log(imprimirBlancos(i) + imprimirAsteriscos(i,number));
}
function imprimirBlancos(numero){
    let linea="";
    for(j=0;j<numero;j++){
        linea = linea + " ";
    }
    return linea;
}
function imprimirAsteriscos(actual, max){
    let linea = "";
    for(let i=0; i < max-actual; i++){
        linea = linea + "*";
    }
    return linea;
}