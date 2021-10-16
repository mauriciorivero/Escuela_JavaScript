console.log("Application Start");
console.log("=================================================");



console.group("Cuadrados");
//Código del cuadrado

function perimetroCuadrado(ladoCuadrado){
    return 4*ladoCuadrado;
}


function areaCuadrado(ladoCuadrado){
    return ladoCuadrado*ladoCuadrado;
}

console.groupEnd();

//Código del triangulo

console.group("Triangulos");


function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo*alturaTriangulo)/2;
}


console.groupEnd();


//Código del circulo

console.group("Circulos");

const radioCirculo = 5;
function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    const PI = Math.PI;
    return diametro*PI;
}

function areaCirculo(){
    const PI = Math.PI;
    return PI*(Math.pow(radioCirculo, 2));
}

console.groupEnd();

console.log("================================");
console.log("End Application");