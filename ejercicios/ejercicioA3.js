/*Crea una clase que llamaremos Bus. Sus atributos serán:
-capacidad: número máximo de pasajeros
-pasajeros: número de pasajeros (inicialmente 0)
-conductor: objeto conductor.
-Sus métodos
-subir(pasajeros): aumenta el numero de pasajeros
-bajar(pasajaeros): disminuye el número de pasajeros
-conductor: asigna un objeto conductor.
-El ojeto conductor es de una clase (Conductor) cuyos atributos son:
-nombre: nombre del conductor
-licencia: un número que identifica al condcutor.
-Al crear el objeto se asigna también el conductor
-No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.*/

function bus(capacidad, conductor) {
  this.capacidad = capacidad;
  this.pasajeros = 0;
  this.conductor = conductor;
  this.subir = function (pasajeros) {
    if (this.pasajeros + pasajeros <= this.capacidad) {
      this.pasajeros += pasajeros;
    } else console.log("No cabe tanta gente")
  };
  this.bajar = function (pasajeros) {
    if (this.pasajeros > 0 && this.pasajeros <= capacidad) {
      this.pasajeros -= pasajeros;
    }
  };
}

function conductores(nombre, licencia) {
  this.nombre = nombre;
  this.licencia = licencia;
}
let juan = new conductores("Juan", 57616856);
let autobus = new bus(50, juan);
autobus.subir(51);
console.log(autobus.capacidad)

