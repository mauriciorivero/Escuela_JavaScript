var nombre = "Mauricio";
var apellido = "Rivero";
var nombreUsuario = "mauriciorivero";
var edad = 37;
var correoElectronico = "mauro@mrd2.co";
var mayorEdad = true;
var dineroAhorrado = 6700000;
var deudas = [640000, 96000, 22000, 110000, 300000, 450000, 570000];

var nombreCompleto = nombre+apellido;

function totalDeudas(){
    var total = 0;
    for (var i=0;i<deudas.length;i++){
        total=total+deudas[i];
        console.log(total);
    }
    console.log("El total de deudas es: "+total);
    return total;
}

totalDeudas();
var totalPatrimonio = dineroAhorrado-totalDeudas();
console.log("El total del patrimonio es: "+totalPatrimonio);


function mostrarNombre(firstname, lastname, nickname){
    var nombre = firstname;
    var apellido = lastname;
    var apodo = nickname;
    console.log("Mi nombre es: "+nombre+", mi apellido es: "+apellido+", pero prefiero que me llamen: "+apodo);
}

mostrarNombre("Mauricio", "Rivero", "Mao");


const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion=="Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion=="Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion=="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion=="ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

if(tipoDeSuscripcion==true){
    if(tipoDeSuscripcion=="Free"){
        console.log("Solo puedes tomar los cursos gratis");
    }
    if(tipoDeSuscripcion=="Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    if(tipoDeSuscripcion=="Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    if(tipoDeSuscripcion=="ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}

var suscripciones = ["Free", "Basic", "Expert", "ExpertPlus"];
for(var i=0; i<=suscripciones.length; i++){
    if(suscripciones[i]=="Free"){
        console.log("Solo puedes tomar los cursos gratis");
    }
    if(suscripciones[i]=="Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    if(suscripciones[i]=="Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    if(suscripciones[i]=="ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }

}


//Convirtiendo el siguiente ciclo en while
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

var i=0;
while(i<5){
    console.log("El valor de i es: "+i);
    i++;
}

var respuesta=true;
while(respuesta==true){
    let resultado = prompt("Cuanto es la suma de 2 + 2");
    if(resultado==="4"){
        respuesta=true;
    }else{
        respuesta=false;
    }
}

var juegos = ["Super Mario", "God of War", "Horizon", "Gran Turismo"];
function mostrarPrimerElemento(array){
    console.log("El primer elemento del array de juegos es: "+array[0]);
}
function mostrarTodosElementos(coleccion){
    for(var i; i<=coleccion.length; i++){
        console.log("El juego del elemento "+i+" es: "+array[i])
    }
}
mostrarPrimerElemento(juegos);
mostrarTodosElementos(juegos);


class persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

var persona1 = new persona("Mauricio", "Rivero", 37);
function mostrarPersona(persona){
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.edad);
}
mostrarPersona(persona1);