//Reto condicionales 2

var eleccion="piedra";

function ejecutarJuego(eleccion){
    let eleccionCPU = Math.floor(Math.random()*Math.floor(3));
    let palabraCPU = "";
    switch (eleccionCPU){
        case 1:
            palabraCPU="piedra";
            break;
        case 2:
            palabraCPU="papel"; 
            break;
        case 3:
            palabraCPU="tijera";
            break;
        default: 
            palabraCPU="NoDecide";   
    }   
    

    if((eleccion=="piedra")&&(palabraCPU=="piedra")){
        console.log("empate de piedras");
    }else if((eleccion=="piedra")&&(palabraCPU=="tijera")){
        console.log("Ganaste! la piedra parte la tijera");
    }else if((eleccion=="piedra")&&(palabraCPU=="papel")){
        console.log("Gana la CPU, el papel envuelve la piedra");
    }else if((eleccion=="tijera")&&(palabraCPU=="tijera")){
        console.log("Empate de tijeras!");
    }else if((eleccion=="tijera")&&(palabraCPU=="papel")){
        console.log("Ganaste! la la tijera rompe el papel");
    }else if((eleccion=="tijera")&&(palabraCPU=="piedra")){
        console.log("Perdiste! la la tijera se parte ante la piedra");
    }else if((eleccion=="papel")&&(palabraCPU=="papel")){
        console.log("Empate de papeles");
    }else if((eleccion=="papel")&&(palabraCPU=="piedra")){
        console.log("Ganaste! El papel envuelve la piedra");
    }else if((eleccion=="papel")&&(palabraCPU=="tijera")){
        console.log("Perdiste! El papel se rompe ante la tijera");
    }else{
        console.log("No hay juego");
    }
}

ejecutarJuego(eleccion);