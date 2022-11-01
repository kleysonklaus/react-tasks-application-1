import { useState } from 'react'

function TaskForm({ createTask }) {
    const [title, useTitle] = useState('')
    const [description, useDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask(title, description)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tarea" onChange={(e) => {
                useTitle(e.target.value)
            }} />
            <textarea placeholder='Escribe la descripcion de la tarea'
                onChange={(e) => useDescription(e.target.value)}
            ></textarea>
            <button>Guardar</button>
        </form>
    )
}

export default TaskForm