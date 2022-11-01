import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { tasks as data } from "./data/task";

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
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  )
}

export default App