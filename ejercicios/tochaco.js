/*Crear una clase para implementar carritos de la compra de tal modo que permita mantener 
una colección de productos seleccionados desde un catálogo, guardando para cada elemento 
de la colección el código de producto y la cantidad seleccionada.  
La clase carrito deberá implementar las siguientes funcionalidades:

• Inicializar el carrito informándole el catálogo. 

• empty: vaciar el carrito. 

• add: añadir un producto al carrito especificado su código y la cantidad.  Si el producto 
ya está en el carrito, añadirá la cantidad especificada a la existente. Validar que el 
código de producto existe en el catálogo. 

• delete: eliminar completamente un producto del carrito especificando su código. 
Validar que el código de producto existe en el carrito. 

• update: actualizar la cantidad de un producto del carrito a un valor dado. Es decir, la 
cantidad especificada sustituirá la existente en el carrito para ese producto. 

• up: aumentar en una unidad la cantidad de un producto en el carrito. 

• down: disminuir en una unidad la cantidad de un producto en el carrito. Validar que la 
cantidad no resulte negativa. Si es cero se eliminará el producto del carrito. 

• items: calcular el número de productos diferentes del carrito. 

• total: calcular el total de la compra. 

• list: listar por consola el contenido del carrito, mostrando código, descripción, 
cantidad, precio e importe. Se añadirá una última línea con el total del carrito. 

El catálogo de productos contendrá las propiedades código, descripción y precio. Se creará una 
colección básica de tres o cuatro productos para hacer las pruebas. Se implementará una 
función que devuelva un producto a partir de su código. 
Para probar el funcionamiento del carrito implementaremos una secuencia de acciones 
parecida a esta: 

const catalogo = [{codigo: “codigo1”, nombre:”producto1”, precio:2.0},{codigo: “codigo2”, 
nombre:”producto2”, precio:3.0}]; 
• const carrito = new Carrito (catalogo); 
• carrito.add (“codigo1”,10); 
• carrito.add (“codigo1”,2); 
• testear que carrito.total() === 24 
• carrito.add (“codigo2”,2); 
• testear que carrito.total() === 30 
• carrito.delete (“codigo2”); 
• testear que carrito.total() === 24 
• carrito.up(“codigo1”); 
• testear que carrito.total() === 26 
• carrito.down(“codigo1”); 
• testear que carrito.total() === 24 
• carrito.update(“codigo1”,1); 
• testear que carrito.total() === 2 
• carrito.down(“codigo1”); 
• testear que carrito.total() === 0 y carrito.items() === 0 
• carrito.down(“codigo1”); 
• carrito.add(“codigo1”,2); 
• carrito.add(“codigo2”,4); 
• testear que carrito.total() === 16 
• carrito.list(); 
• carrito.empty(); 
• testear que carrito.total() === 0 y carrito.items() === 0*/

class Carrito {
  constructor() {
    this.catalogo = new Catalogo();
    this.listaproducto = [];
  }

  add(codigo, cantidad) {
    if (this.catalogo.comprobar(codigo) === true) {
      this.listaproducto.push(codigo, cantidad);
    }
  }

  delete() {}

  update() {}

  items() {}

  up() {}

  down() {}

  list() {}

  calidar () {}
}

class Catalogo {
  constructor() {
    this.arrayProductos = [];
  }
  comprobar(codigo) {
    if (!this.arrayProductos.filter((item) => item.codigo === codigo)) {
      console.log("Cannot find");
    } else {
      return true;
    }
  }
  add(producto) {
    this.arrayProductos.push(producto);
  }
}

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = 0;
  }
}

class Pedido {
  constructor() {}
}

const pera = new Producto(001, "Peras", 2.1);
const chocolate = new Producto(002, "Chocolate", 4.3);
const jamon = new Producto(003, "Jamon", 7.1);
const azucar = new Producto(004, "Azucar", 2.5);

let cata = new Catalogo();

const cart = new Carrito();

cata.add(pera);

cart.add(001, 2);


console.log(cart.listaproducto);
