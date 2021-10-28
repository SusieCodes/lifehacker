//Author: Susie Stanley
//Purpose: Creates and displays individual journal entries that is passed as a prop

import React from "react";
import { useHistory } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { formatDate } from "../helper";
import "../LifeHacker.css";
import "./Journal.css";

export const JournalCard = ({ journal, handleDelete }) => {
  const handleEdit = () => {
    history.push(`/journals/${journal?.id}/edit`);
  };

  const history = useHistory();

  return (
    <>
      <div className="journal-card">
        <div className="journal-info">
          <div className="journal-title">{journal?.title}</div>
          <div className="journal-post">{journal?.post}</div>
          <div className="journal-date">
            <div className="journal-spacer">Posted On: </div>
            <div>{formatDate(journal?.dayTime)}</div>
          </div>
        </div>

        <div className="journal-icons">
          <div
            className="journal-delete"
            onClick={() => handleEdit(journal?.id)}
          >
            <FaEdit className="journal-edit-icon" />
          </div>

          <div
            className="journal-delete"
            onClick={() => handleDelete(journal?.id)}
          >
            <FaTrash className="journal-delete-icon" />
          </div>
        </div>
      </div>
    </>
  );
};
