
var caja = document.getElementById('caja')

function rojo(){
    caja.style.backgroundColor = 'red'
}
function verde(){
    caja.style.backgroundColor = 'green'
}
function azul(){
    caja.style.backgroundColor = 'blue'
}

/* generar un metodo que permita cambiar los color, con una sola funcion, recibiendo un argumento */

function cambiarColor(color){
    caja.style.backgroundColor = color
}
