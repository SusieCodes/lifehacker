//Author: Susie Stanley
//Purpose: Creates and displays individual connection cards for a single connection that is passed as a prop

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { formatJustMonthDay } from "../helper";
import "./Connections.css";
import "../dashboard/Dashboard.css";

// const formatDate = (date) => {
//   var array = date.toString().split(/-/g);
//   array.push(array.shift());
//   return array.join("/");
// };

export const ConnectionDashCard = ({ connection, handleDelete }) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/connections/${connection?.id}/edit`);
  };

  return (
    <>
      <div className="dash-connections">
        <div className="dc-info">
          <div className="pic-name">
            <div className="dc-image">
              {connection.image !== "" ? (
                <img
                  src={require(`../../images/${connection?.image}`).default}
                  alt={connection?.name}
                  className="connection-photo"
                />
              ) : (
                <img
                  src={require(`../../images/default.png`).default}
                  alt="default-user"
                  className="connection-photo"
                />
              )}
            </div>

            <div className="dc-name">{connection?.name}</div>
          </div>

          <div className="dc-email">{connection?.email}</div>

          <div className="dc-phone">{connection?.phone}</div>

          <div className="dc-bday">{formatJustMonthDay(connection?.bday)}</div>
        </div>

        <div className="dc-icons">
          <div className="dc-details">
            <Link to={`/connections/${connection?.id}`}>Details</Link>
          </div>

          <div className="dc-edit" onClick={() => handleEdit(connection?.id)}>
            <FaEdit className="dc-edit-icon" />
          </div>

          <div
            className="dc-delete"
            onClick={() => handleDelete(connection?.id)}
          >
            <FaTrash className="dc-delete-icon" />
          </div>
        </div>
      </div>
    </>
  );
};
