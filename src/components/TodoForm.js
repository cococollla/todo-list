import React, { useState } from "react";

const TodoForm = ({ handleCreate }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Todo..."
      />
      <button className="item-create">Create</button>
    </form>
  );
};

export default TodoForm;