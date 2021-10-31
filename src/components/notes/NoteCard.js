//Author: Susie Stanley
//Purpose: Creates and displays individual note cards for a single note that is passed as a prop

import React from "react";
import { useHistory } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../LifeHacker.css";
import "../dashboard/Dashboard.css";
import "./Note.css";

export const NoteCard = ({ note, handleDelete }) => {
  const handleEdit = () => {
    history.push(`/notes/${note?.id}/edit`);
  };

  const history = useHistory();

  return (
    <>
      <div className="note-card-list">
        <div className="noteboard-note__wrapper">
          <div className="noteboard-note">
            <div className="noteboard-note__text">
              <div className="note-top-text">
                <div className="text-wrapper">{note?.title}</div>
              </div>

              <div className="note-bottom-text">
                <div className="text-wrapper">{note?.text}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="noteboard-icons">
          <div
            className="noteboard-delete"
            onClick={() => handleEdit(note?.id)}
          >
            <FaEdit className="noteboard-edit-icon" />
          </div>

          <div
            className="noteboard-delete"
            onClick={() => handleDelete(note?.id)}
          >
            <FaTrash className="noteboard-delete-icon" />
          </div>
        </div>
      </div>
    </>
  );
};
