//Sintaxis de los objetos
var persona = {
    nombre: "Mauricio",
    apellido: "Rivero",
    edad: 37,
    ocupacion: "Ingeniero"
};

//Para ver todos los valores del objeto en consola se usa:
console.log(persona);

//Para ver un atributo especifico del objeto se usa:
console.log(persona.nombre);

//para agregar metodos a un objeto se asocia una función a uno de los atributos
var persona = {
    nombre: "Mauricio",
    apellido: "Rivero",
    edad: 37,
    ocupacion: "Ingeniero",
    nombreCompleto: function(){
        console.log(`Persona ${this.nombre} ${this.apellido}`);
    }
};

persona.nombreCompleto();