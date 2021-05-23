/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, {useState, useEffect} from 'react'
import InputTask from './components/InputTask'
import ListTasks from './components/ListTasks'

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")

  const addTask = () => {
    setTasks([...tasks, task])
  }

  const manageTask = (task) => {
    setTask(task)
  }

  const deleteTask = (indice) => {
    tasks.splice(indice, 1)
    setTasks([...tasks])
  }

  useEffect(() => {
    setTask('')
  }, [tasks])

  return (
    <div className="container">
      <h1>TODO - LIST</h1>
      Task: {task}
      <InputTask
        task={task}
        manageTask={manageTask}
        addTask={addTask}
      />
      <ListTasks tasks={tasks} deleteTask={deleteTask}></ListTasks>
    </div>

  );
}

export default App