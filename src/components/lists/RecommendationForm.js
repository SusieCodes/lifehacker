//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add a recommendation

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addRecommendation, getReclist } from "./ListManager";
import Select from "react-select";
import { WelcomeBar2 } from "../../components/navbar/WelcomeBar2";
import "./List.css";
import "../LifeHacker.css";

export const RecommendationForm = () => {
  const [conflictDialog, setConflictDialog] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [recset, setRecset] = useState([]);

  // Defining initial state of the form inputs with useState()
  const [recommendation, setRecommendation] = useState({
    name: "",
    reclistId: "",
    from: "",
    notes: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const history = useHistory();

  // When a field changes, it updates state
  // The return will re-render and display based on the values in state
  const ResetForm = () => {
    setSelectedValue(null);
    setRecommendation({
      name: "",
      reclistId: "",
      from: "",
      notes: "",
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    });
  };

  const handleChange = (evt) => {
    setSelectedValue(evt);
    console.log("evt inside handlechange is ", evt);
    /* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
    const newRecommendation = { ...recommendation };
    let selectedVal = evt.id;
    console.log("selectedVal is inside handleChange", selectedVal);

    /* Sets the property to the new value
		using object bracket notation. */
    newRecommendation[evt.saveTo] = selectedVal;

    // update state
    setRecommendation(newRecommendation);
  };

  const handleFieldChange = (evt) => {
    /* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
    const newRecommendation = { ...recommendation };
    let selectedVal = evt.target.value;

    /* Sets the property to the new value
		using object bracket notation. */
    newRecommendation[evt.target.id] = selectedVal;
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

  useEffect(() => {
    getReclist().then((allRecs) => {
      setRecset(allRecs);
    });
  }, []);

  return (
    <>
      <div className="page">
        <WelcomeBar2 title="Add New Recommendation" />

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
                onChange={handleFieldChange}
                required
                autoFocus
                className="form__group--edit"
                placeholder="Recommendation"
                value={recommendation?.name}
              />
            </div>

            <div className="dropdown-flex">
              <div className="rec-selection">Select Type: </div>
              <Select
                onChange={handleChange}
                id="reclist"
                value={selectedValue}
                options={recset}
                width="300px"
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 5,
                  border: 3,
                  colors: {
                    ...theme.colors,
                    primary25: "#c8e6ea68",
                    primary: "#c8e6ea",
                    background: "#c8e6ea68",
                    color: "#c8e6ea68",
                  },
                })}
              />
            </div>

            <div className="form__group">
              <label htmlFor="from">From: </label>
              <input
                type="text"
                id="from"
                maxLength="20"
                onChange={handleFieldChange}
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
                onChange={handleFieldChange}
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
