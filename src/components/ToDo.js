import React from 'react'
import './todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';



const ToDo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='toDo'>
      <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed': ''}`}>{task.task}</p>
      <div>
      <FontAwesomeIcon className='pa' icon={faPen} onClick={()=>editTodo(task.id)} />
      <FontAwesomeIcon className='pa' icon={faTrash} onClick={
        ()=>deleteTodo(task.id)
      } />
      </div>
      
    </div>
  )
}

export default ToDo
