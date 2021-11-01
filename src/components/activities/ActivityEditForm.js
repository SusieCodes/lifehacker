//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing activity

import React, { useState, useEffect } from "react";
import { update, getActivityById } from "./ActivityManager";
import { useParams, useHistory } from "react-router-dom";
import { WelcomeBar } from "../navbar/WelcomeBar";
import "./Activity.css";
import "../LifeHacker.css";

export const ActivityEditForm = () => {
  const [activity, setActivity] = useState({
    name: "",
    date: "",
    time: "",
    address: "",
    city: "",
    zipcode: "",
    notes: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const [isLoading, setIsLoading] = useState(false);

  const { activityId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...activity };
    stateToChange[evt.target.id] = evt.target.value;
    setActivity(stateToChange);
  };

  const updateExistingActivity = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedActivity = {
      id: activityId,
      name: activity?.name,
      date: activity?.date,
      time: activity?.time,
      address: activity?.address,
      city: activity?.city,
      zipcode: activity?.zipcode,
      notes: activity?.notes,
      userId: activity?.userId,
    };

    update(editedActivity).then(() => history.push("/activities"));
  };

  useEffect(() => {
    getActivityById(activityId).then((activity) => {
      setActivity(activity);
      setIsLoading(false);
    });
  }, [activityId]);

  return (
    <>
      <div className="page">
        <WelcomeBar title="Edit Activity" />

        <div className="form-flex">
          <fieldset className="form">
            <div className="form__group">
              <label htmlFor="name">Activity:</label>
              <input
                type="text"
                id="name"
                maxLength="30"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={activity.name}
              />
            </div>

            <div className="form__group">
              <label htmlFor="date">Date:</label>
              <input
                type="text"
                id="date"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={activity.date}
              />
            </div>

            <div className="form__group">
              <label htmlFor="time">Time:</label>
              <input
                type="time"
                id="time"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={activity.time}
              />
            </div>

            <div className="form__group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                maxLength="23"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={activity.address}
              />
            </div>

            <div className="form__group">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                maxLength="23"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={activity.city}
              />
            </div>

            <div className="form__group">
              <label htmlFor="zipcode">Zip/Postal Code:</label>
              <input
                type="text"
                id="zipcode"
                maxLength="10"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={activity.zipcode}
              />
            </div>

            <div className="form__group">
              <label htmlFor="notes">Notes:</label>
              <input
                type="text"
                id="notes"
                maxLength="60"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={activity.notes}
              />
            </div>
          </fieldset>

          <div className="form-btns">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingActivity}
              className="form-btn"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={() => history.push(`/activities`)}
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
