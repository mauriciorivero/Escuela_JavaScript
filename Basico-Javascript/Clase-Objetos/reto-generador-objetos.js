//declaro un array de nombres
var nombres = ["Mauricio",
"Jose",
"Teonilda",
"Abel",
"Myriam",
"Laura",
"Roger",
"Abigail",
"Aracelly",
"Ana",
"Maria",
"Mateo",
"Isabela",
"Juan",
"Camilo",
"Karen",
"Esteban",
"Cristian",
"Felix",
"Tatiana",
"Sergio",
"Camilo",
"Alejandra",
"Javier",
"Sandra",
"Julio",
"Beatriz",
"Blanca"];

var apellidos = [
    "Rivero",
    "Padilla",
    "Mendoza",
    "Herrera",
    "Alian",
    "Gonzales",
    "Ruiz",
    "Benitez",
    "Cahuao",
    "Rodriguez",
    "Duque",
    "Cardenas",
    "Bermudez",
    "Arias",
    "Medel",
    "Cruz",
    "Pineda",
    "Castiblanco"    
];

var nombreCompleto = [];

var totalNombres = nombres.length;
var totalApellidos = apellidos.length;
var totalElementos = totalNombres+totalApellidos;

for(i=0; i<totalElementos; i++){
    var nombreAleatorio=nombres[Math.floor(Math.random()*Math.floor(totalNombres))];
    var apellidoAleatorio=apellidos[Math.floor(Math.random()*Math.floor(totalApellidos))];
    class persona {
        constructor(nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
        }
    }
    persona = new persona(nombreAleatorio, apellidoAleatorio);
    nombreCompleto.push(persona);
}

console.log(nombreCompleto);