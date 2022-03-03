const prompt = require("prompt-sync")();
numero = Number(prompt("Introduce un número: "));

for (let i=0; i<numero; i++) {
    console.log(imprimir_linea(i));
}

function imprimir_linea (linea) {       //Funcion que imprime una linea rellena de asteriscos si es la primera o la ultima de linea
                                      //Las lineas centrales tienen * al principio y al final pero no entre ellos
    if (linea === 0 || linea === numero - 1) {
        return rellenar_linea ("*", "*"); //primera y ultima linea***
    } else {
        return rellenar_linea ("*", " "); //Igual pero para las lineas centrales
    }
    
}

function rellenar_linea (extremo,central) { //*** "extremo" y "central" vale lo que se pone en la funcion anterior
    let blanco2 = " ";
    let caracter;
    for (let i=0; i<numero; i++) {
        if (i=== 0 || i=== numero -1) { //este if elige si meter en "caracter" el valor de extremo o de central
            caracter = extremo; 
        } else {
            caracter = central;
        }
        blanco2 = blanco2 + caracter; //aqui se suma a "blanco2" el resultado del if
    }
    return blanco2; //devuelve resultado del bucle
}