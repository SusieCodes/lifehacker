//Author: Susie Stanley
//Purpose: Defines component JournalDashList that renders a list of journal entry titles to the dashboard

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { JournalDashCard } from "./JournalDashCard";
import { getJournalsByUserId, deleteJournal } from "./JournalManager";

export const JournalDashList = () => {
  // The initial state is an empty array
  const [firstFewItems, setFirstFewItems] = useState([]);

  // grabs all Journals from API, makes a copy, slices the first 5 items to display on dashboard
  const getJournals = () => {
    const JournalList = getJournalsByUserId(
      sessionStorage.getItem("lifehacker_user")
    ).then((journals) => {
      const copyOfJournals = [...journals];
      const listForDash = copyOfJournals.slice(0, 4);
      setFirstFewItems(listForDash);
    });
    return JournalList;
  };

  // deletes Journal when button clicked
  const handleDelete = (id) => {
    deleteJournal(id).then(() => {
      getJournals();
    });
  };

  // invokes getJournals on first render only
  useEffect(() => {
    getJournals();
  }, []);

  return (
    <>
      {firstFewItems[0] ? (
        <>
          <div className="dash-journal__list">
            {firstFewItems.map((journal) => (
              <Link to="/journals">
                <JournalDashCard
                  key={journal?.id}
                  journal={journal}
                  handleDelete={handleDelete}
                />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div>No Journals Yet</div>
      )}
    </>
  );
};
