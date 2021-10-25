//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing note


import React, { useState, useEffect } from "react"
import { update, getNoteById } from "./NoteManager"
import { useParams, useHistory } from "react-router-dom"
import { formatDate } from "../helper"
import "./Note.css"
import "../LifeHacker.css"

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

    <div className="page">

        <div className="page-title__flex">

        <div className="page-title__left">Welcome <span className="welcome-name">{sessionStorage.getItem("lifehacker_username")}</span></div>

        <div className="page-title__headline">Edit Note</div>

        <div className="page-title__right">Today: &nbsp;&nbsp;<span className="todays-date">{formatDate(Date.now())}</span></div>

        </div>

        <div className="form-flex">

            <fieldset className="form">

              <div className="form__group">
                  <label htmlFor="name">Title:</label>
                  <input
                    type="text"
                    required
                    className="form__group--edit"
                    onChange={handleFieldChange}
                    id="title"
                    value={note.title}
                  />
                </div>

                <div className="form__group">
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

            <div className="form-btns">
                
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingNote}
                  className="form-btn">Submit
                  </button>

                <button
                  type="button"
                  onClick={() => history.push(`/notes`)}
                  className="form-btn">Cancel
                  </button>

            </div>

        </div>

    </div>

</>
  );
}