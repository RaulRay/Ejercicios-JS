/*Se tienen los costes de producción de tres departamentos (dulces, bebidas y conservas)
correspondientes a los 12 meses del año anterior. Construir algoritmo que proporcione:

a) ¿En qué mes se registró el mayor coste de producción de dulces?

b) Promedio anual de los costes de producción de bebidas

c) ¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor
coste?

d) ¿Cuál fue el que tuvo menor coste de producción en diciembre?*/

const meses = ["enero", 
"febrero", 
"marzo", 
"abril", 
"mayo", 
"junio", 
"julio", 
"agosto", 
"septiembre", 
"octubre", 
"noviembre", 
"diciembre"];
const departamentos = ["dulces", "bebidas", "conservas"];
const MAX_MESES = meses.length;
const MAX_DEP = departamentos.length;
const costes = [];

for (let i=0; i < MAX_DEP; i++){
    const items = [];
    for (let j = 0; j < MAX_MESES; j++){
        items[j] = Math.floor(Math.random()*100000) + 20000;
    }
    costes [i] = items;
}
console.log(costes);
let max_dulces = -1;
let max_pos = -1;
for (let i = 0; i < MAX_MESES; i++){
    if (costes [0][i] > max_dulces){
        max_dulces = costes[0][i];
        max_pos = i;
    }
}