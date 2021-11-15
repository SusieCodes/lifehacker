//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing note

import React, { useState, useEffect } from "react";
import { update, getNoteById } from "./NoteManager";
import { useParams, useHistory } from "react-router-dom";
import { WelcomeBar2 } from "../navbar/WelcomeBar2";
import "./Note.css";
import "../LifeHacker.css";

export const NoteEditForm = () => {
  const [note, setNote] = useState({
    title: "",
    text: "",
    isFave: "",
    dayTime: Date.now(),
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [conflictDialog, setConflictDialog] = useState(false);

  const { noteId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...note };
    stateToChange[evt.target.id] = evt.target.value;
    setNote(stateToChange);
  };

  const updateExistingNote = (evt) => {
    evt.preventDefault();

    // This is an edit, so we need the id
    const editedNote = {
      id: noteId,
      title: note.title,
      text: note.text,
      isFave: note.isFave,

      dayTime: Date.now(),
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    };

    if (note.title === "" || note.text === "") {
      setConflictDialog(true);
      setIsLoading(false);
    } else {
      update(editedNote).then(() => history.push("/notes"));
    }
  };

  useEffect(() => {
    getNoteById(noteId).then((note) => {
      setNote(note);
      setIsLoading(false);
    });
  }, [noteId]);

  return (
    <>
      <div className="page">
        <WelcomeBar2 title="Edit Note" />

        <div className="form-flex">
          <fieldset className="form">
            <dialog className="dialog" open={conflictDialog}>
              <div className="dialog-forms">
                Please make sure title or text is not empty
              </div>
              <button
                className="button-close"
                onClick={(e) => setConflictDialog(false)}
              >
                Close
              </button>
            </dialog>
            <div className="form__group">
              <label htmlFor="name">Title: </label>
              <input
                type="text"
                id="title"
                maxLength="29"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={note.title}
              />
            </div>

            <div className="form__group">
              <label htmlFor="text">Text: </label>
              <input
                type="text"
                id="text"
                maxLength="29"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={note.text}
              />
            </div>
          </fieldset>

          <div className="form-btns">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingNote}
              className="form-btn"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={() => history.push(`/notes`)}
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
