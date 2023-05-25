const x = 4
//x=5 ERROR

let y = 10

console.log(x,y)
y+=10 // y = y+10
y = 'Hola'

const array = [1,2,3,4,5]
console.log(array)
array.push(9) //agregar datos a una array
console.log(array)

array.pop () //sacar datos de una array

console.log(array[2]) //mostrar un dato especifico

//array.forEach(function(elemento, indice){console.log(elemento.indice)})

array.forEach(function(elemento){console.log(elemento*2)})

array.forEach(valor => {console.log(valor)})