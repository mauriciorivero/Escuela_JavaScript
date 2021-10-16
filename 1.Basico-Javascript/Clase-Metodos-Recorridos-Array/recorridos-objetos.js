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
voy a filtrar los articulos que tengan un costo mayor o igual que 500
para eso uso la función filter que se encarga de filtrar valores
*/
var articulosFiltrados1 = articulos.filter(function(articulo){
    return articulo.costo<=500;
});
console.log(articulosFiltrados1);

/*
voy a filtrar todos los articulos obteniendo solo el nombre
Para eso uso la función map que se encarga de mapear todos los atributos
de los objetos en el array y con eso puedo llamar a uno especifico.
*/
var articulosFiltrados2 = articulos.map(function(articulo){
    return articulo.nombre;
});
console.log(articulosFiltrados2);
