//Author: Susie Stanley
//Purpose: Defines component NoteDashList that renders the most recent note to the dashboard

import React, { useState, useEffect } from 'react';
import { NoteDashCard } from './NoteDashCard';
import { getNotesByUserId, deleteNote } from './NoteManager';

export const NoteDashList = () => {
  // The initial state is an empty array
  const [ recentNote, setRecentNote ] = useState({})

  // grabs all notes from API, splices off the first one and sets it to state
  const getNote = () => {
    return getNotesByUserId(sessionStorage.getItem("lifehacker_user")).then(notesFromAPI => {
      console.log("notesFromAPI is", notesFromAPI)
        let firstNote = notesFromAPI.splice(0, 1);
        setRecentNote(firstNote[0])
    });
  };

// deletes note when button clicked
  const handleDelete = (id) => {
    deleteNote(id)
    .then(() => {
      getNote()
    });
  }
  
// getNote gets most recent note from API and saves it to state on first render only
  useEffect(() => {
    getNote();
  }, []);

console.log("recentNote is saved as: ", recentNote)

  return (
        <> {/* ternary statement that show cards if they exist and message if none exist yet */}
          {recentNote ?
            <NoteDashCard
              key={recentNote?.id}
              recentNote={recentNote}
              handleDelete={handleDelete} />
            : <div className="note-spacing">No Notes Yet</div>
          } 
        </>
  );
};
