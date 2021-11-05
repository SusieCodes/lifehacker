//Author: Susie Stanley
//Purpose: Creates and displays individual activity cards for a single activity that is passed as a prop

import React from "react";
import { useHistory } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { formatStringDate, formatTime } from "../helper";
import logo from "../../images/personal.png";
import "../LifeHacker.css";
import "./Activity.css";

export const ActivityCard = ({ activity, handleDelete }) => {
  const history = useHistory();

  console.log("ACTIVITY OBJECT INSIDE CARD IS ", activity);
  console.log("activity.icon inside card is ", activity?.tag?.icon);

  const handleEdit = () => {
    history.push(`/activities/${activity?.id}/edit`);
  };

  return (
    <>
      <div className="activity-card">
        <div className="activity-info">
          <div className="activity-wrapper">
            <div className="activity-name bold">
              <div>{activity?.name}</div>
              <div className="tag-image">
                {activity?.tag?.icon ? (
                  <img
                    // src={logo}
                    src={require(`../../images/${activity?.tag?.icon}`).default}
                    alt="icon"
                    className="tag-icon"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="activity-inner-wrapper">
              <div className="activity-inner-left">
                <div className="med-bold">Date:</div>
                <div className="med-bold">Time:</div>
                <div className="med-bold address-spacer">Address:</div>
                <div className="med-bold note-spacer">Notes:</div>
              </div>

              <div className="activity-inner__right">
                <div className="right-spacer">
                  {formatStringDate(activity?.date)}
                </div>
                <div className="right-spacer">
                  {" "}
                  {activity?.time ? (
                    <div>{formatTime(activity?.time)}</div>
                  ) : (
                    <div>check time</div>
                  )}
                </div>
                <div className="address-wrapper">
                  <div className="activity-address__highlight">
                    {activity?.address}
                  </div>
                  <div className="activity-address__highlight">
                    {activity?.city}
                  </div>
                </div>
                <div className="activity-notes">
                  <div className="a-text-wrapper">{activity?.notes}</div>
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
