//Author: Susie Stanley
//Purpose: Creates and displays individual recommendation cards for a single recommendation that is passed as a prop

import React from "react";
import { useHistory } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../LifeHacker.css";
import "./List.css";

export const RecommendSortCard = ({ recommendation, handleDelete }) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/recommendations/${recommendation?.id}/edit`);
  };

  return (
    <>
      <div className="recommendation-card-sort">
        <div className="recommendation-wrapper-sort">
          <div className="recommendation-name-sort recommendation-title-sort">
            {recommendation?.name}
          </div>

          <div className="rec-from-notes-wrapper">
            <div className="recommendation-from-sort">
              <div className="rec-bold-sort">From:</div>
              <div className="right-sort">{recommendation?.from}</div>
            </div>

            <div className="recommendation-note-sort">
              <div className="rec-bold-sort">Notes:</div>
              <div className="right-sort constrain">
                {recommendation?.notes}
              </div>
            </div>
          </div>

          <div className="rec-icons-wrapper">
            <div className="rec-icons-sort">
              <div
                className="rec-delete-sort"
                onClick={() => handleEdit(recommendation?.id)}
              >
                <FaEdit className="rec-edit-icon-sort" />
              </div>

              <div
                className="rec-delete-sort"
                onClick={() => handleDelete(recommendation?.id)}
              >
                <FaTrash className="rec-delete-icon-sort" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
