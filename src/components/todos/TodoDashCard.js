// Author: Susie Stanley
// Purpose: Displays list of To-Do items by user

import React from "react";
import { formatDate } from "../helper";
import "../LifeHacker.css";
import "../dashboard/Dashboard.css";

export const TodoDashCard = ({ todo, handleCompleteTodo }) => {
  const today = Date.now();
  const byWhen = Date.parse(todo.byWhen);
  let byWhenCheck = true;

  if (byWhen < today) {
    byWhenCheck = false;
  } else {
    byWhenCheck = true;
  }

  if (todo.userId === parseInt(sessionStorage.getItem("lifehacker_user"))) {
    return (
      <>
        <div className="dash-todo">
          <div className="dash-todo__col1">
            <div className="dash-todo__title">
              <strong>{todo.title}</strong>
            </div>

            {byWhenCheck ? (
              <div className="dash-todo__bywhen">
                {" "}
                <strong>By When: </strong> {formatDate(todo.byWhen)}
              </div>
            ) : (
              <div className="dash-todo__bywhen__red">
                {" "}
                <strong>By When:</strong> {formatDate(todo.byWhen)}
              </div>
            )}
          </div>

          <div className="dash-todo__col2">
            <div className="todo-complete">
              <input
                type="checkbox"
                className="checkbox"
                onClick={() => handleCompleteTodo(todo.id)}
              />
              <label>Completed</label>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};
