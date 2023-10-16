import React  from "react";

const Todo = ({task, removeTask}) => {
    return (
        <li>
            <span>{task.item}</span>
            <button onClick={()=> {removeTask(task.id)}}>Delete</button>
        </li>
    )
}

export default Todo;
