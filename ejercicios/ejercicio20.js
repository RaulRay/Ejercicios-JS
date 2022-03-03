/* 20.Ejercicio
Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave. Solo
tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrara un mensaje indicándonos
que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa. */

const prompt = require("prompt-sync")();
let contador = 1;
let intento = (prompt("Introduce la clave: ")); 
const clave = "eureka";
while (intento != clave){
    if (contador < 3){
        console.log("Intentalo de nuevo");
         intento = (prompt("Introduce la clave: ")); 
        contador++;
        
    }else {
        console.log("Has agotado los 3 intentos");
        break;
    }    
}
