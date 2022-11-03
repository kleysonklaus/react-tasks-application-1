import { createContext } from "react";

export const TaskContext = createContext()

export function TaskcontextProvider(props) {
    let x = 20

    return (
        <TaskContext.Provider value={x}>
            {props.children}
        </TaskContext.Provider>
    )
}

// no se usara el export global para usar contexto
// export default TaskcontextProvider