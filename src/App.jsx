import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { tasks as data } from "./task";

import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState([])

  useEffect((e) => {
    setTasks(data)
  }, [])

  function createTask(task) {
    setTasks([...tasks, task])
  }

  return (
    <>
      <TaskForm />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App