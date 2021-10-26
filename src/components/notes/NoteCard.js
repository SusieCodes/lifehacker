//Author: Susie Stanley
//Purpose: Creates and displays individual note cards for a single note that is passed as a prop

import React from "react"
import { Link } from "react-router-dom";
// import {FaEdit, FaTrash } from "react-icons/fa"

export const NoteCard = ({ note, handleDelete }) => {
    return (
    <>
        <div className="note-card">
        
          <div className="note-info">

            <div><strong>Title:  {note?.title}</strong></div>

            <div>{note.text}</div>

          </div>

          <div className="remove-item">

            <Link to={`/notes/${note.id}/edit`}><button className="button sm">edit icon</button></Link>

            <button type="button" className="button sm" onClick={() => handleDelete(note.id)}>delete icon</button>


          </div>

        </div>
    </>
    )
}



