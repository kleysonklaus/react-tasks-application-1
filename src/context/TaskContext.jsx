import { createContext } from "react";

export const TaskContext = createContext()

export function TaskcontextProvider(props) {
    return (
        <TaskContext.Provider>
            {props.children}
        </TaskContext.Provider>
    )
}

// no se usara el export global para usar contexto
// export default TaskcontextProvider