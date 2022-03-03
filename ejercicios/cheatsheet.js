let userName = "Raul";

let age = 55

console.log(typeof userName); //Typeof es para que la consola te de el tipo de dato que te muestra en la consola
//usar var = prolemas (es de caracter global y es posible modificarla por error)

{
    const age = 56
    console.log(age)
}
//Las llaves significa que es un bloque a parte

let academy = 12 / 2 == 0 || "tucasa" == "micasa"

console.log(academy)

console.log("Hola desde javascrí")

//variables y constantes (las constantes no se pueden modificar)

const nombre = ("Bob") 

//nombre = Raul //esto intenta modificar la constante y dará error

//Variables modificables (let)

let edad = 18

edad = 19 //Esto modifica la variable

console.log(edad)

// Tipos de datos

//Datos simples (string = cadenas de texto. Siempre se van a representar con '' o "")

const welcome = 'Bienvenido a javascript'

//number (Numeros tanto decimales como enteros)

const km = 340

//boolean (Valores que siempre serán "true" o "false")

const isAlive = true

//undefined (Variable no definida. No confundir con "null")

let academia

console.log(academia)

//null (Variable con NINGUN valor)

let address = null

//Datos complejos

//objetos (Se crean igual que otra variable pero se usan las {} Dentro de ellas seran: key/value)

const person = {
    name: 'John', //Dentro de objetos cada propiedad va separada por ,
    surname: 'Smith',
    age: 34,
    address: {
        street: "calle callejosa",
        number: 5,
    }
};
console.log(person); 
console.log(person.name); //Si solo está "person" se mostrará todos los datos, con el . podemos mostrar solo la propiedad deseada

//array (listas de elementos aka string, number, objetos u otro array. Siempre compuestos por el mismo tipo de elemento
//Se representan con []. Para acceder a algun elemento de la lista se hace con [posicion a referenciar]
const notes = [4, 6, 5, 9];
const students = [
    {nombre: 'John', surname: 'Smith'}, 
    {nombre: "Bob", surname: "Brolof"}
]

console.log(students[1].surname);

//Funciones

//Comparaciones-Aignaciones

//Para asignar un valor a una variable se usa un unico =

const x = 4;

// == significa que es igual que en contenido de la variable independientemente del tipo

const a = 2;
const b = "2"

console.log(a == b);//esto seria true

// === significa que es estrictamente igual que el contenido de la variable (incluyendo el tipo)

const c = 3;
const d = "3"

console.log(c === d)//esto seria false

//las ! significan que es "distinto" a lo que deberia ser.

const e = 4;
const f = "4"

console.log(e != f)//Esto seria falso
console.log(e !== f)//Esto seria true (ya que son estrictamente diferentes)
// != y !== son relacionados con == y ===

//Condicionales, se usan dependiendo de si se cumplen o no las condiciones
//Los && significan que todo debe cumplirse y los || significan que con una condicion cumplida basta. 

const isDed = a === c && isAlive === false;

console.log(isDed)

const isGod = isDed !== a || isAlive === true

console.log(isGod)

//Negacion. Las ! se usan para cambiar el valor de un elemento boolean

const isDead = !isAlive

console.log(isDead)

const bla = 3

// Condicionales - if/else. Ejecutan codigo siempre y cuando se cumpla la condicion.

let demon ="var"

if (demon === "var")
{console.log("El demonio")} 
else {console.log("No es el dimonio")}

const number = 5

if(number % 2 === 0){
    console.log("Numero par")
} else {console.log("Numero impar")}

if(number > 0){
    console.log("El numero es mayor que 0")
} else if(number < 0){
console.log("El numeroes menor que 0")
} else {
console.log("El numero es 0")
}

const miArray = [1, 2,5,3,"casa", "ejemplo"];

for (miElemento of miArray) {       //El "of" recorre toda la array
    if (miElemento === 3 ){   
    continue}                                   //El continue se salta el elemento indicado y sigue el bucle
    if (miElemento === "ejemplo") {
        break                                   //El break acaba el bucle
    }
    console.log(miElemento)
}


function loquesea (num1, num2){ //la funcion es para guardar operaciones que volverás a usar ahorrando codigo (una suma por ejemplo)
    const resultado = num1 + num2; 
    return resultado;   //return devuelve el resultado
}

function factorial(number){ //Función que se llama a si misma.
    if(number===1){
        return 1;
    }
    return number * factorial(number-1);
}