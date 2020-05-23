import React, { useReducer, useEffect } from 'react';
import './App.css';
import reducer from './context/reducer'
import { TodoContext } from './context/todoContext'
import Todos from './components/Todos/Todos'
import TodoForm from './components/TodoForm/TodoForm'
import { GET_FROM_LOCAL } from "./context/action.types";

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    // console.log({ localTodos });
    if (localTodos) {
      dispatch({
        type: GET_FROM_LOCAL,
        payload: JSON.parse(localTodos),
      })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <div className="app">

      <TodoContext.Provider value={{ todos, dispatch }}>
        <TodoForm />
        <Todos />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
