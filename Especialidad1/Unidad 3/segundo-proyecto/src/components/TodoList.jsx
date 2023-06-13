import React, { Fragment, useRef, useState } from "react";
/* generar id unicas */
import uuid4 from "uuid4";

/* Importar TodoItem */
import { TodoItem } from "./TodoItem";

/* Exportar TodoList */
export function TodoList() {
  const [todos, setTodos] = useState([
  ]);

  const tarearef = useRef()

  const agregartarea = () => {
    const tareas = tarearef.current.value.trim();

    if (tareas === '') return;

    tarearef.current.value = null

    {/*id = uuid4(), tarea = tareas*/ }
    setTodos((prevTodos) => {
      const nuevatarea = {
        id: uuid4, task: tareas, complete: false
      }
      return [...prevTodos, nuevatarea]
    })
  }

  const cambiarestadotarea = (id) => {
    const nuevoTodos = [...todos]

    const todo = nuevoTodos.find((todo) => todo.id === id)
    todo.complete = !todo.complete
    setTodos(nuevoTodos)
  }

  const contadortareas = () => {
    return todos.filter((todo) => !todo.complete).length
  }

  const Resumentareas = () => {
    const cant = contadortareas()

    if(cant === 0){
      return(
        <div className="alert alert-success mt-3">Felicidaddes has completado todas tus tareas OwO</div>
      )
    }
    if(cant === 1){
      return(
        <div className="alert alert-info mt-3">Te queda solamente 1 tarea</div>
      )
    }
    return(
      <div className="alert alert-war mt-3">Te queda {cant} tarea pendientes</div>
    )

  }

  return (
    <Fragment>
      <h1>Lista de Tareas</h1>

      {/* input para recibir los datos */}
      <div className="input-group my-4">
        <input className="form-control" placeholder="Ingrese una tarea" ref={tarearef}></input>
        <button className="btn btn-success ms-3"><i className="bi bi-plus-circle-fill" onClick={agregartarea}></i></button>
        <button className="btn btn-danger"><i className="bi bi-trash3-fill"></i></button>
      </div>

      {/* Lista de tareas */}
      <ul className="list-group">
        {/* recorrer la lista */}
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarestadotarea}/>
        ))}
      </ul>
        <Resumentareas />
    </Fragment>
  );
}