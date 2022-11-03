import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext()

export function TaskcontextProvider(props) {
    const [tasks, setTasks] = useState([])

    function createTask(taskTitle, taskDescription) {
        const _newData = {
            id: tasks.length,
            title: taskTitle,
            description: taskDescription
        }
        setTasks([...tasks, _newData])
    }


    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect((e) => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={{
            tasks: tasks,
            deleteTask: deleteTask,
            createTask: createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

// no se usara el export global para usar contexto
// export default TaskcontextProvider