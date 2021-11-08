//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add a provider

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addProvider } from "./ListManager";
import { WelcomeBar } from "../../components/navbar/WelcomeBar";
import "./List.css";
import "../LifeHacker.css";

export const ProviderForm = () => {
  const [conflictDialog, setConflictDialog] = useState(false);

  // Defining initial state of the form inputs with useState()
  const [provider, setProvider] = useState({
    name: "",
    service: "",
    notes: "",
    stars: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const history = useHistory();

  // When a field changes, it updates state
  // The return will re-render and display based on the values in state
  const ResetForm = () => {
    setProvider({
      name: "",
      service: "",
      notes: "",
      stars: "",
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    });
  };

  const handleControlledInputChange = (evt) => {
    /* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
    const newProvider = { ...provider };
    let selectedVal = evt.target.value;

    /* Sets the property to the new value
		using object bracket notation. */
    newProvider[evt.target.id] = selectedVal;
    console.log("evt.target.id is: ", evt.target.id);
    // update state
    setProvider(newProvider);
  };

  const handleSave = (evt) => {
    evt.preventDefault(); //Prevents the browser from submitting the form

    if (
      provider.name === "" ||
      provider.service === "" ||
      provider.notes === "" ||
      provider.stars === ""
    ) {
      setConflictDialog(true);
    } else {
      addProvider(provider).then(() => history.push("/lists"));
    }
  };

  return (
    <>
      <div className="page">
        <WelcomeBar title="Add New provider" />

        <div className="form-flex">
          <fieldset className="form">
            <dialog className="dialog" open={conflictDialog}>
              <div className="dialog-forms">Please fill in all fields</div>
              <button
                className="button-close"
                onClick={(e) => setConflictDialog(false)}
              >
                Close
              </button>
            </dialog>

            <div className="form__group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                maxLength="25"
                onChange={handleControlledInputChange}
                required
                autoFocus
                className="form__group--edit"
                placeholder="Provider Name"
                value={provider?.name}
              />
            </div>

            <div className="form__group">
              <label htmlFor="text">Service: </label>
              <input
                type="text"
                id="service"
                maxLength="20"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                placeholder="e.g. HVAC, electrical"
                value={provider?.service}
              />
            </div>

            <div className="form__group">
              <label htmlFor="notes">Notes: </label>
              <input
                type="text"
                id="notes"
                maxLength="200"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                placeholder="Describe experience"
                value={provider?.notes}
              />
            </div>

            <div className="star-wrapper">
              <label for="stars">Select # of Stars: </label>
              <select
                name="stars"
                id="stars"
                className="star-options"
                onChange={handleControlledInputChange}
                value={provider?.stars}
              >
                <option value="" selected="selected"></option>
                <option value="★">★</option>
                <option value="★★">★★</option>
                <option value="★★★">★★★</option>
                <option value="★★★★">★★★★</option>
                <option value="★★★★★">★★★★★</option>
              </select>
            </div>
          </fieldset>

          <div className="form-btns">
            <button className="form-btn" onClick={handleSave}>
              Submit
            </button>

            <button className="form-btn" onClick={ResetForm}>
              Reset Form
            </button>

            <button className="form-btn" onClick={() => history.push("/lists")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
