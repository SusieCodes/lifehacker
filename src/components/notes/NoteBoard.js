//Author: Susie Stanley
//Purpose: Displays all user's notes

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteNote, getNotesByUserId } from "./NoteManager";
import { NoteCard } from "./NoteCard";
import { WelcomeBar2 } from "../../components/navbar/WelcomeBar2";
import "../LifeHacker.css";
import "./Note.css";

export const NoteBoard = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    getNotesByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (notesFromAPI) => {
        setNotes(notesFromAPI);
      }
    );
  };

  const handleDelete = (id) => {
    deleteNote(id).then(() => {
      getNotes();
    });
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div className="page">
        <WelcomeBar2 title="Notes" />

        <div className="section-flex">
          <div className="section-flex__content">
            <Link to={`/notes/create`}>
              <button className="add-note">+ Add Note</button>
            </Link>
          </div>

          <div className="board-container__note">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} handleDelete={handleDelete} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
