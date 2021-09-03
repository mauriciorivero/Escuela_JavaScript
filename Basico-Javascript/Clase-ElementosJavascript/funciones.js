//Hay funciones declarativas y funciones de expresión

//Funciones Declarativas
function suma(a,b){
    return a+b;
}


var res = suma(5,10);
console.log(res);


//Funciones de expresión
var miSuma = function(a,b){
    return a + b;
}

miSuma();


//Como usar un Template String
//Tiene la misma funcionalidad que una concatenacion
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

saludar("Mauro");