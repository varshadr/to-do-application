import React from 'react';
const TodoItem = ({todo, markComplete, deleteTodo}) => {// his is a functional component named TodoItem. It takes three props as arguments: todo, markComplete, and deleteTodo.
    const { id, title, completed } = todo;//destructuring the properties of an object and storing it in a variable
    return (
        <div className = "todo-item">
        <input 
        type="checkbox"
        onChange={()=>markComplete(id)} 
        checked={completed}
        />
        <span className={completed ? "completed":null}>{title}</span>
        <button 
        onClick={()=>deleteTodo(id)}
        className="delete-btn"
        >X</button>
        </div>
    );
}
export default TodoItem;
