/*
var	Declara una variable, opcionalmente la inicia a un valor.
let	Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
const	Declara un nombre de constante de solo lectura y ámbito de bloque.
*/

alert("Hola mundo");

function cambiarTexto() {
    document.getElementById("texto").innerHTML = "Just Monika";
  }
  

let Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
for (let i = 0; i < Meses.length; i++) {
    console.log(Meses[i]);
  }

