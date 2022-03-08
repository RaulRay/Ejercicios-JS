/*Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare. Tendrá la
estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39
Nota: deberás utilizar “Esperar” y “Limpiar pantalla*/

let segundos = 0;
let minutos = 0;
let horas = 0;

setInterval(() => {
    console.clear();
    if (segundos === 59) {
        segundos = 0;
        if (minutos === 59) {
            minutos = 0;
            if (horas === 24) {
                horas = 0;
            } else
            horas++;
        } else {
            minutos++;
        }
    }else{
        segundos++;
    } console.log(horas, ":", minutos, ":", segundos)
}, 1000)
