import { tasks as data } from "./task";
import { useState, useEffect } from 'react'

console.log(data)

function TaskList() {

    const [tasks, setTasks] = useState([])

    useEffect((e) => {
        setTasks(data)
    }, [])

    if (tasks.length === 0) {
        return <h1>No hay tareas aun ... obteniendo!</h1>
    }

    return (
        <div>
            {
                tasks.map((element, index) => (
                    <div key={element.id}>
                        <h1>{element.title}</h1>
                    </div>
                )
                )
            }
        </div>
    )
}

export default TaskList