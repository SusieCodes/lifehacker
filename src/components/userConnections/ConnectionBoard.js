//Author: Susie Stanley
//Purpose: Displays all user's connections (friends/family)

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { deleteConnection, getConnectionsByUserId } from "./ConnectionManager";
import { ConnectionCard } from "./ConnectionCard";
import { ConnectionDummyCard } from "./ConnectionDummyCard";

import { formatDate } from "../helper";
import "../dashboard/Dashboard.css"
import "../LifeHacker.css"
import "../userConnections/Connections.css"

export const ConnectionBoard = () => {
    const [connections, setConnections] = useState([])

    const getConnections = () => {
        console.log("getConnections function invoked")
        getConnectionsByUserId(sessionStorage.getItem("lifehacker_user")).then(response => {
            console.log("response is: ", response)
            setConnections(response);
        })
    }

    const handleDelete = (connectionId) => {
        //invoke the delete function and re-direct to the list
        deleteConnection(connectionId).then(() => getConnectionsByUserId(sessionStorage.getItem("lifehacker_user")).then(setConnections))
        console.log("connectionId is: ", connectionId);
    };

    useEffect(() => {
        getConnections();
    }, [])

    return (
<>
    <div className="page">

        <div className="page-title__flex">
  
          <div className="page-title__left">Welcome <span className="welcome-name">{sessionStorage.getItem("lifehacker_username")}</span></div>
  
          <div className="page-title__headline">Connections</div>
  
          <div className="page-title__right">Today: &nbsp;&nbsp;<span className="todays-date">{formatDate(Date.now())}</span></div>
  
        </div>

        <div className="section-flex__content">
                <Link to={`/connections/create`}>
                <button className="add-connection">+ Add Connection</button>
                </Link>
        </div>

        <div className="section-flex">

            {/* this section is the category headers for the contact cards (using same div names as cards so spacing is identical) */}
            <div className="connections-header">

                <div className="dc-info">

                    <div className="pic-name">

                        <div className="dc-image"></div>

                        <div className="dc-name bold">NAME</div>

                    </div>

                    <div className="dc-email bold">EMAIL</div>

                    <div className="dc-phone bold">PHONE</div>

                    <div className="dc-bday bold">BIRTHDAY</div>

                </div>

                <div className="connection-icons">

                </div>

            </div>

            {/* ternary statement that show cards if they exist and message if none exist yet */}
            {connections[0] ?
            <div className="container">
                {connections.map(connection => <ConnectionCard key={connection.id} connection={connection} handleDelete={handleDelete} />)}
            </div>
            :   <div className="container">
                    <ConnectionDummyCard />
                </div>
            }

        </div>

    </div>
</>
    )
}