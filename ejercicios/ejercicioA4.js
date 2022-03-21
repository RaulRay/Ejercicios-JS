function producto (codigo, descripcion, precio) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.comprobacion = function (codigo) {
        if (codigo === this.codigo) {
            console.log(this.descripcion);
        }
    }
};

let peras = new producto (15, "Una pera", 3)
let galletas = new producto (20, "Unas galletas", 5)
let pizza = new producto (25, "Una pizza", 4)

peras.comprobacion(15);

function Catalogo (){
    this.productos = producto[i];
    this.addProd = function (producto, cantidad){
        
    }
}

let catalogo = new Catalogo();

function Carritos (catalogo) {
    this.catalogo = catalogo;
    this.compra = [];
    this.delete = function (){
        this.compra = [];
    }
    this.add = function (codigo, cantidad){
        this.catalogo (validar())
    }
}