//Author: Susie Stanley
//Purpose: Creates and displays individual connection cards for a single connection that is passed as a prop

import React from "react"
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export const ConnectionDummyCard = () => {
    return (
    <>
    <div className="dash-connections">

        <div className="dc-info">

            <div className="pic-name">

              <div className="dc-image">
                <img src={require(`../../images/default.png`).default} alt="default" className="connection-photo"/>
              </div>

              <div className="dc-name">Add New Contact
              </div>

            </div>

            <div className="dc-email">name@email.com</div>

            <div className="dc-phone">615-555-1212</div>

            <div className="dc-bday">02/14/2021</div>

        </div>

        <div className="dc-icons">

          <div className="dc-details">
            <Link to={`/connections/`}>Details</Link>
          </div>

          <div className="dc-delete"><FaTrash className="dc-delete-icon"/>
          </div>

        </div>

    </div>
    </>
    )
}

