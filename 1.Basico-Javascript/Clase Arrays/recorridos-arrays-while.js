/*
Voy a declarar un array de estudiantes para luego recorrerlo y saludar a cada uno de ellos.
*/

var estudiantes = ["Teo", "Abel", "Roger", "Myriam", "Jose", "Mauricio", "Laura", "Aracelly"];
//console.log(estudiantes);

function saludar(estudiante){
    console.log(`Hola ${estudiante}`);
}

while (estudiantes.length>0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();//esto va sacando estudiantes 1 a 1 conforme avanza el ciclo
    saludar(estudiante);
}