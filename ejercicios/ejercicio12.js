const prompt = require("prompt-sync")();

let grillo = Number(prompt("chillidos de grillo: "));

let temp = grillo / 4 + 40;

if (grillo <= 0) {
  console.log("No se puede");
} else {
  console.log("La temperatura es de: ", temp, "ºC");
}
