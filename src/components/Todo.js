import React from "react";

const Todo = ({ todo, handleSwitch, handleDelete }) => {
  return (
    <div key={todo.id + todo.key} className="item-todo">
      <div
        onClick={() => handleSwitch(todo.id)}
        className={todo.complete ? "item-text strike" : "item-text"}
      >
        {todo.task}
      </div>
      <button className="item-delete" onClick={() => handleDelete(todo.id)}>
        Delete
      </button>

    </div>
  );
};

export default Todo;