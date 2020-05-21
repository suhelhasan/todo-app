import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";
import { v4 } from "uuid";
import { ADD_TODO } from "../context/action.types";

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

  return (
    <div>
      <h1>I am from Todo Form</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={storeTodo}>Add Todo</button>
    </div>
  );
}
