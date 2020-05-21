import React, { useReducer } from 'react';
import './App.css';
import reducer from './context/reducer'
import { TodoContext } from './context/todoContext'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <div>
      <h1>Hello Danish</h1>

      <TodoContext.Provider value={{ todos, dispatch }}>
        <TodoForm />
        <Todos />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
