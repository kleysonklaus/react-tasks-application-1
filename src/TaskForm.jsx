import { useState } from 'react'

function TaskForm({ createTask }) {
    const [title, useTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask(title)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tarea" onChange={(e) => {
                useTitle(e.target.value)
            }} />
            <button>Guardar</button>
        </form>
    )
}

export default TaskForm