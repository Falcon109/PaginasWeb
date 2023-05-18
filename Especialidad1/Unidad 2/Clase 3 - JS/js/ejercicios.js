//solucuion ejercicio 1

var num1= parseInt(prompt("indique el numero 1: "));
var num2= parseInt(prompt("indique el numero 2: "));
var num3= parseInt(prompt("indique el numero 3: "));
var num4= parseInt(prompt("indique el numero 4: "));

if (isNaN(num1) || isNaN(num2)){
    console.log("Al menos un valor ingresado no es numerico")
}else{
    suma = num1+num2
    console.log("la suma es: "+suma)
}

//var suma = parseInt(num1)+ parseInt(num2)
//console.log("La suma es: "+suma)

var producto = parseInt(num3) * parseInt(num4)
console.log("El producto es: "+producto)


//solucion ejercicio 4

var sueldo, antiguedad
sueldo = prompt("indique se sueldo: ")
antiguedad = prompt("indique su antiguedad: ")

if(sueldo<= 500 && antiguedad > 10){
    //sueldo = sueldo + sueldo* 0.2
    //sueldo = sueldo*1.2
    sueldo *= 1.2 
    
}else if(sueldo<= 500 && antiguedad < 10){
    sueldo *= 1.05
}else{
}
console.log("Su nuevo sueldo es: "+sueldo)
