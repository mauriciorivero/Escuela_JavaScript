//Reto condicionales 2
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
    console.log("La eleccion del usuario es: "+eleccion);
    console.log("La eleccion de la CPU es: "+eleccionCPU);
    switch (eleccionCPU){
        case 1:
            document.getElementById("result-cpu").style.backgroundImage="url('img/isometric_rock.png')";
            if(eleccion=="piedra"){
                document.getElementById("result-player").style.backgroundImage="url('img/isometric_rock.png')";
                pointsPlayer++;
                pointsCPU++;
                document.getElementById("counterPlayer").innerHTML = pointsPlayer;
                document.getElementById("counterCPU").innerHTML = pointsCPU;
                break;
            }
            if(eleccion==="papel"){
                document.getElementById("result-player").style.backgroundImage="url('img/isometric_paper.png')";
                pointsPlayer++;
                document.getElementById("counterPlayer").innerHTML = pointsPlayer;
                break;
            }
            if(eleccion==="tijera"){
                document.getElementById("result-player").style.backgroundImage="url('img/isometric_scissors.png')";
                pointsCPU++;
                document.getElementById("counterCPU").innerHTML = pointsCPU;
                break;
            }
        case 2:
            document.getElementById("result-cpu").style.backgroundImage="url('img/isometric_paper.png')";
            if(eleccion==="piedra"){
                document.getElementById("result-player").style.backgroundImage="url('img/isometric_rock.png')";
                pointsCPU++;
                document.getElementById("counterCPU").innerHTML = pointsCPU;
                break;
            }
            if(eleccion==="papel"){
                document.getElementById("result-player").style.backgroundImage="url('img/isometric_paper.png')";
                pointsPlayer++;
                pointsCPU++;
                document.getElementById("counterPlayer").innerHTML = pointsPlayer;
                document.getElementById("counterCPU").innerHTML = pointsCPU;
                break;
            }
            if(eleccion==="tijera"){
                document.getElementById("result-player").style.backgroundImage="url('img/isometric_scissors.png')";
                pointsPlayer++;
                document.getElementById("counterPlayer").innerHTML = pointsPlayer;
                break;
            }
        case 3:
            document.getElementById("result-cpu").style.backgroundImage="url('img/isometric_scissors.png')";
            if(eleccion==="piedra"){
                document.getElementById("result-player").style.backgroundImage="url('img/isometric_rock.png')";
                pointsPlayer++;
                document.getElementById("counterPlayer").innerHTML = pointsPlayer;
                break;
            }
            if(eleccion==="papel"){
                document.getElementById("result-player").style.backgroundImage="url('img/isometric_paper.png')";
                pointsCPU++;
                document.getElementById("counterCPU").innerHTML = pointsCPU;
                break;
            }
            if(eleccion==="tijera"){
                document.getElementById("result-player").style.backgroundImage="url('img/isometric_scissors.png')";
                pointsPlayer++;
                pointsCPU++;
                document.getElementById("counterPlayer").innerHTML = pointsPlayer;
                document.getElementById("counterCPU").innerHTML = pointsCPU;
                break;
            }
        default: 
            palabraCPU="NoDecide";
    }   
}
