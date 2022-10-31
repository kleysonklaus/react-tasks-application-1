import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { tasks as data } from "./task";

import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState([])

  useEffect((e) => {
    setTasks(data)
  }, [])

  return (
    <>
      <TaskForm />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App