//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing note


import React, { useState, useEffect } from "react"
import { update, getNoteById } from "./NoteManager"
import { useParams, useHistory } from "react-router-dom"


export const NoteEditForm = () => {
  const [note, setNote] = useState(
    { 
      title: "",
      text: "",
      dayTime: Date.now(),
      userId: parseInt(sessionStorage.getItem("lifehacker_user"))
    });
    
  const [isLoading, setIsLoading] = useState(false);

  const {noteId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...note };
    stateToChange[evt.target.id] = evt.target.value;
    setNote(stateToChange);
  };

  const updateExistingNote = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedNote = {
      id: noteId,
      title: "",
      text: "",
      dayTime: Date.now(),
      userId: parseInt(sessionStorage.getItem("lifehacker_user"))
    };

  update(editedNote)
    .then(() => history.push("/notes")
    )
  }

  useEffect(() => {
    getNoteById(noteId)
      .then(note => {
        setNote(note);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
    <div className="form__flex">

        <form>

          <div className="form__title">Edit Note
          </div>

          <fieldset>

            <div className="form__group">

              <label htmlFor="name">Note Title:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="title"
                value={note.title}
              />

              <label htmlFor="text">Text</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="text"
                value={note.text}
              />

            </div>

          </fieldset>

          <div className="form__btns">
              
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingNote}
                className="form__btn">Submit
                </button>

              <button
                type="button"
                onClick={() => history.push(`/notes`)}
                className="form__btn">Cancel
                </button>

          </div>

        </form>

      </div>
    </>
  );
}