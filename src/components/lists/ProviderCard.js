//Author: Susie Stanley
//Purpose: Creates and displays individual provider cards for a single provider that is passed as a prop

import React from "react";
import { useHistory } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./List.css";
import "../LifeHacker.css";

export const ProviderCard = ({ provider, handleDeleteProvider }) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/providers/${provider?.id}/edit`);
  };

  return (
    <>
      <div className="provider-card-lists">
        <div className="provider-wrapper-lists">
          <div className="provider-name-lists provider-title-lists">
            {provider?.name}
          </div>

          <div className="provider-service-lists">
            <div className="bold-lists">Service:</div>
            <div className="right-lists">{provider?.service}</div>
          </div>

          <div className="provider-text-lists">
            <div className="bold-lists">Notes:</div>
            <div className="right-lists constrain">{provider?.notes}</div>
          </div>

          <div className="provider-stars-lists">
            <div className="bold-lists city-spacer">Rating:</div>
            <div className="right-lists city-spacer">{provider?.stars}</div>
          </div>

          <div className="provider-icons-lists">
            <div
              className="provider-delete-lists"
              onClick={() => handleEdit(provider?.id)}
            >
              <FaEdit className="provider-edit-icon-lists" />
            </div>

            <div
              className="provider-delete-lists"
              onClick={() => handleDeleteProvider(provider?.id)}
            >
              <FaTrash className="provider-delete-icon-lists" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
