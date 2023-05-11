let jugador = "X";
/* Se le asigna a cada botón un evento click para jugar*/
for (let i = 1; i <= 9; i++) {
  document.getElementById("btn" + i).addEventListener("click", jugar);
}

function jugar(evt) {
  evt.target.value = jugador;
  /* Ver cual es el jugador actual X o O */
  /* Sentencia ternaria */
  jugador == "X" ? (jugador = "O") : (jugador = "X");
  verificarGanador();
}

function verificarGanador() {
  let b1 = document.getElementById("btn1").value;
  let b2 = document.getElementById("btn2").value;
  let b3 = document.getElementById("btn3").value;
  let b4 = document.getElementById("btn4").value;
  let b5 = document.getElementById("btn5").value;
  let b6 = document.getElementById("btn6").value;
  let b7 = document.getElementById("btn7").value;
  let b8 = document.getElementById("btn8").value;
    let b9 = document.getElementById("btn9").value;

  /* Verificar fila 1 */
  if (b1 == "X" && b2 == "X" && b3 == "X") {
    alert("Gano X");
  }
  if (b1 == "O" && b2 == "O" && b3 == "O") {
    alert("Gano O");
  }
  /* Verificar fila2 */
  if (b4 == "X" && b5 == "X" && b6 == "X") {
    alert("Gano X");
  }
  if (b4 == "O" && b5 == "O" && b6 == "O") {
    alert("Gano O");
  }
  /* Verificar fila 3 */
  if (b7 == "X" && b8 == "X" && b9 == "X") {
    alert("Gano X");
  }
  if (b7 == "O" && b8 == "O" && b9 == "O") {
    alert("Gano O");
  }

  /* Verificar columna 1 */
  if (b1 == "X" && b4 == "X" && b7 == "X") {
    alert("Gano X");
  }
  if (b1 == "O" && b4 == "O" && b7 == "O") {
    alert("Gano O");
  }

  /* Verificar columna 2 */
  if (b2 == "X" && b5 == "X" && b8 == "X") {
    alert("Gano X");
  }
  if (b2 == "O" && b5 == "O" && b8 == "O") {
    alert("Gano O");
  }

  /* Verificar columna 3 */
  if (b3 == "X" && b6 == "X" && b9 == "X") {
    alert("Gano X");
  }
  if (b3 == "O" && b6 == "O" && b9 == "O") {
    alert("Gano O");
  }

  /* Verificar diagonal 1 */
  if (b1 == "X" && b5 == "X" && b9 == "X") {
    alert("Gano X");
  }
  if (b1 == "O" && b5 == "O" && b9 == "O") {
    alert("Gano O");
  }

  /* Verificar diagonal 2 */
  if (b3 == "X" && b5 == "X" && b7 == "X") {
    alert("Gano X");
  }
  if (b3 == "O" && b5 == "O" && b7 == "O") {
    alert("Gano O");
  }
}
