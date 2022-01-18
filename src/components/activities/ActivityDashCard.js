//Author: Susie Stanley
//Purpose: Creates and displays individual activity cards for a single activity that is passed as a prop

import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { formatStringDate, formatTime } from "../helper";
import "../dashboard/Dashboard.css";
import "./Activity.css";

export const ActivityDashCard = ({ activity, handleDelete }) => {
  return (
    <>
      <div className="dash-activity">
        <Link to="/activities">
          <div className="dash-activity__col1">
            <div className="dash-activity__wrapper">
              <div className="dash-activity__name">{activity?.name}</div>

              <div className="da-inner__wrapper">
                <div className="da-inner__left">
                  <div className="med-bold">Date:</div>
                  <div className="med-bold">Time:</div>
                  <div className="med-bold da-left-spacer">Address:</div>
                </div>

                <div className="da-inner__right">
                  <div className="card-spacer">
                    {formatStringDate(activity?.date)}
                  </div>
                  {activity.time ? (
                    <div className="card-spacer">
                      {formatTime(activity?.time)}
                    </div>
                  ) : (
                    <div className="card-spacer">check time</div>
                  )}
                  <div className="address-wrapper">
                    <div className="da-address__highlight">
                      {activity?.address}
                    </div>
                    <div className="da-address__highlight">
                      {activity?.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="dash-activity__col2">
          <div className="da-tag-image">
            {activity?.tag?.icon ? (
              <img
                src={require(`../../images/${activity?.tag?.icon}`).default}
                alt="icon"
                className="da-tag-icon"
              />
            ) : (
              ""
            )}
          </div>
          <button
            type="button"
            className="activity-delete"
            onClick={() => handleDelete(activity?.id)}
          >
            <FaTrash className="a-delete-icon" />
          </button>
        </div>
      </div>
    </>
  );
};
