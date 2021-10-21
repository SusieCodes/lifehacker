//Author: Susie Stanley
//Purpose: Defines component ActivityBoard that renders a list of all the upcoming and past notes

import React, { useState, useEffect } from 'react';
import { NoteDashCard } from './NoteDashCard';
import { getAllNotes, deleteNote } from './NoteManager';

export const NoteDashList = () => {
  // The initial state is an empty array
  const [ recentNote, setRecentNote ] = useState({})

// grabs all notes from API, splices off the first one and sets it to state
const getNote = () => {
  return getAllNotes().then(notesFromAPI => {
      let firstNote = notesFromAPI.splice(0, 1);
      setRecentNote(firstNote)
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
