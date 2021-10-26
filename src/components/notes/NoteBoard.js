//Author: Susie Stanley
//Purpose: Displays all user's notes

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { deleteNote, getNotesByUserId } from './NoteManager'
import { NoteCard } from './NoteCard'
import { WelcomeBar } from '../../components/navbar/WelcomeBar'

export const NoteBoard = () => {
  const [notes, setNotes] = useState([])

  const getNotes = () => {
    getNotesByUserId(sessionStorage.getItem('lifehacker_user')).then(
      (notesFromAPI) => {
        setNotes(notesFromAPI)
      }
    )
  }

  const handleDelete = (id) => {
    deleteNote(id).then(() => {
      getNotes()
    })
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <div className="page">
      <WelcomeBar title="Notes" />

      <div className="section-flex">
        <div className="section-notes__header">Notes</div>

        <div className="section__content">
          <Link to={`/notes/create`}>
            <button className="add__note">+ Add Note</button>
          </Link>
        </div>

        <div className="container">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  )
}
