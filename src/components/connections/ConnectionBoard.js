//Author: Susie Stanley
//Purpose: Displays all user's connections (friends/family)

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteConnection, getConnectionsByUserId } from "./ConnectionManager";
import { ConnectionCard } from "./ConnectionCard";
import { ConnectionDummyCard } from "./ConnectionDummyCard";
import { WelcomeBar } from "../../components/navbar/WelcomeBar";
import { justMonthDayForSort } from "../helper";
import "../dashboard/Dashboard.css";
import "../LifeHacker.css";
import "../connections/Connections.css";

export const ConnectionBoard = () => {
  const [connections, setConnections] = useState([]);
  const [allBirthdays, setAllBirthdays] = useState([]);
  const [filteredBdayArr, setFilteredBdayArr] = useState([]);
  const getConnections = () => {
    getConnectionsByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (connectionsFromAPI) => {
        setConnections(connectionsFromAPI);
      }
    );
  };

  //gets the user's connections sorted by favorites and sets it to state
  const getConnectionsByFave = () => {
    getConnectionsByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (connectionsFromAPI) => {
        connectionsFromAPI.sort(function (a, b) {
          return b.isFave - a.isFave;
        });
        setConnections(connectionsFromAPI);
      }
    );
  };

  const getConnectionsByBday = () => {
    getConnectionsByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (connectionsFromAPI) => {
        const sortedByBday = connectionsFromAPI.sort(function (a, b) {
          return justMonthDayForSort(a.bday) - justMonthDayForSort(b.bday);
        });
        setAllBirthdays(sortedByBday);
        console.log("allBirthdays after being sorted is ", allBirthdays);
      }
    );
  };

  const filterBdays = (arr) => {
    const finalArray = arr.filter((obj) => obj.bday !== "");
    console.log("finalArray ", finalArray);
    setFilteredBdayArr(finalArray);
  };

  const handleDelete = (connectionId) => {
    //invoke the delete function and re-direct to the list
    deleteConnection(connectionId).then(() => getConnections());
  };

  useEffect(() => {
    getConnections();
  }, []);

  // invokes getConnections and watches onlyWithBday for changes
  useEffect(() => {
    filterBdays(allBirthdays);
  }, [allBirthdays]);

  // invokes getConnections and watches onlyWithBday for changes
  useEffect(() => {
    setConnections(filteredBdayArr);
  }, [filteredBdayArr]);

  return (
    <>
      <div className="page">
        <WelcomeBar title="Connections" />

        <div className="section-flex">
          <div className="section-flex__content">
            <Link to={`/connections/create`}>
              <button className="add-connection">+ Add Connection</button>
            </Link>
          </div>

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
              <div className="dc-icons">
                <button
                  className="sort-connections"
                  onClick={() => {
                    getConnectionsByFave();
                  }}
                >
                  Fave
                </button>
                <button
                  className="sort-connections"
                  onClick={() => {
                    getConnectionsByBday();
                  }}
                >
                  Bday
                </button>
                <button
                  className="sort-connections"
                  onClick={() => {
                    getConnections();
                  }}
                >
                  Recent
                </button>
              </div>
            </div>
          </div>

          {/* ternary statement that show cards if they exist and message if none exist yet */}
          {connections[0] ? (
            <div className="container-connections">
              {connections.map((connection) => (
                <ConnectionCard
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
      </div>
    </>
  );
};
