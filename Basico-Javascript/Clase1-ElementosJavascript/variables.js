//declarar variables
var nombre;

nombre; //queda undefined porque este el estado de una variable que tiene un espacio
// reservado en memoria
//pero que no se ha definido aun

//declarar y asignar variables con la palabra resrevada var
var nombre = "Mauro";
nombre;//aqui si está definida, es texto.

var elementos = ["Mauro","Teo", 37];//es un array
elementos;//queda como un array de datos
elementos[1];//me trae el elemento 1 de ese array
console.log(elementos[1]);

//un objeto persona
var persona = {
    nombre: "Mauro",
    apellido: "River",
    edad: 37
}

persona;
console.log(persona);

