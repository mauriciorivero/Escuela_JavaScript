//En este caso la declaración de la variable sube, mas no
//incialización por ende se imprime en consola un undefined
console.log(miNombre);

var miNombre="Mao";

/*
En este caso se corrige este problema
*/
miNombre="Mao";
console.log(miNombre);

var miNombre;


/*
Para el caso de las funciones es el mismo ya que estas suben
cuando son declaradas
*/

mostrarNombre();

function mostrarNombre(){
    console.log("Mi nombre es Mao");
}

/*
En este caso se muestra unidefined porque la variable nombre 
se declara y se incializa despues de ser usada, la declaración
sube pero no la inicialización 
*/

mostrarNombre();

function mostrarNombre(){
    console.log("Mi nombre es: "+nombre);
}

var nombre="Mauro";


/*
En este caso se corrige el hoisting al inicializar la variable nombre antes de ser usada
*/
mostrarNombre();
nombre="Mauro"
function mostrarNombre(){
    console.log("Mi nombre es: "+nombre);
}

var nombre;

/*
Para evitar el hoisting es recomendable y como buena práctica declarar e inicializar 
todas las variables globales al inicio de todo el código y si son locales
hacerlo al inicio de la función o del bloque de código.
*/