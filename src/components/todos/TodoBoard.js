//Author: Susie Stanley
//Purpose: Output List of To-Do List items to the DOM

import React, { useEffect, useState } from "react";
import { TodoCard } from "./TodoCard";
import { completeTodo, deleteTodo, getAllTodos } from "./TodoManager";
import { Link } from 'react-router-dom';

export const TodoBoard = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = () => {
        return getAllTodos().then(todosFromAPI => {
            setTodos(todosFromAPI)
        });
    };

    const handleDeleteTodo = id => {
        deleteTodo(id)
            .then(() => getAllTodos().then(setTodos));
    };

    const handleCompleteTodo = id => {
        completeTodo(id)
            .then(() => getAllTodos().then(setTodos));
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="section-todos">

            <div className="section-todos__header">
            To-Do List
            </div> 
            
            <div className="section__content">
                <Link to={`todos/create`}>
                <button className="add__todo">+ Add To-Do</button></Link>
            </div>

            <div className="container">

                {/* ternary statement to show only uncompleted todos */}
                {todos.map(todo => todo.isCompleted ? 
                    console.log('true') 
                    : <TodoCard 
                        key={todo.id} todo={todo} 
                        handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />)}

            </div>

        </div>
    )
}