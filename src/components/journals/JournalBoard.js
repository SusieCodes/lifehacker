//Author: Susie Stanley
//Purpose: Output List of Journal Entries to the DOM

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteJournal, getJournalsByUserId } from "./JournalManager";
import { JournalCard } from "./JournalCard";
import { WelcomeBar2 } from "../../components/navbar/WelcomeBar2";
import "../LifeHacker.css";
import "./Journal.css";

export const JournalBoard = () => {
  const [journals, setJournals] = useState([]);

  const getJournals = () => {
    getJournalsByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (userJournals) => {
        setJournals(userJournals);
      }
    );
  };

  const handleDelete = (id) => {
    deleteJournal(id).then(() => {
      getJournals();
    });
  };

  useEffect(() => {
    getJournals();
  }, []);
  return (
    <>
      <div className="page">
        <WelcomeBar2 title="Journal" />

        <div className="section-flex">
          <div className="section-flex__content">
            <Link to={`/journals/create`}>
              <button className="add-journal">+ Add Entry</button>
            </Link>
          </div>

          <div className="board-container__journal">
            <div className="journal-card-list">
              {journals.map((journal) => (
                <JournalCard
                  key={journal.id}
                  journal={journal}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
