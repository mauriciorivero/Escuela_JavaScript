var edad = 37; //una variable número

//este condicional pregunta si la edad es correcta, si es una variable con valor 37
if(edad==37){
    console.log('La edad es correcta');
}

var edad = 37; //una variable numero
//este condicional pregunta si la edad es correcta, si es una variable con valor 37
if(edad=="37"){
    console.log("La edad es correcta");
}

var edad = "37"; //una variable número
//este condicional pregunta si la edad es correcta, si es una variable con valor 37
//y si es un numero
if(edad===37){
    console.log("La edad es correcta y es numero");
}else{
    console.log("La edad no es numero");
}

/*
El numero cuando tiene un valor mayor o igual que 1 es automaticamente un true
*/
var numero = 37;
if (numero){
    console.log("Es numero y es verdadero");
}