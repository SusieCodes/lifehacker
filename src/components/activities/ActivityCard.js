//Author: Susie Stanley
//Purpose: Creates and displays individual activity cards for a single activity that is passed as a prop

import React from "react"
import { Link } from "react-router-dom";
// import {FaEdit, FaTrash } from "react-icons/fa"
// import { WeatherApp } from "../activities/WeatherApp";


const formatDate = (obj) => {
  const date = new Date(obj);
  const formattedDate = date.toDateString(); // converts date object to a string that displays in format "Sun Jul 22 2018"
  return formattedDate;
}

export const ActivityCard = ({ activity, handleDeleteActivity }) => {
    return (
    <>
        <div className="card">
        
          <div className="activity-info">

            <div><strong>Name:  {activity?.name}</strong></div>

            <div><strong>Date: </strong> {formatDate(activity?.date)}</div>

            <div><strong>Address: </strong> {activity?.address}</div>

            <div><strong>City: </strong> {activity?.city}</div>

            <div><strong>Zipcode: </strong> {activity?.zipcode}</div>

            <div><strong>Notes: </strong> {activity?.notes}</div>

          </div>

          <div className="form-btns">

            <Link to={`/activities/${activity?.id}/edit`}>
              <button 
              className="form-btn">
                Edit
              </button>
            </Link>

            <button 
              type="button" 
              className="form-btn" 
              onClick={() => handleDeleteActivity(activity?.id)}>
                Delete
            </button>

          </div>

        </div>
    </>
    )
}



