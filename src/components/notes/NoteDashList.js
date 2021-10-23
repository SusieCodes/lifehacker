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

// deletes Activity when button clicked
  const handleDelete = (id) => {
    deleteNote(id)
    .then(() => {
      getNote()
    });
  }
  
// getFutureActivities gets all future notes from API and saves the array to state as 'futureActivities' on first render only
  useEffect(() => {
    getNote();
  }, []);

  return (
        <>
  
          {<NoteDashCard
            key={recentNote?.id}
            recentNote={recentNote}
            handleDelete={handleDelete} /> }
        </>
  );
};
