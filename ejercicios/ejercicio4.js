const prompt = require("prompt-sync")();

let a = Number(prompt("Introduce un número: ")); 

let b = Number(prompt("Introduce otro numero: "));

let c = Number(prompt("Introduce otro numero mas: "));

if(isNaN(a) || isNaN(b) || isNaN(c)){
    console.log("Quiero numeros!!")
    console.log(" ▲")
    console.log("▲ ▲")
}
 else if (a < 0){
    let d = a*b*c
    console.log( "El resultado es", d)
} else {
    let e = a+b+c
    console.log( "El resultado es", e) 
}
