const prompt = require("prompt-sync")();

let a = Number(prompt("Introduce un número: ")); 

let b = Number(prompt("Introduce otro numero: "));

let c = Number(prompt("Introduce otro numero mas: "));

if (a > b){
    console.log(a, "es mayor que", b)
} else if (a < b){
    console.log(a, "es menor que", b)
} else {
    console.log("Los numeros son iguales")
}

if ((a > b) && (a > c)) {
    console.log(a, "es mayor que", b, "y", c);
} else if ((b > a) && (b > c)){
    console.log(b, "es mayor que", a, "y", c);
} else if ((c > a) && (c > b)){
    console.log(c, "es mayor que", a, "y", b);
} else if (c === b){
    console.log(c, "y", b, "son el mismo numero, no hay mayor!1!!")
} else{

    console.log("Todos son iguales")
}