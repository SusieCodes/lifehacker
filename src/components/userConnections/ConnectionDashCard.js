//Author: Susie Stanley
//Purpose: Creates and displays individual activity cards for a single activity that is passed as a prop

import React from "react"
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";


const formatDate = (date) => {
  const _date = date.split('-');
  const formattedDate = _date[1] + "-" + _date[2] +  "-" + _date[0];
  console.log("formattedDate is: ", formattedDate)
  return formattedDate;
}

// const formatDate = (date) => {
//   const dateObj = new Date(date + 'T00:00:00');
//   return new Intl.DateTimeFormat('en-US').format(dateObj);
// }

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

