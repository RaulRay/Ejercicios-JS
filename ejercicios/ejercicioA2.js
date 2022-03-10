function cliente (nombre, direccion, telefono, nif){
        this.nombre = nombre;
        this.telefono = telefono;
        this.nif = nif;
        this.direccion = direccion;
}
let pepillo = new cliente ("Pepillo", "C/ cafe con leche", 698256314, "99999999C")

let descripcion = 0;
let cantidad = 0;
let precio = 0;

let elementos = [descripcion, cantidad, precio];

function factura (cliente, elementos){
    this.cliente = cliente;
    this.elementos = elementos;
    this.baseImponible = 0;
    this.iva = 21;
    this.total = 0;
    this.pago = "contado";
    this.calculo = function (){
        let suma = 0;
        for (let item of elementos) {
        suma += item[2];
    }
        return suma;
    }
}

let pepilloF = new factura (pepillo, elementos);

function empresa (nombre, direccion, telefono, cif){
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.cif = cif;

}

console.log(factura.calculo)