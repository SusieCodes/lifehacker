//Author: Susie Stanley
//Purpose: Displays all user's connections (friends/family)

import React, { useState, useEffect } from "react";
import { deleteConnection, getConnectionsByUserId } from "./ConnectionManager";
import { ConnectionDashCard } from "./ConnectionDashCard";

export const ConnectionDashList = () => {
    const [connections, setConnections] = useState([])

    //gets all the user's connections and sets it to state
    const getConnections = () => {
        console.log("getConnections function invoked")
        getConnectionsByUserId(sessionStorage.getItem("lifehacker_user")).then(response => {
            console.log("response is: ", response)
            setConnections(response);
        })
    }

    const handleDelete = (connectionId) => {
        //invokes the delete function and re-direct to the list
        deleteConnection(connectionId).then(() => getConnectionsByUserId(sessionStorage.getItem("lifehacker_user")).then(setConnections))
        console.log("connectionId is: ", connectionId);
    };

    useEffect(() => {
        getConnections();
    }, [])

    return (

  <>
        <div className="section-connections">

          {/* this section is the category headers for the contact cards (using same div names as cards so spacing is identical) */}
          <div className="dash-connections-header">

            <div className="dc-info">

              <div className="pic-name">

                <div className="dc-image"></div>

                <div className="dc-name bold">NAME</div>

              </div>

              <div className="dc-email bold">EMAIL</div>

              <div className="dc-phone bold">PHONE</div>

              <div className="dc-bday bold">BIRTHDAY</div>

            </div>

            <div className="dc-icons">

            </div>

          </div>

        {/* start of Connection Cards */}
        <div className="container">
            {connections.map(connection => <ConnectionDashCard key={connection.id} connection={connection} handleDelete={handleDelete} />)}
        </div>

        </div>
  </>
    )
}