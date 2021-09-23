//Array es una estructira de datos tipo objeto porque guarda varios tipos de datos adentro

//se declara de esta manera
var frutas = [];

//se asigna o inicializa de esta manera
frutas = ['Manzana', 'Pera', 'Mango','Naranja','Mandarina','Uva','Fresa','Mora','Cereza'];
console.log(frutas);

//con la función de array lenght puedo saber el total de elementos de un array
console.log("El total de elementos es: "+frutas.length);

/*
Si quiero acceder a un elemento en particular puedo usar la misma variable array y acompañarla con el [] y dentro
el numero de la posición, Ej: frutas[3] para la posición 3 del array de frutas.
Hay que tener en cuenta que los array inician en 0 asi que para el anterior ejemplo nos devolvería
el valor Naranja que aunque visualmente es el 4 elemento internamente es el tercero porque se inicia en cero.
*/

console.log("El elemento en la tercera posición es: "+frutas[3]);

/*
Si quiero agregar mas elementos a un array uso la función de Javascript push();
*/

frutas.push("Kiwi");
console.log(frutas);

/*
Si quiero eliminar elementos de un array en su última posición uso la función de Javascript pop();
*/

frutas.pop();
console.log(frutas);

/*
Si quiero agregar elementos de un array justo a la primera posición uso la función de Javascript unshift();
*/

frutas.unshift("Coco");
console.log(frutas);

/*
Si quiero eliminar elementos de un array en su primera posición uso la función de Javascript shift();
*/

frutas.shift();
console.log(frutas);

/*
Si quiero saber la posición exacta de un elemento del array uso el metodo indexOf();
*/

console.log("La posición del elemento Mandarina es: "+frutas.indexOf("Mandarina"));