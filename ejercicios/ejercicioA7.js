/*Necesitamos una clase Factura que mantenga los siguientes datos:
- Nombre y apellidos
- NIF/CIF
- Líneas de factura
La clase nos permitirá las siguientes acciones:
- Al crear la factura se pedirá el nombre del cliente y el nif
- Añadir linea de factura especificando concepto, precio en euros y cantidad
- Calcular total de la factura, especificando el porcentaje de impuestos a aplicar
- Imprimir factura: listar cada linea de factura calculando el importe de línea finalmente imprimir el total.
Crearemos una clase derivada de factura que nos convierta los precios a dolares, tanto al calcular como al 
imprimir cada línea de la factura. Tratar de usar los conceptos de herencia y la palabra reservada super 
cuando sea necesario. La clase derivada facturaDolares debería tener muy poco código.*/
class Linea {
  constructor(concepto, precio, cantidad) {
    this.concepto = concepto;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  total() {
    return this.precio * this.cantidad;
  }
}

class Factura {
  constructor(nombre, nif) {
    this.nombre = nombre;
    this.nif = nif;
    this.lineas = [];
    this.cambio = 1;
    this.simbolo = "€"
  }
  addLinea(concepto, precio, cantidad) {
    let linea = new Linea(concepto, precio, cantidad);
    this.lineas.push(linea);
  }
  calculo(impuesto) {
    let suma = 0;
    for (let item of this.lineas) {
       suma = suma + item.total();
    }
    return suma * (1+impuesto/100);
  }
  imprimir(impuesto) {
    console.log("Estimado", this.nombre, "con NIF", this.nif, "su factura es");
    this.lineas.forEach((element) =>
      console.log(element.concepto,"x",element.cantidad,"es de",element.total()*this.zcambio,"un total sin IVA de"));
    console.log("El total aplicando el impuesto del",impuesto, "es de", this.calculo(impuesto)*this.cambio, this.simbolo)

  }
}

class FacturaDollars extends Factura {
    constructor (nombre, nif)
    super (nombre, nif)
    cambio = 1.1;
    simbolo = "$"
}
let facturadolares = new FacturaDollars("Rudelfo Dolares", "25875497X");
let facturilla = new Factura ("Rodolfo Euros", "12345678-C");

facturilla.addLinea("tornillos", 10, 20);


facturilla.imprimir(21);

facturadolares.addLinea ("tornillos", 10, 20);
facturadolares.imprimir(21)
