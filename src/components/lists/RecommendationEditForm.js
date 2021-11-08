//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing recommendation

import React, { useState, useEffect } from "react";
import {
  updateRecommendation,
  getRecommendationById,
  getReclist,
} from "./ListManager";
import Select from "react-select";
import { useParams, useHistory } from "react-router-dom";
import { WelcomeBar } from "../navbar/WelcomeBar";
import "./List.css";
import "../LifeHacker.css";

export const RecommendationEditForm = () => {
  const [recommendation, setRecommendation] = useState({
    name: "",
    reclistId: "",
    from: "",
    notes: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [conflictDialog, setConflictDialog] = useState(false);
  const [recset, setRecset] = useState([]);

  const { recommendationId } = useParams();
  const history = useHistory();

  const handleChange = (evt) => {
    console.log("evt inside handleChange is ", evt);
    /* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
    const newRecommendation = { ...recommendation };
    let selectedVal = evt;
    console.log("selectedVal inside handleChange is ", selectedVal);

    /* Sets the property to the new value
		using object bracket notation. */
    newRecommendation[evt.saveTo] = selectedVal;
    console.log(
      "newRecommendation[evt.saveTo] inside handleChange is ",
      newRecommendation[evt.saveTo]
    );
    console.log("newRecommendation inside handleChange is ", newRecommendation);
    // update state
    setRecommendation(newRecommendation);
  };

  const handleFieldChange = (evt) => {
    const stateToChange = { ...recommendation };
    stateToChange[evt.target.id] = evt.target.value;
    setRecommendation(stateToChange);
  };

  const updateExistingRecommendation = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedRecommendation = {
      id: recommendationId,
      name: recommendation?.name,
      reclistId: recommendation?.reclist?.id,
      from: recommendation?.from,
      notes: recommendation?.notes,
      userId: recommendation?.userId,
    };

    if (
      recommendation?.name === "" ||
      recommendation?.reclistId === "" ||
      recommendation?.from === "" ||
      recommendation?.notes === ""
    ) {
      setConflictDialog(true);
      setIsLoading(false);
    } else {
      updateRecommendation(editedRecommendation).then(() =>
        history.push("/lists")
      );
    }
  };

  useEffect(() => {
    getRecommendationById(recommendationId).then((recommendation) => {
      setRecommendation(recommendation);
      setIsLoading(false);
    });
  }, [recommendationId]);

  useEffect(() => {
    getReclist().then((allRecs) => {
      setRecset(allRecs);
    });
  }, []);

  return (
    <>
      <div className="page">
        <WelcomeBar title="Edit Recommendation" />

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
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                maxLength="25"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={recommendation?.name}
              />
            </div>

            <div className="dropdown-flex">
              <div className="rec-selection">Select Type: </div>
              <Select
                className="recommend"
                onChange={handleChange}
                id="reclist"
                options={recset}
                width="300px"
                value={recommendation?.reclist}
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
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={recommendation?.from}
              />
            </div>

            <div className="form__group">
              <label htmlFor="notes">Notes: </label>
              <input
                type="text"
                id="notes"
                maxLength="100"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={recommendation?.notes}
              />
            </div>
          </fieldset>

          <div className="form-btns">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingRecommendation}
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
