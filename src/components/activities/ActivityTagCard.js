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
        <div className="activity-info-sort">
          <div className="activity-wrapper-sort">
            <div className="activity-name-sort bold">
              <div>{activity?.name}</div>
            </div>

            <div className="activity-inner-wrapper-sort">
              <div className="activity-inner-left-sort">
                <div className="med-bold">Date:</div>
              </div>

              <div className="activity-inner__right-sort">
                <div className="right-spacer-sort">
                  {formatStringDate(activity?.date)}
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
};
