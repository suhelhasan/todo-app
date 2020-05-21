import React, { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { REMOVE_TODO } from '../context/action.types'
// import styling from './Todos.module.css'


export default function Todos() {
  let { todos, dispatch } = useContext(TodoContext);

  let clearTodo = (id) => {
    dispatch({
      type: REMOVE_TODO,
      payload: id
    })
  }
  return (
    <div>

      {todos.map(todo => (
        <div key={todo.id} >
          <h1 > {todo.userTask}</h1>
          <button >Done</button>

          <button onClick={() => clearTodo(todo.id)}>Clear Todo</button>
        </div>
      ))}
    </div>
  );

}
