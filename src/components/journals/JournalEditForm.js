//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing journal entry

import React, { useState, useEffect } from "react";
import { update, getJournalById } from "./JournalManager";
import { useParams, useHistory } from "react-router-dom";
import { WelcomeBar } from "../../components/navbar/WelcomeBar";
import "./Journal.css";
import "../LifeHacker.css";

export const JournalEditForm = () => {
  const [journal, setJournal] = useState({
    title: "",
    post: "",
    dayTime: Date.now(),
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const [conflictDialog, setConflictDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { journalId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...journal };
    stateToChange[evt.target.id] = evt.target.value;
    setJournal(stateToChange);
  };

  const updateExistingJournal = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedJournal = {
      title: journal.title,
      post: journal.post,
      dayTime: Date.now(),
      userId: journal.userId,
      id: journalId,
    };

    if (journal.title === "" || journal.post === "") {
      setConflictDialog(true);
      setIsLoading(false);
    } else {
      update(editedJournal).then(() => history.push("/journals"));
    }
  };

  useEffect(() => {
    getJournalById(journalId).then((journal) => {
      setJournal(journal);
      setIsLoading(false);
    });
  }, [journalId]);

  return (
    <div className="page">
      <WelcomeBar title="Edit Journal Entry" />

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
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              required
              maxLength="60"
              className="form__group--edit"
              onChange={handleFieldChange}
              id="title"
              value={journal.title}
            />
          </div>
          <div className="form__group">
            <label htmlFor="post">Post:</label>
            <input
              type="text"
              required
              maxLength="600"
              className="form__group--edit"
              onChange={handleFieldChange}
              id="post"
              value={journal.post}
            />
          </div>
        </fieldset>

        <div className="form-btns">
          <button
            type="button"
            disabled={isLoading}
            onClick={updateExistingJournal}
            className="form-btn"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={() => history.push(`/journals`)}
            className="form-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
