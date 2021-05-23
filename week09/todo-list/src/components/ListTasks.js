import React from 'react'

function ListTasks({tasks, deleteTask}) {
  return (

    <ul className="list-group mt-4">
      {tasks.map((item, indice) => (
        <li className="list-group-item" key={indice}>
          {item}
          <button
            onClick={() => {deleteTask(indice)}}
            className="btn btn-danger btn-sm ms-2"
          >X</button>
        </li>
      ))}
    </ul>
  )
}

export default ListTasks
