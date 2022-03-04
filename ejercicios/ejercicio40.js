/*Generar un array de 20 elementos con números aleatorios no repetidos entre sí.*/

array = [];
let variable = Math.floor;
for (i=0; i<20; i++){
    let element = Math.floor((Math.random() * 20) + 1);
    do{
        array [i] = element;
    } while (array [i] === element)
    
}
console.table(array);


/*if (!array.includes(element))
        array.push(element);*/