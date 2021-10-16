/*
  Operadores Falsos
*/
var numero = 0;
if(!numero){
    console.log("es falso");
}

var numero = null;
if(!numero){
    console.log("es falso");
}

var numero = NaN;
if(!numero){
    console.log("es falso");
}

var numero = undefined;
if(!numero){
    console.log("es falso");
}

var numero = "";
if(!numero){
    console.log("es falso");
}

var numero = false;
if(!numero){
    console.log("es falso");
}

/*
Valores Truthy
*/

var valor=" ";
if(valor){
    console.log("Es verdadero")
}

var valor="a";
if(valor){
    console.log("Es verdadero")
}

var valor=1
if(valor){
    console.log("Es verdadero")
}

var valor=[];
if(valor){
    console.log("Es verdadero")
}

var valor={}
if(valor){
    console.log("Es verdadero")
}

var valor=function(){}
if(valor){
    console.log("Es verdadero")
}

var valor=true;
if(valor){
    console.log("Es verdadero")
}