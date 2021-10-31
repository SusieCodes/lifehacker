//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add a note

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addNote } from "./NoteManager";
import { WelcomeBar } from "../../components/navbar/WelcomeBar";
import "./Note.css";
import "../LifeHacker.css";

export const NoteForm = () => {
  const [conflictDialog1, setConflictDialog1] = useState(false);
  const [conflictDialog2, setConflictDialog2] = useState(false);

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
    // update state
    setNote(newNote);
  };

  const handleSave = (evt) => {
    evt.preventDefault(); //Prevents the browser from submitting the form

    if (note.title === "" || note.text === "") {
      setConflictDialog1(true);
    } else if (note.title.length >= 30 || note.text.length >= 30) {
      setConflictDialog2(true);
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
            <dialog className="dialog" open={conflictDialog1}>
              <div className="dialog-forms">Please Fill In Title and Text</div>
              <button
                className="button-close"
                onClick={(e) => setConflictDialog1(false)}
              >
                Close
              </button>
            </dialog>
            <dialog className="dialog" open={conflictDialog2}>
              <div className="dialog-forms">
                Title and text must each be 30 characters or less
              </div>
              <button
                className="button-close"
                onClick={(e) => setConflictDialog2(false)}
              >
                Close
              </button>
            </dialog>

            <div className="form__group">
              <label htmlFor="name">Title:</label>
              <input
                type="text"
                id="title"
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
