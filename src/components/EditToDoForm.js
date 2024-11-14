import React,{useState} from 'react'
import './toDoform.css';

const EditToDoForm = ({editTodo, task}) => {
    const [value,setValue]= useState(task.task);
    const handleSubmit = e =>{
        e.preventDefault();

        editTodo(value,task.id );
        setValue("");
    }
  return (
    <form className='inputF' onSubmit={handleSubmit}>
      <input type='text' className='irwinjizo' value={value}  placeholder='update task'
      onChange={(e)=> setValue(e.target.value)
      }/>
      <button type='submit' className='todo-btn'>update task</button>
    </form>
  )
}
export default EditToDoForm
