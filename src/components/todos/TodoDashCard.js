// Author: Susie Stanley
// Purpose: Displays list of To-Do items by user

import React from "react";
import { formatStringDate } from "../helper";
import "../LifeHacker.css";
import "../dashboard/Dashboard.css";

export const TodoDashCard = ({ todo, handleCompleteTodo }) => {
  const today = Date.now();
  let byWhen = Date.parse(todo.byWhen);
  byWhen = byWhen + 43200000;
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
            <div className="dash-todo__title">{todo.title}</div>

            {byWhenCheck ? (
              <div className="dash-todo__bywhen">
                {" "}
                By When: &nbsp;&nbsp;{formatStringDate(todo.byWhen)}
              </div>
            ) : (
              <div className="dash-todo__bywhen__red">
                {" "}
                By When: &nbsp;&nbsp;{formatStringDate(todo.byWhen)}
              </div>
            )}
          </div>

          <div className="dash-todo__col2">
            <div className="todo-complete">
              <input
                type="checkbox"
                className="checkbox-todo"
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
