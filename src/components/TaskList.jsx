import { useContext } from "react";
import TaskCard from "./TaskCard"
import { TaskContext } from "../context/TaskContext";

function TaskList() {

    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1>No hay tareas aun ... obteniendo!</h1>
    }

    return (
        <div>
            {
                tasks.map((task, index) => (
                    <TaskCard key={task.id} task={task} />
                )
                )
            }
        </div>
    )
}

export default TaskList