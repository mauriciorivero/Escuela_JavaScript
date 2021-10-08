var articulos = [
    {nombre: "Bici", costo: 2500},
    {nombre: "TV", costo: 40000},
    {nombre: "Lego", costo: 1200},
    {nombre: "PS4", costo: 1000},
    {nombre: "Macbook", costo: 3500},
    {nombre: "Smartphone", costo: 3000},
    {nombre: "PC", costo: 1200},
    {nombre: "TarjetaSD", costo: 200}, 
    {nombre: "SSD", costo: 300},
    {nombre: "Lampara", costo: 50},
    {nombre: "Microfono", costo: 200},
    {nombre: "Auriculares", costo: 200},
    {nombre: "VR", costo: 1500},
    {nombre: "Monitor", costo: 800},
    {nombre: "TecladoMecanico", costo: 250},
    {nombre: "EncloserHD", costo: 300}
];


/*
Voy a buscar un articulo solamente en este array de objetos, y para eso uso la función
find() que me devuelve un articulo de acuerdo a un parametro de búsqueda.
*/

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "SSD";
});

console.log("------------------------------------------------");
console.log("Articulo cuyo nombre es SSD");
console.log(encuentraArticulo);

/*
Voy a pedir solo los nombres de los articulos en mi array, y eso lo hago con la función forEach()
*/

var encuentraArticulo2 = articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
console.log("------------------------------------------------");
console.log("Nombres de todos los articulos");
encuentraArticulo2;


var encuentraArticulo3 = articulos.forEach(function(articulo){
    if((articulo.costo>=100)&&(articulo.costo<=1000)){
        console.log(articulo.nombre);
    }
});
console.log("------------------------------------------------");
console.log("Articulos mayores a 100 y menores que 1000");
encuentraArticulo3;

/*
Si quiero solo preguntar si existen articulos que sean menores que 1000 puedo usar el metodo some()
Esta función solo me dice si se cumple la condición y me devuelve un true si es cierto y un false si no
*/

var encuentraArticulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 1000;
});
console.log("------------------------------------------------");
console.log("Articulos baratos (con costos menores a 1000)");
console.log(encuentraArticulosBaratos);

switch (false) { 
	case false: console.log("Soy falso :( ") 
	case true: console.log("Soy verdadero!") 
}