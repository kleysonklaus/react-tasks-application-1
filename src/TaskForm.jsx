import { useState } from 'react'

function TaskForm() {
    const [title, useTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title)
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