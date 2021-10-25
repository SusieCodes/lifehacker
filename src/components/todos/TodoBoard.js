//Author: Susie Stanley
//Purpose: Outputs A List Of To-Do List Items to the DOM

import React, { useEffect, useState } from "react";
import { TodoCard } from "./TodoCard";
import { completeTodo, deleteTodo, getAllTodosByUserId } from "./TodoManager";
import { Link } from 'react-router-dom';

export const TodoBoard = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = () => {
        return getAllTodosByUserId(sessionStorage.getItem("lifehacker_user")).then(todosFromAPI => {
            setTodos(todosFromAPI)
        });
    };

    const handleDelete = (id) => {
        deleteTodo(id)
            .then(() => getAllTodosByUserId(sessionStorage.getItem("lifehacker_user")).then(setTodos));
    };

    const handleCompleteTodo = (id) => {
        completeTodo(id)
            .then(() => getAllTodosByUserId(sessionStorage.getItem("lifehacker_user")).then(setTodos));
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="section-flex"> 
            
            <div className="section-flex__content">
                <Link to={`todos/create`}>
                <button className="add__todo">+ Add To-Do</button></Link>
            </div>

            <div className="todo-container">

                {/* ternary statement to show only uncompleted todos */}
                {todos.map(todo => todo.isCompleted ? 
                    console.log('true') 
                    : <TodoCard 
                        key={todo.id} 
                        todo={todo} 
                        handleDelete={handleDelete} 
                        handleCompleteTodo={handleCompleteTodo} 
                      />)}

            </div>

        </div>
    )
}