/*
Voy a declarar un array de estudiantes para luego recorrerlo y saludar a cada uno de ellos.
*/

var estudiantes = ["Teo", "Abel", "Roger", "Myriam", "Jose", "Mauricio", "Laura", "Aracelly"];
console.log(estudiantes);

function saludar(estudiante){
    console.log(`Hola ${estudiante}`);
}

for(i=0; i<estudiantes.length; i++){
    saludar(estudiantes[i]);
}

//Otra forma de hacerlo
for(var estudiante of estudiantes){
    saludar(estudiante);
}