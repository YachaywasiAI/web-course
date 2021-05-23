import React from 'react'

function InputTask({task, manageTask, addTask}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e)=>{manageTask(e.target.value)}}
        className="form-control"
      />
      <button onClick={addTask} className="btn btn-primary mt-2">
        Add
      </button>
    </div>
  )
}

export default InputTask
