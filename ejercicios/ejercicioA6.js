/* Mantener un array donde tengamos una lista de especies de animales y 
el número de patas que tiene cada uno. Crear una función que calcule un número aleatorio 
entre y 100 para cada tipo de animal, de tal modo que devuelva finalmente el número de patas que hay en la granja */

class Animal {
  constructor(nombre, patas) {
    this.nombre = nombre;
    this.cantidad = 0;
    this.patas = patas;
  }
}

class Granja {
  constructor(nombre) {
    this.nombre = nombre;
    this.animales = [];
    this.añadir = function (animal) {
      animal.cantidad = Math.floor(Math.random() * 100) + 1;
      this.animales.push(animal);
    };

    this.suma = function () {
      let total = 0;
      for (let i of this.animales) {
        total = total + i.patas * i.cantidad;
        console.log(
          "En la granja hay",
          i.cantidad,
          "de",
          i.nombre,
          "con una suma total de",
          total,
          "patas"
        );
      }
    };
  }
}

const rancho = new Granja("Rancho");
const patos = new Animal("patos", 2);
const vacas = new Animal("vacas", 4);
const gallinas = new Animal("gallinas", 2);
const cabras = new Animal("cabras", 4);
rancho.añadir(gallinas);
rancho.añadir(patos);
rancho.añadir(vacas);
rancho.suma();
