const prompt = require("prompt-sync")();

let dia = Number(prompt("Introduce un dia: "));
let mes = Number(prompt("Introduce un mes: "));
let año = Number(prompt("Introduce un año: "));


if (dia > 0 && dia < 32 && mes > 0 && mes < 13 && año > 0 && año < 2022){
    switch (mes){
        case 1: console.log(dia, " de Enero del", año);
        break;
        case 2: console.log(dia, " de Febrero del", año);
        break;
        case 3: console.log(dia, " de Marzo del", año);
        break;
        case 4: console.log(dia, " de Abril del", año);
        break;
        case 5: console.log(dia, " de Mayo del", año);
        break;
        case 6: console.log(dia, " de Junio del", año);
        break;
        case 7: console.log(dia, " de Julio del", año);
        break;
        case 8: console.log(dia, " de Agosto del", año);
        break;
        case 9: console.log(dia, " de Septiembre del", año);
        break;
        case 10: console.log(dia, " de Octubre del", año);
        break;
        case 11: console.log(dia, " de Noviembre del", año);
        break;
        case 12: console.log(dia, " de Diciembre del", año);
        break;
    }
} else{
    console.log("Error, me muero")
}