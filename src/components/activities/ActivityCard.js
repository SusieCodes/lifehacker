//Author: Susie Stanley
//Purpose: Creates and displays individual activity cards for a single activity that is passed as a prop

import React from "react";
import { useHistory } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { formatStringDate } from "../helper";

// import { WeatherApp } from "../activities/WeatherApp";

// converts 24 hr time to 12 hr
const formatTime = (time) => {
  console.log("time is ", time);
  let time_part_array = time.split(":");
  console.log("time_part_array is ", time_part_array);
  console.log("type of time_part_array is ", typeof time_part_array);
  console.log("time_part_array[0] is ", time_part_array[0]);

  let ampm = "AM";
  console.log("ampm is ", ampm);
  if (time_part_array[0] >= 12) {
    ampm = "PM";
  }
  if (time_part_array[0] <= 9) {
    time_part_array[0] = time_part_array[0].toString();
    time_part_array[0] = time_part_array[0].slice(1);
  }
  if (time_part_array[0] > 12) {
    time_part_array[0] = time_part_array[0] - 12;
  }

  const formatted_time =
    time_part_array[0] + ":" + time_part_array[1] + " " + ampm;
  console.log("formatted_time is ", formatted_time);
  return formatted_time;
};

export const ActivityCard = ({ activity, handleDelete }) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/activities/${activity?.id}/edit`);
  };

  return (
    <>
      <div className="activity-card">
        <div className="activity-info">
          <div className="dash-activity__wrapper">
            <div className="dash-activity__name bold">{activity?.name}</div>

            <div className="da-inner__wrapper">
              <div className="da-inner__left">
                <div className="bold">Date:</div>
                <div className="bold">Time:</div>
                <div className="bold card-spacer">Address:</div>
                <div className="transparent card-spacer">City:</div>
                <div className="bold note-spacer">Notes:</div>
              </div>

              <div className="da-inner__right">
                <div>{formatStringDate(activity?.date)}</div>
                {activity?.time ? (
                  <div>{formatTime(activity?.time)}</div>
                ) : (
                  <div>check time</div>
                )}
                <div className="activity-address__highlight card-spacer">
                  {activity?.address}
                </div>
                <div className="activity-address__highlight card-spacer">
                  {activity?.city}
                </div>
                <div className="activity-notes note-spacer">
                  {activity?.notes}
                </div>
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
  );
};
