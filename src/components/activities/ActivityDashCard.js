//Author: Susie Stanley
//Purpose: Creates and displays individual activity cards for a single activity that is passed as a prop

import React from 'react'
// import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa'
// import { WeatherApp } from "../activities/WeatherApp";

const formatDate = (obj) => {
  const date = new Date(obj)
  const formattedDate = date.toDateString() // converts date object to a string that displays in format "Sun Jul 22 2018"
  return formattedDate
}

export const ActivityDashCard = ({ activity, handleDelete }) => {
  return (
    <>
      <div className="dash-activity">
        <div className="dash-activity__col1">
          <div className="dash-activity__wrapper">
            <div className="dash-activity__name bold">{activity.name}</div>

            <div className="da-inner__wrapper">
              <div className="da-inner__left">
                <div className="bold">Date:</div>
                <div className="bold">Address:</div>
                <div className="transparent">City:</div>
                <div className="bold">Notes:</div>
              </div>

              <div className="da-inner__right">
                <div>{formatDate(activity.date)}</div>
                <div className="activity-address__highlight">
                  {activity.address}
                </div>
                <div className="activity-address__highlight">
                  {activity.city}
                </div>
                <div>{activity.notes}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="dash-activity__col2">
          <button
            type="button"
            className="activity-delete"
            onClick={() => handleDelete(activity.id)}
          >
            <FaTrash className="delete-icon" />
          </button>
        </div>
      </div>
    </>
  )
}
