import React from "react";

export function TodoItem({ todo , cambiarEstado }) {
  const { id, task ,completed} = todo;
  const fncambiarestado = ()  => {
    cambiarEstado(id)
  }
  return (
    <li className="list-group-item" key={id}>
      <input type="checkbox" className="form-checked-input me-2" onChange={fncambiarestado} checked={completed}/>
      {task}
    </li>
  );
}