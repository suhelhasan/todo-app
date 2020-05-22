import React, { useReducer } from 'react';
import './App.css';
import reducer from './context/reducer'
import { TodoContext } from './context/todoContext'
import Todos from './components/Todos/Todos'
import TodoForm from './components/TodoForm/TodoForm'

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
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
