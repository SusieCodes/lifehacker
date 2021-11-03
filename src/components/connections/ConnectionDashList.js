//Author: Susie Stanley
//Purpose: Displays all user's connections (friends/family)

import React, { useState, useEffect } from "react";
import {
  deleteConnection,
  getConnectionsByUserId,
  sortConnectionsByFave,
} from "./ConnectionManager";
import { ConnectionDashCard } from "./ConnectionDashCard";
import { ConnectionDummyCard } from "./ConnectionDummyCard";

export const ConnectionDashList = () => {
  const [connections, setConnections] = useState([]);

  //gets the user's connections and sets it to state
  const getConnections = () => {
    getConnectionsByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (connectionsFromAPI) => {
        connectionsFromAPI.sort(function (a, b) {
          return b.timestamp - a.timestamp;
        });
        let firstFew = connectionsFromAPI.splice(0, 5);
        setConnections(firstFew);
      }
    );
  };

  //gets the user's connections sorted by favoritesand sets it to state
  const getConnectionsByFave = () => {
    getConnectionsByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (connectionsFromAPI) => {
        connectionsFromAPI.sort(function (a, b) {
          return b.isFave - a.isFave;
        });
        console.log(connectionsFromAPI);
        let firstFew = connectionsFromAPI.splice(0, 5);
        setConnections(firstFew);
      }
    );
  };

  const handleDelete = (connectionId) => {
    //invokes the delete function and re-direct to the list
    deleteConnection(connectionId).then(() => getConnections());
  };

  // invokes getConnections on first render only
  useEffect(() => {
    getConnections();
  }, []);

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
            <button
              className="sort-fave"
              onClick={() => {
                getConnectionsByFave();
              }}
            >
              Fave
            </button>
          </div>
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
  );
};
