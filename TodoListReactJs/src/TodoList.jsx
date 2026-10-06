
import { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() === "") return;

        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <div className="todo-container">

            <h2>My Todo List</h2>

            <div className="input-section">
                <input
                    placeholder="Add a task..."
                    value={newTodo}
                    onChange={updateTodoValue}
                />

                <button onClick={addNewTask}>
                    Add Task
                </button>
            </div>

            <hr />

            <h4>Todo List</h4>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>

        </div>
    );
}

