/*-Crear un script que defina un objeto llamado Producto_alimenticio.
-Este objeto debe presentar las propiedades código, nombre y precio, además del método imprimeDatos, 
el cual escribe por pantalla los valores de sus propiedades.
-Posteriormente, cree tres instancias de este objeto y guárdelas en un array.
Posteriormente, utilice el método imprimeDatos para mostrar por pantalla los valores de los tres objetos instanciados*/


function producto_alimenticio (codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.imprimeDatos = function () {
        console.log(codigo, nombre, precio);
    }
}

let ternera = new producto_alimenticio(7658, "ternera", 8.50);
let leche = new producto_alimenticio(7668, "leche", 7.50);
let azucar = new producto_alimenticio(7623, "azucar", 9.50);
ternera.imprimeDatos();

let array = [ternera, leche, azucar];

for (let i = 0; i < array.length; i++ ){
    array[i].imprimeDatos();
}