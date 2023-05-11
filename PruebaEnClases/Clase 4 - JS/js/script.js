
/* Identificación de elementos */
var btnCalcular = document.getElementById('btnCalcular').addEventListener('click', calcular)
var temperaturaF = document.getElementById('respuesta')
var temperaturaC = document.getElementById('temperatura')



/* Funciones */
function calcular() {
    //Obtener valor y pasar a int
    temperaturaC = parseInt(document.getElementById('temperatura').value )

    if(isNaN(temperaturaC)){
        alert('Ingrese un valor válido')
        document.getElementById('temperatura').value = ""
    }else{
        temperaturaF.innerText = temperaturaC * 9/5 + 32 + " F°"
        document.getElementById('temperatura').value = ""
        console.log(`${temperaturaC} F°`)
    }

}