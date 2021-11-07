//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing provider

import React, { useState, useEffect } from "react";
import { update, getProviderById } from "./ListManager";
import { useParams, useHistory } from "react-router-dom";
import { WelcomeBar } from "../navbar/WelcomeBar";
import "./List.css";
import "../LifeHacker.css";

export const ProviderEditForm = () => {
  const [provider, setProvider] = useState({
    title: "",
    text: "",
    dayTime: Date.now(),
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [conflictDialog, setConflictDialog] = useState(false);

  const { providerId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...provider };
    stateToChange[evt.target.id] = evt.target.value;
    setProvider(stateToChange);
  };

  const updateExistingProvider = (evt) => {
    evt.preventDefault();

    // This is an edit, so we need the id
    const editedProvider = {
      id: providerId,
      title: provider?.title,
      text: provider?.text,
      dayTime: Date.now(),
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    };

    if (provider?.title === "" || provider?.text === "") {
      setConflictDialog(true);
      setIsLoading(false);
    } else {
      update(editedProvider).then(() => history.push("/Providers"));
    }
  };

  useEffect(() => {
    getProviderById(providerId).then((provider) => {
      setProvider(provider);
      setIsLoading(false);
    });
  }, [providerId]);

  return (
    <>
      <div className="page">
        <WelcomeBar title="Edit Provider" />

        <div className="form-flex">
          <fieldset className="form">
            <dialog className="dialog" open={conflictDialog}>
              <div className="dialog-forms">
                Please make sure all fields are filled
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
                value={provider?.title}
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
                value={provider?.text}
              />
            </div>
          </fieldset>

          <div className="form-btns">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingProvider}
              className="form-btn"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={() => history.push(`/lists`)}
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
