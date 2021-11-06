//Author: Susie Stanley
//Purpose: Creates and displays individual activity cards for a single activity that is passed as a prop

import React from "react";
import { useHistory } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { formatStringDate, formatTime } from "../helper";
import "../LifeHacker.css";
import "./Activity.css";

export const ActivityTagCard = ({ activity, handleDelete }) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/activities/${activity?.id}/edit`);
  };

  return (
    <>
      <div className="activity-card-sort">
        <div className="activity-wrapper-sort">
          <div className="activity-name-sort activity-title-sort">
            {activity?.name}
          </div>

          <div className="activity-date-sort">
            <div className="bold-sort">Date:</div>
            <div className="right-sort">{formatStringDate(activity?.date)}</div>
          </div>

          <div className="activity-time-sort">
            <div className="bold-sort">Time:</div>
            <div className="right-sort">{formatTime(activity?.time)}</div>
          </div>

          <div className="activity-address-sort">
            <div className="bold-sort">Address:</div>
            <div className="right-sort highlight-sort">{activity?.address}</div>
          </div>

          <div className="activity-city-sort">
            <div className="bold-sort transparent city-spacer">City:</div>
            <div className="right-sort highlight-sort city-spacer">
              {activity?.city}
            </div>
          </div>

          <div className="activity-note-sort">
            <div className="bold-sort">Notes:</div>
            <div className="right-sort constrain">{activity?.notes}</div>
          </div>

          <div className="activity-icons-sort">
            <div
              className="activity-delete-sort"
              onClick={() => handleEdit(activity?.id)}
            >
              <FaEdit className="activity-edit-icon-sort" />
            </div>

            <div
              className="activity-delete-sort"
              onClick={() => handleDelete(activity?.id)}
            >
              <FaTrash className="activity-delete-icon-sort" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
