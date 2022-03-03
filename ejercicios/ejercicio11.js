const prompt = require("prompt-sync")();
let pago = Number(prompt("Pago: "));

let preciofinal = 0
switch (pago > 0){ // "true" o cualquier cosa cierta para que entre dentro del switch
    case pago > 0 && pago > 500:
        break;
    case pago >= 500 && pago <= 1000:
        preciofinal = pago - (pago * 0.05)
        break;
    case pago > 1000 && pago <= 7000:
        preciofinal = pago - (pago * 0.1)
        break;
    case pago > 7000 && pago <= 15000:
        preciofinal = pago - (pago * 0.2)
        break;
    case pago > 15000:
        preciofinal = pago - (pago * 0.25)
}

console.log("Precio final", preciofinal)