import React, { useState } from "react";
import './body.css'
function Todo() {
    const [task, settask] = useState([])
    const [input, setinput] = useState('')
    
        
        const addTask = (event) => {
            event.preventDefault();
            if(input.trim()) {
                settask([...task, {text: input}]); 
                setinput('');
            }
        };
        const deleteTask = (index) => {
            settask(task.filter((_,i) => i !== index));
        }
    return (
        <>
            <div className="formbody">
                <h1>To-Do List</h1>
                <form>
                    <label style={{fontSize:'20px'}}>Enter Task:</label>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setinput(e.target.value)}
                    />
                    <button id="addbtn"type="submit" onClick={addTask}>Add Task</button>
                </form>
            </div>
            <div className="task-content">
                <h1>Tasks:</h1>
                <ul>
                    {task.map((item,index) => (
                        <li key={index}>
                            {item.text}
                            <button id="removebtn"onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </>
    )
}
export default Todo