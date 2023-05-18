console.log("hola")

var nombre = "claudio en el telefono"
console.log(nombre)

/* pasar de string a int */
var edad = 25
console.log("edad"*5)
console.log("25"+5)

var edad = "30"
var edad = parseInt(edad)

/* condicion ternaria */

console.log(edad >= 18 ? "eres mayor de edad" : "eres menor de edad")

/* Tarea indica si un num es pos, neg o cero */

var num = 22
if (num>0){
    console.log("Es positivo")
}
if(num<0){
    console.log("Es negativo")
}
if(num==0){
    console.log("es cero")
}

console.log(num>0 ? "positivo" : num<0 ? "negativa" : "cero")

/* switch */

var opcion = 1;
switch(opcion){
    case 1:
        console.log("Opcion 1");
        break;
    case 2:
        console.log("Opcion 2")
        break;
default:
    console.log("Acaso no le temes a la muerte")
}