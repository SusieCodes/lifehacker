//Author: Susie Stanley
//Purpose: Creates and displays form for user to create a journal entry

import React, { useState } from "react";
import { useHistory } from "react-router";
import { addJournal } from "./JournalManager";
import { WelcomeBar2 } from "../../components/navbar/WelcomeBar2";
import "./Journal.css";
import "../LifeHacker.css";

export const JournalForm = () => {
  const [conflictDialog, setConflictDialog] = useState(false);

  const [journal, setJournal] = useState({
    title: "",
    post: "",
    dayTime: Date.now(),
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const history = useHistory();

  const ResetForm = () => {
    setJournal({
      title: "",
      post: "",
      dayTime: Date.now(),
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    });
  };

  const handleControlledInputChange = (event) => {
    const newJournal = { ...journal };
    let selectedVal = event.target.value;
    // selectedVal = parseInt(selectedVal)
    newJournal[event.target.id] = selectedVal;
    setJournal(newJournal);
  };

  const handleSave = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    if (journal.title === "" || journal.post === "") {
      setConflictDialog(true);
    } else {
      addJournal(journal).then(() => history.push("/journals"));
    }
  };

  return (
    <>
      <div className="page">
        <WelcomeBar2 title="Add New Journal Entry" />

        <div className="form-flex">
          <fieldset className="form">
            <dialog className="dialog" open={conflictDialog}>
              <div className="dialog-forms">Please Fill In Title And Post</div>
              <button
                className="button-close"
                onClick={(e) => setConflictDialog(false)}
              >
                Close
              </button>
            </dialog>
            <div className="form__group">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                id="title"
                onChange={handleControlledInputChange}
                required
                autoFocus
                maxLength="60"
                className="form__group--edit"
                placeholder="Feeling awesome..."
                value={journal.title}
              />
            </div>

            <div className="form__group">
              <label htmlFor="post">Entry: </label>
              <input
                type="text"
                id="post"
                maxLength="600"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                placeholder="Today I went to the..."
                value={journal.post}
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
                history.push("/journals");
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
