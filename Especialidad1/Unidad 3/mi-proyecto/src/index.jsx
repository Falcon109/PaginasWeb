import React from 'react';
import ReactDOM from 'react-dom';

/* App es un componente */
const App = () => {
  console.log("hola mundo desde el componente")
  const fecha = new Date()
  const num1 = 5
  const num2 = 10
  return(
  <div>
    <h1>Mi primera App</h1>
    <h1>Just Monika</h1>
    <br/>
    <h3>La fecha de hoy es : {fecha.toString()}</h3>
    <h3>La suma de {num1} más {num2} es {num1+num2}</h3>
  </div>
  );
};

const Saludo= (props) => {
  return(
    <div>
      <h1>Hola {props.nombre}, bienvenido al club de literura</h1>
    </div>
  )
}

const Saludo2= (props) => {
  return(
    <div>
      <h1>Hola {props.nombre}, tengo {props.edad} años</h1>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      <h1>Este es el Footer</h1>
    </div>
  )
}

const App2= () => {
  const nombre1 = "Claudio"
  const edad1 = "5"
  return(
    <div>
      <h1>Just Monika</h1>
      <Saludo2 nombre="Ariel" edad="22"/>
      <Saludo2 nombre={nombre1} edad={edad1}/>
      <Saludo/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(<App2/>, document.getElementById('root'));
