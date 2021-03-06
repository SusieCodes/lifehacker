//Author: Susie Stanley
//Purpose: Displays all user's connections (friends/family)

import React, { useState, useEffect } from "react";
import { deleteConnection, getConnectionsByUserId } from "./ConnectionManager";
import { ConnectionDashCard } from "./ConnectionDashCard";
import { ConnectionDummyCard } from "./ConnectionDummyCard";
import { justMonthDayForSort, formatMilliForSort } from "../helper";
import "../dashboard/Dashboard.css";
import "../LifeHacker.css";

export const ConnectionDashList = () => {
  const [connections, setConnections] = useState([]);
  const [allBirthdays, setAllBirthdays] = useState([]);
  const [filteredBdays, setFilteredBdays] = useState([]);

  //gets the user's connections and sets it to state
  const getConnections = () => {
    getConnectionsByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (connectionsFromAPI) => {
        let firstFew = connectionsFromAPI.slice(0, 5);
        setConnections(firstFew);
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
        let firstFew = connectionsFromAPI.slice(0, 5);
        setConnections(firstFew);
      }
    );
  };

  //gets the user's connections sorted by bdays and sets it to state
  const getConnectionsByBday = () => {
    getConnectionsByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (connectionsFromAPI) => {
        const sortedByBday = connectionsFromAPI.sort(function (a, b) {
          return justMonthDayForSort(a.bday) - justMonthDayForSort(b.bday);
        });
        const hasBday = sortedByBday.filter((obj) => obj.bday.length > 5);
        setAllBirthdays(hasBday);
      }
    );
  };

  // takes array sorted by bday and filters through to separate them into before and after today's date then joins them together in order (starting today) and sets it to state
  const orderBdays = (arr) => {
    // below saves objects with bdays from first of year until today
    let beforeArray = arr.filter(
      (obj) => justMonthDayForSort(obj.bday) < formatMilliForSort(Date.now())
    );
    // below saves objects with bdays from today until end of year
    let afterArray = arr.filter(
      (obj) => justMonthDayForSort(obj.bday) > formatMilliForSort(Date.now())
    );
    // joins all objects back together with remaining bdays for this year first, then bdays starting again next year
    const joinedArray = afterArray.concat(beforeArray);
    setFilteredBdays(joinedArray);
  };

  const handleDelete = (connectionId) => {
    //invokes the delete function and re-direct to the list
    deleteConnection(connectionId).then(() => getConnections());
  };

  // invokes getConnections on first render only
  useEffect(() => {
    getConnections();
  }, []);

  // invokes orderBdays and watches allBirthdays for changes
  useEffect(() => {
    orderBdays(allBirthdays);
  }, [allBirthdays]);

  // takes the first 5 contacts off the filteredBdayArray
  useEffect(() => {
    let firstFew = filteredBdays.slice(0, 5);
    setConnections(firstFew);
  }, [filteredBdays]);

  return (
    <>
      <div className="section-connections">
        {/* this section is the category headers for the contact cards (using same div names as cards so spacing is identical) */}
        <div className="dash-connections-header">
          <div className="dc-header-info">
            <div className="dc-header-pic-name">
              <div className="dc-header-image"></div>

              <div className="dc-header-name bold">NAME</div>
            </div>

            <div className="dc-header-email bold">EMAIL</div>

            <div className="dc-header-phone bold">PHONE</div>

            <div className="dc-header-bday bold">BIRTHDAY</div>
          </div>

          <div className="connection-header-icons">
            <div className="c-board-icons">
              <div
                className="sort-connections"
                onClick={() => {
                  getConnectionsByFave();
                }}
              >
                Fave
              </div>
              <div
                className="sort-connections"
                onClick={() => {
                  getConnectionsByBday();
                }}
              >
                Bday
              </div>
              <div
                className="sort-connections"
                onClick={() => {
                  getConnections();
                }}
              >
                Recent
              </div>
            </div>
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
