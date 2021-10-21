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

export const ActivityDashCard = ({ activity, handleDeleteActivity, card }) => {
    return (
    <>
          <div className="dash-activity">

            <div><strong>Name:  {activity?.name}</strong></div>

            <div><strong>Date: </strong> {formatDate(activity?.date)}</div>

            <div><strong>Address: </strong> {activity?.address}</div>

            <div><strong>City: </strong> {activity?.city}</div>

            {/* <div><strong>Zipcode: </strong> {activity?.zipcode}</div> */}

            <div><strong>Notes: </strong> {activity?.notes}</div>

          </div>

          <div className="dash-remove__item">

            <button type="button" className="button sm" onClick={() => handleDeleteActivity(activity?.id)}>delete icon</button>

          </div>
    </>
    )
}



