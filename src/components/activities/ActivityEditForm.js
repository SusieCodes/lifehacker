//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing activity

import React, { useState, useEffect } from "react";
import { update, getActivityById, getTags } from "./ActivityManager";
import { useParams, useHistory } from "react-router-dom";
import Select from "react-select";
import { WelcomeBar2 } from "../navbar/WelcomeBar2";
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
    tagId: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const [selectedValue, setSelectedValue] = useState(null);

  const [conflictDialog, setConflictDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tagset, setTagset] = useState([]);

  const { activityId } = useParams();
  const history = useHistory();

  const handleChange = (evt) => {
    /* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
    const newActivity = { ...activity };
    let selectedVal = evt.id;
    console.log("selectedVal is ", selectedVal);
    /* Sets the property to the new value
		using object bracket notation. */
    newActivity[evt.saveTo] = selectedVal;
    setSelectedValue(evt);
    console.log("newActivity is ", newActivity);
    // update state
    setActivity(newActivity);
  };

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
      tagId: activity?.tagId,
      userId: activity?.userId,
    };

    if (
      activity.name === "" ||
      activity.date === "" ||
      activity.time === "" ||
      activity.address === "" ||
      activity.city === "" ||
      activity.zipcode === ""
    ) {
      setConflictDialog(true);
      setIsLoading(false);
    } else {
      update(editedActivity).then(() => history.goBack());
    }
  };

  useEffect(() => {
    getActivityById(activityId).then((activity) => {
      setActivity(activity);
      setIsLoading(false);
      setSelectedValue(activity?.tag);
    });
  }, [activityId]);

  useEffect(() => {
    getTags().then((allTags) => {
      setTagset(allTags);
    });
  }, []);

  return (
    <>
      <div className="page">
        <WelcomeBar2 title="Edit Activity" />

        <div className="form-flex">
          <fieldset className="form">
            <dialog className="dialog" open={conflictDialog}>
              <div className="dialog-forms">
                Please Fill Out All Required Fields
              </div>
              <button
                className="button-close"
                onClick={(e) => setConflictDialog(false)}
              >
                Close
              </button>
            </dialog>
            <div className="form__group">
              <label htmlFor="name">Activity:</label>
              <input
                type="text"
                id="name"
                maxLength="25"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={activity.name}
              />
            </div>

            <div className="form__group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
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

            <div className="dropdown-flex">
              <div className="tag-selection">Select Tag: </div>
              <Select
                onChange={handleChange}
                id="tag"
                options={tagset}
                width="300px"
                // activity.tag is object that populates dropdown for this activity
                value={selectedValue}
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
