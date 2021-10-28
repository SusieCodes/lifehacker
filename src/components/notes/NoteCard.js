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
        {/* <div className="note-card">
          <div className="note-info">
            <div className="note-title">
              <strong>Title: {note?.title}</strong>
            </div>

            <div className="note-text">{note.text}</div>
          </div>

          <div className="note-icons">
            <div className="note-delete" onClick={() => handleEdit(note?.id)}>
              <FaEdit className="note-edit-icon" />
            </div>

            <div className="note-delete" onClick={() => handleDelete(note?.id)}>
              <FaTrash className="note-delete-icon" />
            </div>
          </div>
        </div> */}

        <div className="noteboard-note__wrapper">
          <div className="noteboard-note">
            <div className="noteboard-note__text">
              <div className="note-top-text">{note?.title}</div>

              <div className="note-bottom-text">{note?.text}</div>
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
