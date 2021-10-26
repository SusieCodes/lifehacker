//Author: Susie Stanley
//Purpose: Displays all user's connections (friends/family)

import React, { useState, useEffect } from 'react'
import { deleteConnection, getConnectionsByUserId } from './ConnectionManager'
import { ConnectionDashCard } from './ConnectionDashCard'
import { ConnectionDummyCard } from './ConnectionDummyCard'

export const ConnectionDashList = () => {
  const [connections, setConnections] = useState([])

  //gets all the user's connections and sets it to state
  const getConnections = () => {
    getConnectionsByUserId(sessionStorage.getItem('lifehacker_user')).then(
      (connectionsFromAPI) => {
        let firstFew = connectionsFromAPI.splice(0, 5)
        setConnections(firstFew)
      }
    )
  }

  const handleDelete = (connectionId) => {
    //invokes the delete function and re-direct to the list
    deleteConnection(connectionId).then(() =>
      getConnectionsByUserId(sessionStorage.getItem('lifehacker_user')).then(
        setConnections
      )
    )
  }

  // invokes getConnections on first render only
  useEffect(() => {
    getConnections()
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

          <div className="dc-icons"></div>
        </div>

        {/* ternary statement that show cards if they exist and message if none exist yet */}
        {connections[0] ? (
          <div className="container">
            {connections.map((connection) => (
              <ConnectionDashCard
                key={connection.id}
                connection={connection}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <div className="container">
            <ConnectionDummyCard />
          </div>
        )}
      </div>
    </>
  )
}
