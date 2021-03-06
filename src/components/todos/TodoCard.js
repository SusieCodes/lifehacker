// Author: Susie Stanley
// Purpose: Displays list of To-Do items by user

import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { formatStringDate } from "../helper";
import "./Todo.css";
import "../LifeHacker.css";

export const TodoCard = ({ todo, handleDelete, handleCompleteTodo }) => {
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
        <div className="todo-card">
          <div className="todo-info">
            <div className="todo-section">
              <div className="todo-title">{todo.title}</div>
              {byWhenCheck ? (
                <div className="todo-bywhen">
                  {" "}
                  &nbsp;By When: &nbsp;{formatStringDate(todo.byWhen)}
                </div>
              ) : (
                <div className="todo-bywhen__red">
                  {" "}
                  &nbsp;By When: &nbsp;{formatStringDate(todo.byWhen)}
                </div>
              )}
            </div>
          </div>

          <div className="todo-complete">
            <input
              type="checkbox"
              className="checkbox-todoboard"
              onClick={() => handleCompleteTodo(todo?.id)}
            />
            <label>Complete </label>
          </div>

          <div className="todo-icons">
            <Link to={`/todos/${todo?.id}/edit`} className="todo-edit">
              <FaEdit className="todo-edit-icon" />
            </Link>

            <div className="todo-delete" onClick={() => handleDelete(todo?.id)}>
              <FaTrash className="todo-delete-icon" />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};
