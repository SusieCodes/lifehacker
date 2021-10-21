//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add an activity

import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { addActivity } from "./ActivityManager";

export const ActivityForm = () => {
	// Defining initial state of the form inputs with useState()
	const [ activity, setActivity ] = useState({
		name: "",
		date: "",
    address: "",
		city: "",
    zipcode: "",
    notes: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user"))
	});

	const history = useHistory();

	// When a field changes, it updates state
  // The return will re-render and display based on the values in state
  const ResetForm = () => {
    setActivity({
      name: "",
      date: "",
      address: "",
      city: "",
      zipcode: "",
      notes: "",
      userId: parseInt(sessionStorage.getItem("lifehacker_user"))
    });
    console.log("resetForm invoked")
  }

  const goBack = () => { history.push("/activities") }; //takes user back to list

	const handleControlledInputChange = (evt) => {
		/* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
		const newActivity = { ...activity }
		let selectedVal = evt.target.value

		/* Sets the property to the new value
		using object bracket notation. */
		newActivity[evt.target.id] = selectedVal
		// update state
		setActivity(newActivity)
	}

  const FiveDigitZipCode = (zipcode) => {
    var zipcodeformat = /^[0-9]{5}?$/;
    if(zipcode.match(zipcodeformat)) {
    }
    else {
    return false;
    }
  }
  

	const handleSave = (evt) => {
		evt.preventDefault() //Prevents the browser from submitting the form

		if ( activity.name === "" || activity.date === "" || activity.city === "" ) {
			window.alert("Please Fill Out All Required Info")
    } else if ( activity.zipcode.length !== 5 || FiveDigitZipCode(activity.zipcode) ) {
      window.alert("Please Enter A 5 digit Zipcode") 
    } else {
			//invoke addActivity, passing event as an argument
			//once completed, this changes the url and displays the event list
			addActivity(activity)
				.then(() => history.push("/activities"))
		}
	}

	return (
    <div className="form__flex">
      <form>
        <div className="form__title">Add New Activity</div>
        <fieldset>

          <div className="form__group">
            <label htmlFor="name">Activity name:</label>
            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form__group--edit" placeholder="Activity Name" value={activity.name} />
          </div>

          <div className="form__group">

            <label htmlFor="date">Date of Activity</label>
            <input type="date" id="date" onChange={handleControlledInputChange} required className="form__group--edit" value={activity.date} />

            <label htmlFor="city">Activity Address:</label>
            <input type="text" id="address" onChange={handleControlledInputChange} required className="form__group--edit" placeholder="Activity Address" value={activity.address} />

            <label htmlFor="city">Activity City:</label>
            <input type="text" id="city" onChange={handleControlledInputChange} required className="form__group--edit" placeholder="Activity City" value={activity.city} />

            <label htmlFor="zipcode">Activity Zipcode:</label>
            <input type="text" id="zipcode" onChange={handleControlledInputChange} required className="form__group--edit" placeholder="5 digit Zipcode" value={activity.zipcode}/>

            <label htmlFor="city">Activity Notes:</label>
            <input type="text" id="notes" onChange={handleControlledInputChange} required className="form__group--edit" placeholder="Activity Notes" value={activity.notes} />

          </div>
        </fieldset>

        <div className="form__btns">

          <button className="form__btn"
            onClick={handleSave}>
            Submit
          </button>

          <button className="form__btn"
            onClick={ResetForm}>
            Reset Form
          </button>

          <button className="form__btn"
            onClick={goBack}>
            Cancel
          </button>

        </div>

      </form>
    </div>
	)
};

