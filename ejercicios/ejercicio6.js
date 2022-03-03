const prompt = require("prompt-sync")();

let a = Number(prompt("Introduce un número: ")); 

if ( a  ) {
    console.log("Dame un numero entero")
} else if (a < 0) {
    console.log("Numero negativo")
} else if (a > 0) {
    console.log("Numero positivo")

} else {
    console.log("Nulo")
}