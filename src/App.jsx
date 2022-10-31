import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { tasks as data } from "./task";

import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState([])

  useEffect((e) => {
    setTasks(data)
  }, [])

  function createTask(taskTitle) {
    const _newData = {
      id: tasks.length,
      title: taskTitle,
      description: "description del nuevo dato insetado"
    }
    setTasks([...tasks, _newData])
    // console.log(tasks)
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App