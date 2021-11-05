//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add an activity

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addActivity, getTags } from "./ActivityManager";
import Select from "react-select";
import { WelcomeBar } from "../navbar/WelcomeBar";
import "./Activity.css";
import "../LifeHacker.css";

export const ActivityForm = () => {
  const [conflictDialog, setConflictDialog] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [tagset, setTagset] = useState([]);

  // Defining initial state of the form inputs with useState
  const [activity, setActivity] = useState({
    name: "",
    date: "",
    time: "",
    address: "",
    city: "",
    zipcode: "",
    notes: "",
    tagId: 0,
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const history = useHistory();

  const ResetForm = () => {
    setSelectedValue(null);
    setActivity({
      name: "",
      date: "",
      time: "",
      address: "",
      city: "",
      zipcode: "",
      notes: "",
      tagId: 0,
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    });
  };

  const handleChange = (evt) => {
    setSelectedValue(evt);
    console.log("evt is ", evt);

    /* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
    const newActivity = { ...activity };
    let selectedVal = evt.id;
    console.log("selectedVal is ", selectedVal);

    /* Sets the property to the new value
		using object bracket notation. */
    newActivity[evt.saveTo] = selectedVal;

    // update state
    setActivity(newActivity);
  };

  const goBack = () => {
    history.push("/activities");
  }; //takes user back to list

  const handleControlledInputChange = (evt) => {
    /* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
    const newActivity = { ...activity };
    let selectedVal = evt.target.value;

    /* Sets the property to the new value
		using object bracket notation. */
    newActivity[evt.target.id] = selectedVal;
    // update state
    setActivity(newActivity);
  };

  const handleSave = (evt) => {
    evt.preventDefault(); // Prevents the browser from submitting the form

    if (activity.name === "" || activity.date === "" || activity.city === "") {
      setConflictDialog(true);
    } else {
      addActivity(activity).then(() => history.push("/activities"));
    }
  };

  useEffect(() => {
    getTags().then((allTags) => {
      setTagset(allTags);
    });
  }, []);

  return (
    <>
      <div className="page">
        <WelcomeBar title="Add A New Activity" />

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
              <label htmlFor="name">Activity:*</label>
              <input
                type="text"
                id="name"
                maxLength="18"
                onChange={handleControlledInputChange}
                required
                autoFocus
                className="form__group--edit"
                placeholder=" Name of Activity"
                value={activity.name}
              />
            </div>

            <div className="form__group">
              <label htmlFor="date">Date:*</label>
              <input
                type="date"
                id="date"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                value={activity.date}
              />
            </div>

            <div className="form__group">
              <label htmlFor="date">Time:*</label>
              <input
                type="time"
                id="time"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                value={activity.time}
              />
            </div>

            <div className="form__group">
              <label htmlFor="address">Address:*</label>
              <input
                type="text"
                id="address"
                maxLength="23"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                placeholder=" Address of Activity"
                value={activity.address}
              />
            </div>

            <div className="form__group">
              <label htmlFor="city">City:*</label>
              <input
                type="text"
                id="city"
                maxLength="23"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                placeholder=" Name of City"
                value={activity.city}
              />
            </div>

            <div className="form__group">
              <label htmlFor="zipcode">Zip/Postal Code:*</label>
              <input
                type="text"
                id="zipcode"
                maxLength="10"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                placeholder=" 90210 or V3C 2XR"
                value={activity.zipcode}
              />
            </div>

            <div className="form__group">
              <label htmlFor="notes">Notes:</label>
              <input
                type="text"
                id="notes"
                maxLength="60"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Bring gloves etc"
                value={activity.notes}
              />
            </div>

            <div className="dropdown-flex">
              <div className="tag-selection">Select Tag: </div>
              <Select
                onChange={handleChange}
                id="tag"
                value={selectedValue}
                options={tagset}
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

            <span className="asterisk-info">
              Fields with an asterisk * are required
            </span>
          </fieldset>

          <div className="form-btns">
            <button className="form-btn" onClick={handleSave}>
              Submit
            </button>

            <button className="form-btn" onClick={ResetForm}>
              Reset Form
            </button>

            <button className="form-btn" onClick={goBack}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
