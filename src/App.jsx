import React, { useState } from 'react'
import Heading from './components/Heading'
import CreateForm from './components/CreateForm'
import Status from './components/Status'
import ListGroup from './components/ListGroup'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   job: "Do assignment",
    //   isDone: false,
    // },
    // {
    //   id: 2,
    //   job: "Meet with client",
    //   isDone: false,
    // },
    // {
    //   id: 3,
    //   job: "Prepare for interview",
    //   isDone: false,
    // },
  ]);

  const addTask = (job) => {
    const newTasks = {
      id: Date.now(),
      job,
      isDone: false
    }
    setTasks([...tasks, newTasks])
  }

  const checkTask = (id) => {
    setTasks(tasks.map((task) => {
      if (id === task.id) {
        task.isDone = !task.isDone
      }
      return task;
    }))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const editTask = (newJob, id) => {
    setTasks(tasks.map((task) => {
      if (id === task.id) {
        task.job = newJob;
      }
      return task;
    }))
  }

  const doneAllTask = () => {
    setTasks(tasks.map((task) => ({ ...task, isDone: true })))
  }

  return (
    <div className='w-[500px] mx-auto mt-20'>
      <Heading />
      <CreateForm addTask={addTask} />
      <Status tasks={tasks} />
      <ListGroup tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} editTask={editTask} doneAllTask={doneAllTask} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  )
}

export default App