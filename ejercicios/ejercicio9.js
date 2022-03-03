const prompt = require("prompt-sync")();

let a = Number(prompt("Nota 1: ")); 
let b = Number(prompt("Nota 2: ")); 
let c = Number(prompt("Nota 3: ")); 
let d = Number(prompt("Nota 4: ")); 
let e = Number(prompt("Nota 5: ")); 

const media = (a+b+c+d+e) / 5

if (media >= 5)
    console.log("Aprobado con un ", media)
    else console.log("Suspenso con un ", media)