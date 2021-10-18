//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing activity


import React, { useState, useEffect } from "react"
import { update, getActivityById } from "./ActivityManager"
import { useParams, useHistory } from "react-router-dom"


export const ActivityEditForm = () => {
  const [activity, setActivity] = useState({ name: "", date: "", city: "" });
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
      notes: activity.notes
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
    <div className="form__flex">

        <form>

          <div className="form__title">Edit Activity
          </div>

          <fieldset>

            <div className="form__group">

              <label htmlFor="name">Activity Name:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="name"
                value={activity.name}
              />

              <label htmlFor="date">Activity Date:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="date"
                value={activity.date}
              />

              <label htmlFor="address">Activity Address:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="address"
                value={activity.address}
              />

              <label htmlFor="city">Activity City:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="city"
                value={activity.city}
              />

              <label htmlFor="zipcode">Activity Zipcode:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="zipcode"
                value={activity.zipcode}
              />

              <label htmlFor="notes">Activity Notes:</label>
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

          <div className="form__btns">
              
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingActivity}
                className="form__btn">Submit
                </button>

              <button
                type="button"
                onClick={() => history.push(`/activities`)}
                className="form__btn">Cancel
                </button>

          </div>

        </form>

      </div>
    </>
  );
}