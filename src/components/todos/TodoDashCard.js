// Author: Susie Stanley
// Purpose: Displays list of To-Do items by user

import React from "react";
import { formatDate } from "../helper";
// import { FaTrash } from "react-icons/fa"


export const TodoDashCard = ({ todo, handleCompleteTodo }) => {

    if (todo.userId === parseInt(sessionStorage.getItem("lifehacker_user"))) {
        return (
            <>
                <div className="dash-todo">

                  <div className="dash-todo__col1">
                    <div className="dash-todo__title"><strong>{todo.title}</strong></div>
                    <div className="dash-todo__bywhen"><strong>By When: </strong> {formatDate(todo.byWhen)}</div>
                  </div>

                  <div className="dash-todo__col2">
                    <div className="todo__complete">
                    <input type="checkbox" className="checkbox" onClick={() => handleCompleteTodo(todo.id)} />
                    <label>Complete </label>
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
