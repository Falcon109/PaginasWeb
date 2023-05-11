/* buscamos los elementos */

var cont = document.getElementById('contador')
var btn = document.getElementById('btnEnviar')

/* otra variable qie acumule los click */
var click = 0;

btn.onclick = function(){
    click++;
    cont.innerHTML = click;
}

cont.onmouseover = function(){
    click=0
    cont.innerHTML=click;
}

//leer 4 numero, los dos primero sumarlo y los otros dos multiplicarlos