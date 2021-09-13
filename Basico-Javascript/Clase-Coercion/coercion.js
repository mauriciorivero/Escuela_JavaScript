/*
Ejemplos de coerción
*/

console.log(4+"7");//47
console.log(4*"7");//28
console.log(2+true);//3
console.log(false-3);//-3

/*
Cohercion implicita: Porque el mismo JIT compiler se encarga de definir a la variable a 
como String ya que fue concatenado el valor entre comillas de 7 mas el número 4
*/
var a = 4+"7";
console.log(a);
typeof a

/*
Cohercion implicita: Porque el mismo JIT compiler se encarga de definir a la variable a 
como number ya que fue multiplicado el valor de 4 por el 7entre comillas.
La diferencia con el anterior es el operador, en uno fue + en el otro *
En el primer ejemplo el operador no ocupa una suma sino una concatenación, por eso regresa 
un texto, en el segundo ejemplo el operador ocupa una multiplicación por ende regresa
un número.
*/
var a = 4*"7";
console.log(a);
typeof a

/*
Coherción Explicita: Obligo al JIT compiler a que un valor tome un tipo de dato especifico
*/
var a = 10;
var texto = String(a);