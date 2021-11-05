//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing activity

import React, { useState, useEffect } from "react";
import { update, getActivityById, getTags } from "./ActivityManager";
import { useParams, useHistory } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
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
    tag: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const [conflictDialog, setConflictDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tagset, setTagset] = useState([]);

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
      tag: activity?.tag,
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
      update(editedActivity).then(() => history.push("/activities"));
    }
  };

  useEffect(() => {
    getActivityById(activityId).then((activity) => {
      setActivity(activity);
      setIsLoading(false);
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
        <WelcomeBar title="Edit Activity" />

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

            <div className="form__group">
              <label htmlFor="tag">Tag:</label>
              <input
                type="text"
                id="tag"
                maxLength="10"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={activity.tag}
              />
            </div>

            <div>
              <Dropdown
                placeholder="Select Tag"
                fluid
                selection
                options={tagset}
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
