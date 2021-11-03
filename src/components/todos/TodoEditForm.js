// Author: Susie Stanley
// Purpose: Displays form to edit existing To-Do

import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { getTodoById, update } from "./TodoManager";
import { WelcomeBar } from "../navbar/WelcomeBar";
import "./Todo.css";
import "../LifeHacker.css";

export const TodoEditForm = () => {
  const [todo, setTodo] = useState({
    title: "",
    byWhen: "",
    isCompleted: false,
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const [conflictDialog, setConflictDialog] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { todoId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...todo };
    stateToChange[evt.target.id] = evt.target.value;
    setTodo(stateToChange);
  };
  const updateExistingTodo = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedTodo = {
      id: todoId,
      title: todo.title,
      byWhen: todo.byWhen,
      isCompleted: todo.isCompleted,
      userId: todo.userId,
    };

    if (todo.title === "" || todo.byWhen === "") {
      setConflictDialog(true);
      setIsLoading(false);
    } else {
      update(editedTodo).then(() => history.push("/todos"));
    }
  };

  useEffect(() => {
    getTodoById(todoId).then((todo) => {
      setTodo(todo);
      setIsLoading(false);
    });
  }, [todoId]);

  return (
    <>
      <div className="page">
        <WelcomeBar title="Add New Note" />

        <div className="form-flex">
          <fieldset className="form">
            <dialog className="dialog" open={conflictDialog}>
              <div className="dialog-forms">
                Please Fill In A Title and Choose A Date
              </div>
              <button
                className="button-close"
                onClick={(e) => setConflictDialog(false)}
              >
                Close
              </button>
            </dialog>
            <div className="form__group">
              <label htmlFor="title">To-Do</label>
              <input
                type="text"
                id="title"
                maxLength="22"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={todo.title}
              />
            </div>
            <div className="form__group">
              <label htmlFor="byWhen">By When</label>
              <input
                type="date"
                id="byWhen"
                maxLength="22"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={todo.byWhen}
              />
            </div>
          </fieldset>

          <div className="form-btns">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingTodo}
              className="form-btn"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={() => history.push(`/todos`)}
              className="form-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
