// Author: Susie Stanley
// Purpose: Displays list of To-Do items by user


import React from "react";
import { Link } from "react-router-dom";
// import {FaEdit, FaTrash } from "react-icons/fa"


export const TodoDashCard = ({ todo }) => {

    if (todo.userId === parseInt(sessionStorage.getItem("lifehacker_user"))) {
        return (
            <>
                <div className="dash-todo">

                  <div className="dash-todo__title"><strong>{todo.title}</strong></div>
                  <div className="dash-todo__bywhen"><strong>By When: </strong> {todo.byWhen}</div>

                </div>
            </>
        )
    } else {
        return (
            null
        )
    }
}
