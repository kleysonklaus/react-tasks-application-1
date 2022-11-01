import React from "react";

function TaskCard({ task }) {

    function mostrarAlerta() {
        alert(task.id)
    }

    return (
        <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={mostrarAlerta} >Eliminar Tarea</button>
        </div>
    )
}

export default TaskCard