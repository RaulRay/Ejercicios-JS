Array.prototype.incluye = function (elemento, callbackEqual) {
    function checkEqual(x, y) {
        for (let propiedad in x) {
            if (x[propiedad] !== y[propiedad]) {
                return false;
            }
        }
        return true;
    }
    for (let i = 0, max = this.length; i < max; i++) {
        if (typeof (callbackEqual) !== 'undefined') {
            if (callbackEqual(elemento, this[i])) {
                return true;
            }
        } else
            if (checkEqual(elemento, this[i])) {
                return true;
            }
    }
    return false;
}
​
function callbackEqual(x, y) {
    return x.codigo === y.codigo;
}
​
const catalogo = [{ codigo: 1, nombre: 'tomate' }, { codigo: 2, nombre: 'pera' }];
const producto = { codigo: 1, nombre: 'lechuga' };
// console.log(catalogo.includes(producto));
const producto2 = { codigo: 1, nombre: 'tomate' };
console.log(catalogo.incluye(producto));
console.log(catalogo.incluye(producto2));
console.log(catalogo.incluye(producto, callbackEqual));
console.log(catalogo.incluye(producto, (x, y) => x.codigo === y.codigo));













