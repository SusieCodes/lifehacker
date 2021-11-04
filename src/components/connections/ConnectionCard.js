//Author: Susie Stanley
//Purpose: Creates and displays individual connection cards for a single connection that is passed as a prop

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { changeFave } from "./ConnectionManager";
import { FaEdit, FaTrash } from "react-icons/fa";
import { formatJustMonthDay } from "../helper";
import "../dashboard/Dashboard.css";
import "./Connections.css";

export const ConnectionCard = ({ connection, handleDelete }) => {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/connections/${connection?.id}/edit`);
  };

  const handleFave = (e) => {
    changeFave(connection.id, e.target.checked);
  };

  return (
    <>
      <div className="dash-connections">
        <div className="dc-info">
          <div className="pic-name">
            <div className="dc-image">
              {connection?.image ? (
                <img
                  src={connection?.image}
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

            <div className="dc-name">
              <Link to={`/connections/${connection?.id}`}>
                {"  "} {connection?.name}
              </Link>
            </div>
          </div>

          <div className="dc-email">{connection?.email}</div>

          <div className="dc-phone">{connection?.phone}</div>

          <div className="dc-bday">
            {connection.bday ? formatJustMonthDay(connection?.bday) : "*ask*"}
            <div className="checkbox">
              <Checkbox
                color="error"
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                defaultChecked={connection.isFave}
                onChange={(e) => handleFave(e)}
              />
            </div>
          </div>
        </div>

        <div className="connection-icons">
          <div className="connection-details">
            <Link to={`/connections/${connection?.id}`}>Details</Link>
          </div>

          <div
            className="connection-delete"
            onClick={() => handleEdit(connection?.id)}
          >
            <FaEdit className="connection-edit-icon" />
          </div>

          <div
            className="connection-delete"
            onClick={() => handleDelete(connection?.id)}
          >
            <FaTrash className="connection-delete-icon" />
          </div>
        </div>
      </div>
    </>
  );
};
