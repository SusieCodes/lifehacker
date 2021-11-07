//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add a recommendation

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addRecommendation } from "./ListManager";
import { WelcomeBar } from "../../components/navbar/WelcomeBar";
import "./List.css";
import "../LifeHacker.css";

export const WishlistForm = () => {
  const [conflictDialog, setConflictDialog] = useState(false);

  // Defining initial state of the form inputs with useState()
  const [recommendation, setRecommendation] = useState({
    name: "",
    type: "",
    from: "",
    notes: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const history = useHistory();

  // When a field changes, it updates state
  // The return will re-render and display based on the values in state
  const ResetForm = () => {
    setRecommendation({
      name: "",
      type: "",
      from: "",
      notes: "",
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    });
  };

  const handleControlledInputChange = (evt) => {
    /* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
    const newRecommendation = { ...recommendation };
    let selectedVal = evt.target.value;

    /* Sets the property to the new value
		using object bracket notation. */
    newRecommendation[evt.target.id] = selectedVal;
    console.log("evt.target.id is: ", evt.target.id);
    // update state
    setRecommendation(newRecommendation);
  };

  const handleSave = (evt) => {
    evt.preventDefault(); //Prevents the browser from submitting the form

    if (
      recommendation.name === "" ||
      recommendation.type === "" ||
      recommendation.from === "" ||
      recommendation.notes === ""
    ) {
      setConflictDialog(true);
    } else {
      addRecommendation(recommendation).then(() => history.push("/lists"));
    }
  };

  return (
    <>
      <div className="page">
        <WelcomeBar title="Add New Recommendation" />

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
                placeholder="Recommendation"
                value={recommendation?.name}
              />
            </div>

            <div className="form__group">
              <label htmlFor="text">Type: </label>
              <input
                type="text"
                id="type"
                maxLength="15"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                placeholder="Book, music..."
                value={recommendation?.type}
              />
            </div>

            <div className="form__group">
              <label htmlFor="from">From: </label>
              <input
                type="text"
                id="from"
                maxLength="20"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                placeholder="Who suggested?"
                value={recommendation?.from}
              />
            </div>

            <div className="form__group">
              <label htmlFor="notes">Notes: </label>
              <input
                type="text"
                id="notes"
                maxLength="100"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                placeholder="More Info"
                value={recommendation?.notes}
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

            <button className="form-btn" onClick={() => history.push("/lists")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
