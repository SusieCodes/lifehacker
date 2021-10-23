//Author: Susie Stanley
//Purpose: Creates and displays individual connection cards for a single connection that is passed as a prop

import React from "react"
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";


const formatDate = (date) => {
    var array = (date).toString().split(/-/g);
    array.push(array.shift());
    return array.join('/');
  };

export const ConnectionDashCard = ({ connection, handleDelete }) => {
    return (
    <>
    <div className="dash-connections">

        <div className="dc-info">

            <div className="pic-name">

              <div className="dc-image">
                {connection.image !== "" ?
                  <img src={require(`../../images/default.png`).default} alt={connection?.name} className="connection-photo"/> 
                  : <img src={require(`../../images/default.png`).default} alt="default" className="connection-photo"/>}
              </div>

              <div className="dc-name">{connection?.name}
              </div>

            </div>

            <div className="dc-email">{connection?.email}</div>

            <div className="dc-phone">{connection?.phone}</div>

            <div className="dc-bday">{formatDate(connection?.bday)}</div>

        </div>

        <div className="dc-icons">

          <div className="dc-details">
            <Link to={`/connections/${connection?.id}`}>Details</Link>
          </div>

          <div className="dc-delete" onClick={() => handleDelete(connection?.id)}><FaTrash className="dc-delete-icon"/>
          </div>

        </div>

    </div>
    </>
    )
}

