//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add a note

import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { addNote } from "./NoteManager";

export const NoteForm = () => {
	// Defining initial state of the form inputs with useState()
	const [ note, setNote ] = useState({
		title: "",
		text: "",
    dayTime: Date.now(),
    userId: parseInt(sessionStorage.getItem("lifehacker_user"))
	});

	const history = useHistory();

	// When a field changes, it updates state
  // The return will re-render and display based on the values in state
  const ResetForm = () => {
    setNote({
      title: "",
      text: "",
      dayTime: Date.now(),
      userId: parseInt(sessionStorage.getItem("lifehacker_user"))
    });
    console.log("resetForm invoked")
  }

	const handleControlledInputChange = (evt) => {
		/* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
		const newNote = { ...note }
		let selectedVal = evt.target.value

		/* Sets the property to the new value
		using object bracket notation. */
		newNote[evt.target.id] = selectedVal
		// update state
		setNote(newNote)
	}
  
	const handleSave = (evt) => {
		evt.preventDefault() //Prevents the browser from submitting the form

		if ( note.title === "" || note.post === "" ) {
			window.alert("Please Fill Out All Required Info")
    } else {
			//invoke addNote, passing event as an argument
			//once completed, this changes the url and displays the event list
			addNote(note)
				.then(() => history.push("/notes"))
		}
	}

	return (
    <div className="form__flex">
      <form>
        <div className="form__title">Add New Note</div>
        <fieldset>

          <div className="form__group">
            <label htmlFor="name">Note Title:</label>
            <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form__group--edit" placeholder="Note Title" value={note.title} />

            <label htmlFor="text">Text:</label>
            <input type="text" id="text" onChange={handleControlledInputChange} required className="form__group--edit" placeholder="Enter text" value={note.text} />

          </div>
        </fieldset>

        <div className="form__btns">

          <button className="form__btn"
            onClick={handleSave}>
            Submit
          </button>

          <button className="form__btn"
            onClick={ResetForm}>
            Reset Form
          </button>

          <button className="form__btn" onClick={() => history.push("/notes")}>Cancel</button>

        </div>

      </form>
    </div>
	)
};

