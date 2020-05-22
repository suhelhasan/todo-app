import React, { useContext } from "react";
import { TodoContext } from "../../context/todoContext";
import { REMOVE_TODO, MARK_AS_DONE } from '../../context/action.types'
import styling from './Todos.module.css'
import { FaCheck, FaTrash } from 'react-icons/fa';


export default function Todos() {
  let { todos, dispatch } = useContext(TodoContext);
  let clearTodo = (id) => {
    dispatch({
      type: REMOVE_TODO,
      payload: id
    })
  }

  let markAsDone = (id) => {

    dispatch({
      type: MARK_AS_DONE,
      payload: id,
    })

  }
  let i = 1;
  return (
    <div>

      {todos.map(todo => (
        <div key={todo.id} className={styling.todo}>
          <p className={todo.add ? styling.completed : styling.myColor}>{i++}.  {todo.userTask}</p>
          <div className={styling.buttonSection}>
            <button onClick={() => markAsDone(todo.id)} className={todo.add ? styling.changeIcon : styling.icon}><FaCheck /></button>
            <button onClick={() => clearTodo(todo.id)} className={styling.icon2}><FaTrash /></button>
          </div>
        </div>
      ))}
    </div>
  );

}
