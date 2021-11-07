//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing recommendation

import React, { useState, useEffect } from "react";
import { updateRecommendation, getRecommendationById } from "./ListManager";
import { useParams, useHistory } from "react-router-dom";
import { WelcomeBar } from "../navbar/WelcomeBar";
import "./List.css";
import "../LifeHacker.css";

export const RecommendationEditForm = () => {
  const [recommendation, setRecommendation] = useState({
    name: "",
    type: "",
    from: "",
    notes: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [conflictDialog, setConflictDialog] = useState(false);

  const { recommendationId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...recommendation };
    stateToChange[evt.target.id] = evt.target.value;
    setRecommendation(stateToChange);
  };

  const updateExistingRecommendation = (evt) => {
    evt.preventDefault();

    // This is an edit, so we need the id
    const editedRecommendation = {
      id: recommendationId,
      name: recommendation?.name,
      type: recommendation?.type,
      from: recommendation?.from,
      notes: recommendation?.notes,
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    };

    if (
      recommendation?.name === "" ||
      recommendation?.type === "" ||
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

            <div className="form__group">
              <label htmlFor="type">Type: </label>
              <input
                type="text"
                id="type"
                maxLength="15"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={recommendation?.type}
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
