import TaskContext from "../context/TaskContext";

function TaskCard({ task, deleteTask }) {

    return (
        <TaskContext>
            <div key={task.id}>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
                <button onClick={() => deleteTask(task.id)} >Eliminar Tarea</button>
            </div>
        </TaskContext>
    )
}

export default TaskCard