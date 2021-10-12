console.log("Application Start");
console.log("=================================================");

console.group("Cuadrados");
//Código del cuadrado
const ladoCuadrado = 5;
console.log("La medida del lado del cuadrado es: "+ladoCuadrado+"cm");

const perimetroCuadrado = 4*ladoCuadrado;
console.log("El permitero del cuadrado es: "+perimetroCuadrado+"cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado es: "+areaCuadrado+"cm^2");

console.groupEnd();

//Código del triangulo

console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "El lado 1 del triangulo es: "
    +ladoTriangulo1
    +"cm, el lado triangulo 2 es: "
    +ladoTriangulo2
    +"cm, la base del triangulo es: "
    +baseTriangulo
    +"cm"
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;

console.log(
    "El area del triangulo es: "
    +areaTriangulo
    +"cm, el perimetro del triangulo es: "
    +perimetroTriangulo
    +"cm"
);

console.groupEnd();


//Código del circulo

console.group("Circulos");

const radioCirculo = 5;
const diametroCirculo = radioCirculo*2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo*PI;
const areaCirculo = PI*(Math.pow(radioCirculo, 2));

console.log(
    "El radio del circulo es: "
    +radioCirculo
    +"cm, el diametro del circulo es: "
    +diametroCirculo
    +"cm, el número PI es: "
    +PI
);

console.log(
    "El area del circulo es: "
    +areaCirculo
    +"cm, el perimetro del circulo es: "
    +perimetroCirculo
    +"cm"
);

console.groupEnd();

console.log("================================");
console.log("End Application");