//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add a note

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addNote } from "./NoteManager";
import { WelcomeBar } from "../../components/navbar/WelcomeBar";
import "./Note.css";
import "../LifeHacker.css";

export const NoteForm = () => {
  const [conflictDialog, setConflictDialog] = useState(false);

  // Defining initial state of the form inputs with useState()
  const [note, setNote] = useState({
    title: "",
    text: "",
    dayTime: Date.now(),
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const history = useHistory();

  // When a field changes, it updates state
  // The return will re-render and display based on the values in state
  const ResetForm = () => {
    setNote({
      title: "",
      text: "",
      dayTime: Date.now(),
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    });
  };

  const handleControlledInputChange = (evt) => {
    /* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
    const newNote = { ...note };
    let selectedVal = evt.target.value;

    /* Sets the property to the new value
		using object bracket notation. */
    newNote[evt.target.id] = selectedVal;
    console.log("evt.target.id is: ", evt.target.id);
    // update state
    setNote(newNote);
  };

  const handleSave = (evt) => {
    evt.preventDefault(); //Prevents the browser from submitting the form

    if (note.title === "" || note.text === "") {
      setConflictDialog(true);
    } else {
      addNote(note).then(() => history.push("/notes"));
    }
  };

  return (
    <>
      <div className="page">
        <WelcomeBar title="Add New Note" />

        <div className="form-flex">
          <fieldset className="form">
            <dialog className="dialog" open={conflictDialog}>
              <div className="dialog-forms">Please fill in title and text</div>
              <button
                className="button-close"
                onClick={(e) => setConflictDialog(false)}
              >
                Close
              </button>
            </dialog>

            <div className="form__group">
              <label htmlFor="name">Title:</label>
              <input
                type="text"
                id="title"
                maxLength="29"
                onChange={handleControlledInputChange}
                required
                autoFocus
                className="form__group--edit"
                placeholder="Note Title"
                value={note.title}
              />
            </div>

            <div className="form__group">
              <label htmlFor="text">Text:</label>
              <input
                type="text"
                id="text"
                maxLength="29"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                placeholder="Enter text"
                value={note.text}
              />
            </div>
          </fieldset>

          <div className="form-btns">
            <button className="form-btn" onClick={handleSave}>
              Submit
            </button>

            <button className="form-btn" onClick={ResetForm}>
              Reset Form
            </button>

            <button className="form-btn" onClick={() => history.push("/notes")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
