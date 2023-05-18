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
    img.src = 'img/sol.png'
}

function mostrarLuna(){
    img.src = 'img/luna.png'
}

luna = true
btn = document.getElementById('Tarea')
function cambiarImagen(){
    if(luna){
        img.src= 'img/sol.png'
        luna=false
        btn.innerHTML = "Mostrar luna"
    }else{
        img.src= 'img/luna.png'
        luna=true
        btn.innerHTML = "Mostrar sol"
    }
}