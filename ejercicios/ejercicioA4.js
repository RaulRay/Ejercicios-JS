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

function carritos (peras, galletas, pizza) {
    this.peras = 0;
    this.galletas = 0;
    this.pizza = 0;
    this.empty = function(){
        this.peras = 0;
        this.galletas = 0;
        this.pizza = 0;
    };
    this.add = function(codigo, cantidad){
        if (codigo === producto (codigo)){
            this.codigo = this.codigo + cantidad
            console.log(this.peras, this.galletas, this. pizza)
        }
    }

}

let carrito = new carritos (0,0,0)

carrito.add(15, 2)