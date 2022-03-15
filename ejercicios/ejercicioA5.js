function Producto (codigo, descripcion, precio) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
}

let peras = new Producto (15, "Una pera", 3)
let galletas = new Producto (20, "Unas galletas", 5)
let pizza = new Producto (25, "Una pizza", 4)

function Catalogo (){
    this.arrayProductos = [];

    this.add = function (producto) {
        if (!this.arrayProductos.some(item => item.codigo === producto.codigo)){
            this.arrayProductos.push(producto);

        }
    }
    this.delete = function (code) {
        //this.arrayProductos.splice(this.arrayProductos.indexOf(producto), 1);
        let index = this.arrayProductos.findIndex(item => item.codigo === code)
        this.arrayProductos.splice(index, 1);
    }
    this.search = function (codeOrDesc){
        return this.arrayProductos.filter(item => item.codigo === codeOrDesc || item.descripcion.includes(codeOrDesc));
    }
    this.list = function (){
        for (i=0, max=this.arrayProductos.length; i<max; i++)
            console.log(this.arrayProductos[i]);
    }
}
let cata = new Catalogo ();
cata.add (galletas);
cata.add (pizza);
cata.search(20);
cata.list();