// Author: Susie Stanley
// Purpose: Displays list of To-Do items by user


import React from "react";
import { Link } from "react-router-dom";
// import {FaEdit, FaTrash } from "react-icons/fa"


export const TodoCard = ({ todo, handleDeleteTodo, handleCompleteTodo }) => {

    if (todo.userId === parseInt(sessionStorage.getItem("lifehacker_user"))) {
        return (
            <>
                <div className="card__content--todo">

                    <div className="todo__info">

                            <label className="todo__section">
                                <div className="todo__title"><strong>{todo.title}</strong></div>
                                <div><strong>By When: </strong> {todo.byWhen}</div>
                            </label>

                    </div>

                    <div className="todo__btns">
                        <div className="todo__complete">
                        <input type="checkbox" className="checkbox" onClick={() => handleCompleteTodo(todo.id)} />
                        <label>Complete </label>
                        </div>

                        <div className="todo__edit__btns">
                        <Link to={`/todos/${todo?.id}/edit`}><button className="button sm">edit icon</button></Link>

                        <button type="button" className="button sm" onClick={() => handleDeleteTodo(todo?.id)}>delete icon</button>
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
