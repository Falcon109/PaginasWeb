function saludo(){
    alert("Hola mundo");
}
function mensaje(){
    alert("¿Como estas?");
}
function sobre(){
    alert("Pasó el mouse sobre mi");
}
function mostrarFecha(){
    document.getElementById('textoAMostrar').innerHTML = Date()
} 

var img = document.getElementById('img')
function mostrarSol(){
    img.src = '../img/sol.png'
}

function mostrarLuna(){
    img.src = '../img/luna.png'
}