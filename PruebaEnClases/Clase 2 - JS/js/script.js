function mensaje(){
    alert("¿Como estas?");
}
function sobre(){
    alert("Pasó el mouse sobre mi");
}
function mostrarFecha(){
    document.getElementById('textoAMostrar').innerHTML = Date()
}

var botonSolLuna = document.getElementById('boton-sol-luna');
var imagenSol = '../img/sol.png';
var imagenLuna = '../img/luna.png';

botonSolLuna.addEventListener('click', function() {
  var imagenActual = botonSolLuna.getAttribute('data-imagen');

  if (imagenActual === imagenSol) {
    botonSolLuna.textContent = 'Luna';
    botonSolLuna.setAttribute('data-imagen', imagenLuna);
    botonSolLuna.style.backgroundColor = 'navy';
  } else {
    botonSolLuna.textContent = 'Sol';
    botonSolLuna.setAttribute('data-imagen', imagenSol);
    botonSolLuna.style.backgroundColor = 'yellow';
  }

  document.getElementById('imagen-sol-luna').setAttribute('src', botonSolLuna.getAttribute('data-imagen'));
});