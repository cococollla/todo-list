import React, { useState } from "react";
import Modal from "./Modal";

const Todo = ({ todo, handleSwitch, handleDelete, handleEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (editedText) => {
    handleEdit(todo.id, editedText);
  };

  return (
    <div key={todo.id + todo.key} className="item-todo">
      <div
        onClick={() => handleSwitch(todo.id)}
        className={todo.complete ? "item-text strike" : "item-text"}
      >
        {todo.task}
      </div>
      <div>
        <button className="item-button" onClick={openModal}>
          Edit
        </button>
        <button className="item-button" onClick={() => handleDelete(todo.id)}>
          Delete
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        initialText={todo.task}
        handleSave={handleSave}
      />
    </div>
  );
};

export default Todo;