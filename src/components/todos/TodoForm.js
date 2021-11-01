// Author: Susie Stanley
// Purpose: Creates and displays an input form for user to add a connection

import React, { useState } from "react";
import { useHistory } from "react-router";
import { addTodo } from "./TodoManager";
import { WelcomeBar } from "../navbar/WelcomeBar";
import "./Todo.css";
import "../LifeHacker.css";

export const TodoForm = () => {
  const [conflictDialog, setConflictDialog] = useState(false);

  const [todo, setTodo] = useState({
    title: "",
    byWhen: "",
    isCompleted: false,
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const history = useHistory();

  const ResetForm = () => {
    setTodo({
      title: "",
      byWhen: "",
      isCompleted: false,
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    });
  };

  const handleControlledInputChange = (event) => {
    const newTodo = { ...todo };
    let selectedVal = event.target.value;
    // selectedVal = parseInt(selectedVal)

    newTodo[event.target.id] = selectedVal;
    setTodo(newTodo);
  };

  const handleSave = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form
    if (todo.title === "" || todo.byWhen === "") {
      setConflictDialog(true);
    } else {
      addTodo(todo).then(() => history.push("/todos"));
    }
  };

  return (
    <>
      <div className="page">
        <WelcomeBar title="Add New To Do" />

        <div className="form-flex">
          <fieldset className="todo-form">
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
              <label htmlFor="title">To-Do List Item: </label>
              <input
                type="text"
                id="title"
                maxLength="22"
                onChange={handleControlledInputChange}
                required
                autoFocus
                className="form__group--edit"
                placeholder="Do Laundry etc"
                value={todo.title}
              />
            </div>

            <div className="form__group">
              <label htmlFor="byWhen">Select 'By When': </label>
              <input
                type="date"
                id="byWhen"
                maxLength="22"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                value={todo.byWhen}
              />
            </div>
          </fieldset>

          <div className="form-btns">
            <button type="button" className="form-btn" onClick={handleSave}>
              Submit
            </button>

            <button type="button" className="form-btn" onClick={ResetForm}>
              Reset Form
            </button>

            <button
              type="button"
              className="form-btn"
              onClick={() => {
                history.push("/todos");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
