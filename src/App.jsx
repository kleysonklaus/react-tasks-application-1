import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { tasks as data } from "./task";

import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState([])

  useEffect((e) => {
    setTasks(data)
  }, [])

  function createTask(taskTitle, taskDescription) {
    const _newData = {
      id: tasks.length,
      title: taskTitle,
      description: taskDescription
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