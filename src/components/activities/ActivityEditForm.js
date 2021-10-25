//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing activity


import React, { useState, useEffect } from "react"
import { update, getActivityById } from "./ActivityManager"
import { useParams, useHistory } from "react-router-dom"
import { formatDate } from "../helper"
import "./Activity.css"
import "../LifeHacker.css"

export const ActivityEditForm = () => {
  const [activity, setActivity] = useState(
    { 
      name: "", 
      date: "", 
      address: "", 
      city: "", 
      zipcode: "", 
      notes: "", 
      userId: parseInt(sessionStorage.getItem("lifehacker_user")) 
    });
    
  const [isLoading, setIsLoading] = useState(false);

  const {activityId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...activity };
    stateToChange[evt.target.id] = evt.target.value;
    setActivity(stateToChange);
  };

  const updateExistingActivity = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedActivity = {
      id: activityId,
      name: activity.name,
      date: activity.date,
      address: activity.address,
      city: activity.city,
      zipcode: activity.zipcode,
      notes: activity.notes,
      userId: activity.userId
    };

  update(editedActivity)
    .then(() => history.push("/activities")
    )
  }

  useEffect(() => {
    getActivityById(activityId)
      .then(activity => {
        setActivity(activity);
        setIsLoading(false);
      });
  }, []);

  return (
<>
    <div className="page">

      <div className="page-title__flex">

      <div className="page-title__left">Welcome <span className="welcome-name">{sessionStorage.getItem("lifehacker_username")}</span></div>

      <div className="page-title__headline">Edit Activity</div>

      <div className="page-title__right">Today: &nbsp;&nbsp;<span className="todays-date">{formatDate(Date.now())}</span></div>

      </div>

      <div className="form-flex">

            <fieldset className="form">

              <div className="form__group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  required
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="name"
                  value={activity.name}
                />
              </div>

              <div className="form__group">
                <label htmlFor="date">Date:</label>
                <input
                  type="text"
                  required
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="date"
                  value={activity.date}
                />
              </div>

              <div className="form__group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  required
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="address"
                  value={activity.address}
                />
              </div>

              <div className="form__group">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  required
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="city"
                  value={activity.city}
                />
              </div>

              <div className="form__group">
                <label htmlFor="zipcode">Zip/Postal Code:</label>
                <input
                  type="text"
                  required
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="zipcode"
                  value={activity.zipcode}
                />
              </div>

              <div className="form__group">
                <label htmlFor="notes">Notes:</label>
                <input
                  type="text"
                  required
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="notes"
                  value={activity.notes}
                />
              </div>

            </fieldset>

            <div className="form-btns">
                
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingActivity}
                  className="form-btn">Submit
                  </button>

                <button
                  type="button"
                  onClick={() => history.push(`/activities`)}
                  className="form-btn">Cancel
                  </button>

            </div>

        </div>
    </div>
</>
  );
}