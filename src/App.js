import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  const handleCreate = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false
      };
      setTodos([...todos, newItem]);
    }
  };

  const handleDelete = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleSwitch = (id) => {
    setTodos([
      ...todos.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : { ...task }
      )
    ]);
  };

  return (
    <div className="App">
      <header>
        <h1>Todo list: {todos.length}</h1>
      </header>
      <TodoForm handleCreate={handleCreate} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            handleSwitch={handleSwitch}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default App;
