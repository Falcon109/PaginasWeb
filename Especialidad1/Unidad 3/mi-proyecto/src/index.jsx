import React from 'react';
import ReactDOM from 'react-dom';

/* App es un componente */
const App = () => {
  console.log("hola mundo desde el componente")
  const fecha = new Date()
  const num1 = 5
  const num2 = 10
  return (
    <div>
      <h1>Mi primera App</h1>
      <h1>Just Monika</h1>
      <br />
      <h3>La fecha de hoy es : {fecha.toString()}</h3>
      <h3>La suma de {num1} más {num2} es {num1 + num2}</h3>
    </div>
  );
};

const Saludo = (props) => {
  return (
    <div>
      <h1>Hola {props.nombre}, bienvenido al club de literura</h1>
    </div>
  )
}

const Saludo2 = (props) => {
  return (
    <div>
      <h1>Hola {props.nombre}, tengo {props.edad} años</h1>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <h1>Este es el Footer</h1>
    </div>
  )
}

const App2 = () => {
  const nombre1 = "Claudio"
  const edad1 = "5"
  return (
    <div>
      <h1>Just Monika</h1>
      <Saludo2 nombre="Ariel" edad="22" />
      <Saludo2 nombre={nombre1} edad={edad1} />
      <Saludo />
      <Footer />
    </div>
  )
}

/* Ejercicio */

const App3 = () => {
  const curso = 'Especialidad 1'
  const parte1 = 'Horas unidad 1'
  const ejercicio1 = 10
  const parte2 = 'Horas unidad 2'
  const ejercicio2 = 7
  const parte3 = 'Horas unidad 3'
  const ejercicio3 = 14

  return (
    <div>
      <Header curso={curso} />
      <Contenido parte1={parte1} ejercicio1={ejercicio1} parte2={parte2} ejercicio2={ejercicio2} parte3={parte3} ejercicio3={ejercicio3} />
      <Total ejercicio1={ejercicio1} ejercicio2={ejercicio2} ejercicio3={ejercicio3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.curso}</h1>
    </div>
  )
}

const Contenido = (props) => {
  return (
    <div>
      <Parte parte={props.parte1} ejercicio={props.ejercicio1} />
      <Parte parte={props.parte2} ejercicio={props.ejercicio2} />
      <Parte parte={props.parte3} ejercicio={props.ejercicio3} />
    </div>)
}

const Total = (props) => {
  return (
    <div>
      <p>Número de horas {props.ejercicio1 + props.ejercicio2 + props.ejercicio3}</p>
    </div>)
}

const Parte = (props) => {
  return (
    <div>
      <p>
        {props.parte} {props.ejercicio}
      </p>
    </div>)
}

ReactDOM.render(<App3 />, document.getElementById('root'));
