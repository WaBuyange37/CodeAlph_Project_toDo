import React, {useState} from 'react';
import './toDoform.css';

const ToDoForm = ({addToDo}) => {
    const [value,setValue]= useState("");
    const handleSubmit = e =>{
        e.preventDefault();

        addToDo(value);
        setValue("");
    }
   
  return (
    <form className='inputF' onSubmit={handleSubmit}>
      <input type='text' className='irwinjizo' value={value}  placeholder='what task now?'
      onChange={(e)=> setValue(e.target.value)
      }/>
      <button type='submit' className='todo-btn'>Add task</button>
    </form>
  )
}

export default ToDoForm
