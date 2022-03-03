const prompt = require('prompt-sync')();
const max = 10;

for (let i = 0; i < max; i++) {
    let number = Number(prompt("Introduce un número: "));
    console.log("El cubo de", number, "es", number**3)
}