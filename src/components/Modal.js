import React, { useState } from "react";
import "./modal.css"

const Modal = ({ isOpen, closeModal, initialText, handleSave }) => {
    const [editedText, setEditedText] = useState(initialText);

    const handleChange = (e) => {
        setEditedText(e.currentTarget.value);
    };

    const handleSaveClick = () => {
        handleSave(editedText);
        closeModal();
    };

    return (
        <div className={`modal ${isOpen ? "open" : ""}`}>
            <div className="modal-content">
                <div>
                    <textarea type="text" value={editedText} onChange={handleChange} />
                </div>
                <div>
                    <button className="item-button" onClick={handleSaveClick}>Save</button>
                    <button className="item-button" onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;