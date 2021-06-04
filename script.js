var inicio = new Date().getTime();

function aparecer() {

    var alto = Math.random()*400;
    var izq = Math.random()*400;
    var width = (Math.random()*200)+100;
    

    document.getElementById("forma").style.display="block";
    document.getElementById("forma").style.backgroundColor = "blue";
    document.getElementById("forma").style.top = top+"px";
    document.getElementById("forma").style.left = izq +"px";
    document.getElementById("forma").style.width = width +"px";
    document.getElementById("forma").style.height = width +"px";

    inicio = new Date().getTime();
}
function aparecerFormaRandom() {
    setTimeout(aparecer, Math.random()*2000);
}
aparecerFormaRandom();
document.getElementById("forma").onclick = function(){
    document.getElementById("forma").style.display="none";

    var final = new Date().getTime();
    var diferencia = (final - inicio) / 1000;
    document.getElementById("tiempo").innerHTML = diferencia;

    aparecerFormaRandom();
}