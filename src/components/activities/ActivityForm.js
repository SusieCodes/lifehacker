//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add an activity

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addActivity } from './ActivityManager'
import { WelcomeBar } from '../navbar/WelcomeBar'
import './Activity.css'
import '../LifeHacker.css'

export const ActivityForm = () => {
  const [conflictDialog, setConflictDialog] = useState(false)

  // Defining initial state of the form inputs with useState
  const [activity, setActivity] = useState({
    name: '',
    date: '',
    address: '',
    city: '',
    zipcode: '',
    notes: '',
    userId: parseInt(sessionStorage.getItem('lifehacker_user')),
  })

  const history = useHistory()

  const ResetForm = () => {
    setActivity({
      name: '',
      date: '',
      address: '',
      city: '',
      zipcode: '',
      notes: '',
      userId: parseInt(sessionStorage.getItem('lifehacker_user')),
    })
  }

  const goBack = () => {
    history.push('/activities')
  } //takes user back to list

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

  // const FiveDigitZipCode = (zipcode) => {
  //   var zipcodeformat = /^[0-9]{5}?$/;
  //   if(zipcode.match(zipcodeformat)) {
  //   }
  //   else {
  //   return false;
  //   }
  // }

  const handleSave = (evt) => {
    evt.preventDefault() //Prevents the browser from submitting the form

    if (activity.name === '' || activity.date === '' || activity.city === '') {
      setConflictDialog(true)
    } else {
      //invoke addActivity, passing event as an argument
      //once completed, this changes the url and displays the event list
      addActivity(activity).then(() => history.push('/activities'))
    }
  }

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
              <label htmlFor="address">Address:*</label>
              <input
                type="text"
                id="address"
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
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Bring gloves etc"
                value={activity.notes}
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
  )
}
