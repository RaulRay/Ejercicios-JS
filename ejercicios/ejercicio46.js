/* Dados A, B y C que representan a números enteros diferentes construir un algoritmo para escribir
estos números de forma descendente.*/

const array =[1, 4, 6, 2, 86342, 76214 ,824];

console.clear();

console.log(array.sort((a,b) => (a<b) ? 1 : -1));

console.log(array.sort((a,b) => (a>b) ? 1 : -1));

console.log(array.sort());