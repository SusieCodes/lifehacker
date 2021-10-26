//Author: Susie Stanley
//Purpose: Creates and displays individual activity cards for a single activity that is passed as a prop

import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa'
// import { WeatherApp } from "../activities/WeatherApp";

const formatDate = (obj) => {
  const date = new Date(obj)
  const formattedDate = date.toDateString() // converts date object to a string that displays in format "Sun Jul 22 2018"
  return formattedDate
}

export const ActivityCard = ({ activity, handleDelete }) => {
  const history = useHistory()

  const handleEdit = () => {
    history.push(`/activities/${activity?.id}/edit`)
  }
  return (
    <>
      <div className="activity-card">
        <div className="activity-info">
          <div className="dash-activity__wrapper">
            <div className="dash-activity__name bold">{activity?.name}</div>

            <div className="da-inner__wrapper">
              <div className="da-inner__left">
                <div className="bold">Date:</div>
                <div className="bold">Address:</div>
                <div className="transparent">City:</div>
                <div className="bold">Notes:</div>
              </div>

              <div className="da-inner__right">
                <div>{formatDate(activity?.date)}</div>
                <div className="activity-address__highlight">
                  {activity?.address}
                </div>
                <div className="activity-address__highlight">
                  {activity?.city}
                </div>
                <div className="activity-notes">{activity?.notes}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="activity-icons">
          <div
            className="activity-delete"
            onClick={() => handleEdit(activity?.id)}
          >
            <FaEdit className="activity-edit-icon" />
          </div>

          <div
            className="activity-delete"
            onClick={() => handleDelete(activity?.id)}
          >
            <FaTrash className="activity-delete-icon" />
          </div>
        </div>
      </div>
    </>
  )
}
