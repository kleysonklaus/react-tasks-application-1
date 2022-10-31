import TaskCard from "./TaskCard"

function TaskList({ tasks }) {

    if (tasks.length === 0) {
        return <h1>No hay tareas aun ... obteniendo!</h1>
    }

    return (
        <div>
            {
                tasks.map((task, index) => (
                    <TaskCard key={task.id} task={task} />
                    // <div key={element.id}>
                    //     <h1>{element.title}</h1>
                    //     <p>{element.description}</p>
                    // </div>
                )
                )
            }
        </div>
    )
}

export default TaskList