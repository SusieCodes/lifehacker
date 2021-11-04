//Author: Susie Stanley
//Purpose: Creates and displays individual connection cards for a single connection that is passed as a prop

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { changeFave } from "./ConnectionManager";
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

  const handleFave = (e) => {
    changeFave(connection.id, e.target.checked);
  };

  return (
    <>
      <div className="dash-connections">
        <div className="dc-info">
          <div className="pic-name">
            <div className="dc-image">
              <Link to={`/connections/${connection?.id}`}>
                {connection.image !== "" ? (
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
              </Link>
            </div>

            <div className="dc-name">
              <Link to={`/connections/${connection?.id}`}>
                {connection?.name}
              </Link>
            </div>
          </div>

          <div className="dc-email">
            <Link to={`/connections/${connection?.id}`}>
              {connection?.email}
            </Link>
          </div>

          <div className="dc-phone">
            <Link to={`/connections/${connection?.id}`}>
              {connection?.phone}
            </Link>
          </div>

          <div className="dc-bday">
            <Link to={`/connections/${connection?.id}`}>
              {connection.bday ? formatJustMonthDay(connection?.bday) : "*ask*"}
            </Link>
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
