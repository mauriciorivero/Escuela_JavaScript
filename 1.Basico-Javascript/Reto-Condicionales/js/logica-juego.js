//Reto condicionales 1

var eleccion=" ";
var pointsPlayer=0;
var pointsCPU=0;

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
        document.getElementById("result-player").style.backgroundImage="url('img/isometric_rock.png')";
        document.getElementById("result-cpu").style.backgroundImage="url('img/isometric_rock.png')";
        pointsPlayer++;
        pointsCPU++;
        document.getElementById("counterPlayer").innerHTML = pointsPlayer;
        document.getElementById("counterCPU").innerHTML = pointsCPU;
    }else if((eleccion=="piedra")&&(palabraCPU=="tijera")){
        document.getElementById("result-player").style.backgroundImage="url('img/isometric_rock.png')";
        document.getElementById("result-cpu").style.backgroundImage="url('img/isometric_scissors.png')";
        pointsPlayer++;
        document.getElementById("counterPlayer").innerHTML = pointsPlayer;
    }else if((eleccion=="piedra")&&(palabraCPU=="papel")){
        document.getElementById("result-player").style.backgroundImage="url('img/isometric_rock.png')";
        document.getElementById("result-cpu").style.backgroundImage="url('img/isometric_paper.png')";
        pointsCPU++;
        document.getElementById("counterCPU").innerHTML = pointsCPU;
    }else if((eleccion=="tijera")&&(palabraCPU=="tijera")){
        document.getElementById("result-player").style.backgroundImage="url('img/isometric_scissors.png')";
        document.getElementById("result-cpu").style.backgroundImage="url('img/isometric_scissors.png')";
        pointsPlayer++;
        pointsCPU++;
        document.getElementById("counterPlayer").innerHTML = pointsPlayer;
        document.getElementById("counterCPU").innerHTML = pointsCPU;
    }else if((eleccion=="tijera")&&(palabraCPU=="papel")){
        document.getElementById("result-player").style.backgroundImage="url('img/isometric_scissors.png')";
        document.getElementById("result-cpu").style.backgroundImage="url('img/isometric_paper.png')";
        pointsPlayer++;
        document.getElementById("counterPlayer").innerHTML = pointsPlayer;
    }else if((eleccion=="tijera")&&(palabraCPU=="piedra")){
        document.getElementById("result-player").style.backgroundImage="url('img/isometric_scissors.png')";
        document.getElementById("result-cpu").style.backgroundImage="url('img/isometric_rock.png')";
        pointsCPU++;
        document.getElementById("counterCPU").innerHTML = pointsCPU;
    }else if((eleccion=="papel")&&(palabraCPU=="papel")){
        document.getElementById("result-player").style.backgroundImage="url('img/isometric_paper.png')";
        document.getElementById("result-cpu").style.backgroundImage="url('img/isometric_paper.png')";
        pointsPlayer++;
        pointsCPU++;
        document.getElementById("counterPlayer").innerHTML = pointsPlayer;
        document.getElementById("counterCPU").innerHTML = pointsCPU;
    }else if((eleccion=="papel")&&(palabraCPU=="piedra")){
        document.getElementById("result-player").style.backgroundImage="url('img/isometric_paper.png')";
        document.getElementById("result-cpu").style.backgroundImage="url('img/isometric_rock.png')";
        pointsPlayer++;
        document.getElementById("counterPlayer").innerHTML = pointsPlayer;
    }else if((eleccion=="papel")&&(palabraCPU=="tijera")){
        document.getElementById("result-player").style.backgroundImage="url('img/isometric_paper.png')";
        document.getElementById("result-cpu").style.backgroundImage="url('img/isometric_scissors.png')";
        pointsCPU++;
        document.getElementById("counterCPU").innerHTML = pointsCPU;
    }else{
        console.log("No hay juego");
    }
}