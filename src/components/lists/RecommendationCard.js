//Author: Susie Stanley
//Purpose: Creates and displays individual recommendation cards for a single recommendation that is passed as a prop

import React from "react";
import { useHistory } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./List.css";
import "../LifeHacker.css";

export const RecommendationCard = ({
  recommendation,
  handleDeleteRecommendation,
}) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/recommendations/${recommendation?.id}/edit`);
  };

  return (
    <>
      <div className="recommendation-card-lists">
        <div className="recommendation-wrapper-lists">
          <div className="recommendation-title-lists">
            <div className="recommendation-name-lists">
              {recommendation?.name}
            </div>

            <div className="recommendation-icon-lists">
              {recommendation?.reclist?.image ? (
                <img
                  src={
                    require(`../../images/${recommendation?.reclist?.image}`)
                      .default
                  }
                  alt="icon"
                  className="rec-icon"
                />
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="recommendation-type-lists">
            <div className="rec-bold-lists">Type: </div>
            <div className="rec-right-lists">
              {recommendation?.reclist?.value}
            </div>
          </div>

          <div className="recommendation-from-lists">
            <div className="rec-bold-lists">From: </div>
            <div className="rec-right-lists constrain">
              {recommendation?.from}
            </div>
          </div>

          <div className="recommendation-notes-lists">
            <div className="rec-bold-lists">Notes: </div>
            <div className="rec-right-lists constrain">
              {recommendation?.notes}
            </div>
          </div>

          <div className="recommendation-icons-lists">
            <div
              className="recommendation-delete-lists"
              onClick={() => handleEdit(recommendation?.id)}
            >
              <FaEdit className="recommendation-edit-icon-lists" />
            </div>

            <div
              className="recommendation-delete-lists"
              onClick={() => handleDeleteRecommendation(recommendation?.id)}
            >
              <FaTrash className="recommendation-delete-icon-lists" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
