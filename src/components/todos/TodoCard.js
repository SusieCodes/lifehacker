// Author: Susie Stanley
// Purpose: Displays list of To-Do items by user


import React from "react";
import { Link } from "react-router-dom";
import {FaEdit, FaTrash } from "react-icons/fa"


export const TodoCard = ({ todo, handleDelete, handleCompleteTodo }) => {

    if (todo.userId === parseInt(sessionStorage.getItem("lifehacker_user"))) {
        return (
            <>
                <div className="todo-card">

                    <div className="todo-info">

                            <label className="todo-section">
                                <div className="todo-title"><strong>{todo.title}</strong></div>
                                <div><strong>By When: </strong> {todo.byWhen}</div>
                            </label>

                    </div>

                    <div className="todo-complete">
                        <input 
                            type="checkbox" 
                            className="checkbox" 
                            onClick={() => handleCompleteTodo(todo.id)} />
                        <label>Complete </label>
                    </div>

                    {/* <div className="form-btns">

                        <Link to={`/todos/${todo?.id}/edit`}>
                            <button 
                            className="form-btn__sm">
                                Edit
                            </button>
                        </Link>

                        <button 
                            type="button" 
                            className="form-btn_sm" 
                            onClick={() => handleDelete(todo?.id)}>
                                Delete
                        </button>

                    </div> */}

                    <div className="todo-icons">

                    <Link to={`/todos/${todo?.id}/edit`} className="todo-edit">
                        <FaEdit className="todo-edit-icon"/>
                    </Link>

                    <div className="todo-delete" onClick={() => handleDelete(todo?.id)}>
                        <FaTrash className="todo-delete-icon"/>
                    </div>

                    </div>

                </div>
            </>
        )
    } else {
        return (
            null
        )
    }
}
