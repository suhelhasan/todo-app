import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/todoContext";
import { v4 } from "uuid";
import { ADD_TODO, REMOVE_ALL } from "../../context/action.types";
import { FaPen, FaClipboardList, FaTrash } from 'react-icons/fa';
import styling from './TodoForm.module.css'


export default function TodoForm() {
  let { dispatch } = useContext(TodoContext);

  let [task, setTask] = useState("");

  let storeTodo = () => {
    if (task.length < 3) {
      return alert("Length should be greater then 3");
    }

    let info = {
      userTask: task,
      id: v4(),
    };
    dispatch({
      type: ADD_TODO,
      payload: info,
    });
    setTask("");
  };

  let clearAll = () => {

    let reply = window.confirm('R u sure you want to delete ? ');

    if (reply) {
      dispatch({
        type: REMOVE_ALL
      });
    }

  }
  return (
    <div className={styling.TodoForm}>
      <div>
        <h1>What you want to do TODAY? <FaClipboardList /></h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className={styling.inputBox}
          placeholder='enter your task..'
          autofocus="autofocus"
        />
      </div>
      <div>
        <button className={styling.todoFormButton} onClick={storeTodo}>Add Task &nbsp; <FaPen className={styling.icon} /></button>
        <button className={styling.todoFormButton} onClick={clearAll}>Remove All &nbsp;<FaTrash className={styling.icon2} /></button>
      </div>
    </div>
  );
}
