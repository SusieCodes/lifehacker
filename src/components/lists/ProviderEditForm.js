//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing provider

import React, { useState, useEffect } from "react";
import { updateProvider, getProviderById } from "./ListManager";
import { useParams, useHistory } from "react-router-dom";
import { WelcomeBar } from "../navbar/WelcomeBar";
import "./List.css";
import "../LifeHacker.css";

export const ProviderEditForm = () => {
  // Defining initial state of the form inputs with useState()
  const [provider, setProvider] = useState({
    name: "",
    service: "",
    notes: "",
    stars: "",
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
      name: provider?.name,
      service: provider?.service,
      notes: provider?.notes,
      stars: provider?.stars,
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    };

    if (
      provider.name === "" ||
      provider.service === "" ||
      provider.notes === "" ||
      provider.stars === ""
    ) {
      setConflictDialog(true);
    } else {
      updateProvider(editedProvider).then(() => history.push("/lists"));
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
              <label htmlFor="name">Name: </label>{" "}
              <input
                type="text"
                id="name"
                maxLength="25"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={provider?.name}
              />
            </div>

            <div className="form__group">
              <label htmlFor="service">Service: </label>
              <input
                type="text"
                id="service"
                maxLength="20"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={provider?.service}
              />
            </div>
            <div className="form__group">
              <label htmlFor="notes">Notes: </label>
              <input
                type="text"
                id="notes"
                maxLength="200"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={provider?.notes}
              />
            </div>
            <div className="star-wrapper">
              <label for="stars">Select # of Stars: </label>
              <select
                name="stars"
                id="stars"
                required
                className="star-options"
                onChange={handleFieldChange}
                value={provider?.stars}
              >
                <option value=""></option>
                <option value="★">★</option>
                <option value="★★">★★</option>
                <option value="★★★">★★★</option>
                <option value="★★★★">★★★★</option>
                <option value="★★★★★">★★★★★</option>
              </select>
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
