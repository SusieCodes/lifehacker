//Author: Susie Stanley
//Purpose: Displays all user's connections (friends/family)

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { deleteConnection, getConnectionsByUserId } from "./ConnectionManager";
import { ConnectionCard } from "./ConnectionCard";

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
        <div className="section-flex">

            <div className="section-connections__header">
            Connections
            </div> 

            <div className="section__content">
                <Link to={`/connections/create`}>
                <button className="add__connection">+ Add Connection</button>
                </Link>
            </div>

            <div className="container">
                {connections.map(connection => <ConnectionCard key={connection.id} connection={connection} handleDelete={handleDelete} />)}
            </div>

        </div>
    )
}