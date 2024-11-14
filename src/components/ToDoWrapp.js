import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm';
import './wrapper.css';
import { v4 as uuidv4 } from 'uuid';

const ToDoWrapp = () => {
    // Step 1: Initialize state from localStorage
    const [todos, setTodos] = useState(() => {cd 
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    // Step 2: Save todos to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addToDo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    };

    //toggle complete func--completed task has line through decolation
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    //
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo));
    };

    return (
        <div className='todoWrapper'>
            <h1>Go and Get it, Bro!!!</h1>
            <ToDoForm addToDo={addToDo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditToDoForm editTodo={editTask} task={todo} key={index} />
                ) : (
                    <ToDo
                        task={todo}
                        key={index}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            ))}
        </div>
    );
};

export default ToDoWrapp;
