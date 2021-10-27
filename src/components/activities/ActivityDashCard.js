//Author: Susie Stanley
//Purpose: Creates and displays individual activity cards for a single activity that is passed as a prop

import React from "react";
// import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { formatStringDate } from "../helper";
import "../dashboard/Dashboard.css";
import "./Activity.css";
// import { WeatherApp } from "../activities/WeatherApp";

// converts 24 hr time to 12 hr
const formatTime = (time) => {
  console.log("time is ", time);
  const time_part_array = time.split(":");
  console.log("time_part_array is ", time_part_array);
  let ampm = "AM";
  console.log("ampm is ", ampm);
  if (time_part_array[0] >= 12) {
    ampm = "PM";
  }
  if (time_part_array[0] > 12) {
    time_part_array[0] = time_part_array[0] - 12;
  }
  const formatted_time =
    time_part_array[0] + ":" + time_part_array[1] + " " + ampm;
  console.log("formatted_time is ", formatted_time);
  return formatted_time;
};

export const ActivityDashCard = ({ activity, handleDelete }) => {
  const time = activity?.time;
  console.log("ACTIVITY passed into ActivityDashCard is: ", activity);
  console.log("ACTIVITY.TIME inside ActivityDashCard is: ", activity?.time);
  console.log("TIME is: ", time);

  return (
    <>
      <div className="dash-activity">
        <div className="dash-activity__col1">
          <div className="dash-activity__wrapper">
            <div className="dash-activity__name bold">{activity?.name}</div>

            <div className="da-inner__wrapper">
              <div className="da-inner__left">
                <div className="bold">Date:</div>
                <div className="bold">Time:</div>
                <div className="bold">Address:</div>
                <div className="transparent">City:</div>
              </div>

              <div className="da-inner__right">
                <div>{formatStringDate(activity?.date)}</div>
                {activity.time ? (
                  <div>{formatTime(activity?.time)}</div>
                ) : (
                  <div>check time</div>
                )}
                <div className="activity-address__highlight">
                  {activity?.address}
                </div>
                <div className="activity-address__highlight">
                  {activity?.city}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dash-activity__col2">
          <button
            type="button"
            className="activity-delete"
            onClick={() => handleDelete(activity?.id)}
          >
            <FaTrash className="delete-icon" />
          </button>
        </div>
      </div>
    </>
  );
};
