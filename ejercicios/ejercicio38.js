/* Dado un array de números de 5 posiciones con los siguiente valores [1, 2, 3, 4, 5], guardar los
valores de este array en otro array distinto pero con los valores invertidos, es decir, que el segundo
array deberá tener los valores [5,4,3,2,1]*/

const normal = [1, 2, 3, 4, 5];
let invertido = [];

for (let i=normal.length-1, j=0; i>=0; i--, j++) { //No es necesario tener la J, se puede hacer diferente
    invertido [j] = normal [i];
}

console.log(invertido)