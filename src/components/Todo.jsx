import React, { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue('')
    }

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div>
            <h1>Todo list</h1>
            <form>
                <input type="text" value={inputValue} onChange={handleChange} />
                <button onClick={handleSubmit}>Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo}>{todo}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;