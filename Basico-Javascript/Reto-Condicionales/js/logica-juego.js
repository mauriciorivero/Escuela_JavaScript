//Reto condicionales 1

var eleccion=" ";

document.getElementById("rock").onclick = function(){
    eleccion="piedra";
    ejecutarJuego(eleccion);
}
document.getElementById("paper").onclick = function(){
    eleccion="papel";
    ejecutarJuego(eleccion);
}
document.getElementById("scissors").onclick = function(){
    eleccion="tijera";
    ejecutarJuego(eleccion);
}

function ejecutarJuego(eleccion){
    let eleccionCPU = Math.floor(Math.random()*Math.floor(3));
    let palabraCPU = "";
    if(eleccionCPU==1){
        palabraCPU="piedra"
    }else if(eleccionCPU==2){
        palabraCPU="papel";
    }else if(eleccionCPU==3){
        palabraCPU="tijera"
    }else{
        palabraCPU="NoDecide";
    }

    if((eleccion=="piedra")&&(palabraCPU=="piedra")){
        document.getElementById("textResultado").innerHTML="Empate de piedras";
        console.log("empate de piedras");
    }else if((eleccion=="piedra")&&(palabraCPU=="tijera")){
        document.getElementById("textResultado").innerHTML="Ganaste! la piedra parte la tijera";
        console.log("Ganaste! la piedra parte la tijera");
    }else if((eleccion=="piedra")&&(palabraCPU=="papel")){
        document.getElementById("textResultado").innerHTML="Gana la CPU, el papel envuelve la piedra";
        console.log("Gana la CPU, el papel envuelve la piedra");
    }else if((eleccion=="tijera")&&(palabraCPU=="tijera")){
        document.getElementById("textResultado").innerHTML="Empate de tijeras!";
        console.log("Empate de tijeras!");
    }else if((eleccion=="tijera")&&(palabraCPU=="papel")){
        document.getElementById("textResultado").innerHTML="Ganaste! la la tijera rompe el papel";
        console.log("Ganaste! la la tijera rompe el papel");
    }else if((eleccion=="tijera")&&(palabraCPU=="piedra")){
        document.getElementById("textResultado").innerHTML="Perdiste! la la tijera se parte ante la piedra";
        console.log("Perdiste! la la tijera se parte ante la piedra");
    }else if((eleccion=="papel")&&(palabraCPU=="papel")){
        document.getElementById("textResultado").innerHTML="Empate de papeles";
        console.log("Empate de papeles");
    }else if((eleccion=="papel")&&(palabraCPU=="piedra")){
        document.getElementById("textResultado").innerHTML="Ganaste! El papel envuelve la piedra";
        console.log("Ganaste! El papel envuelve la piedra");
    }else if((eleccion=="papel")&&(palabraCPU=="tijera")){
        document.getElementById("textResultado").innerHTML="Perdiste! El papel se rompe ante la tijera";
        console.log("Perdiste! El papel se rompe ante la tijera");
    }else{
        document.getElementById("textResultado").innerHTML="Ganaste! la piedra parte la tijera";
        console.log("No hay juego");
    }
}