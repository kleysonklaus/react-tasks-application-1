import { useState } from 'react'

function TaskForm() {
    const [title, useTitle] = useState('')
    return (
        <form>
            <input placeholder="Escribe tu tarea" onChange={(e) => {
                useTitle(e.target.value)
            }} />
            <button>Guardar</button>
        </form>
    )
}

export default TaskForm