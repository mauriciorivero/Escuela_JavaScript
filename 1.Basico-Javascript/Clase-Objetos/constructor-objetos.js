//Con una función constructora se pueden ir creando objetos de una clase en javascript

class persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

var persona1 = new persona("Mauricio", "Rivero", 37);
var persona2 = new persona("Teonilda", "Herrera", 35);
var persona3 = new persona("Abel", "Rivero", 3);

console.log(persona1);
console.log(persona2);
console.log(persona3);

