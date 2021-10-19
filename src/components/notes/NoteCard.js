//Author: Susie Stanley
//Purpose: Creates and displays individual note cards for a single note that is passed as a prop

import React from "react"
import { Link } from "react-router-dom";
// import {FaEdit, FaTrash } from "react-icons/fa"


const formatDate = (obj) => {
  const date = new Date(obj);
  const formattedDate = date.toDateString(); // converts date object to a string that displays in format "Sun Jul 22 2018"
  return formattedDate;
}

export const NoteCard = ({ note, handleDeleteNote, card }) => {
    return (
    <>
        <div className={card}>
        
          <div className="note__info">

            <div><strong>Title:  {note?.title}</strong></div>

            <div>{formatDate(note?.dayTime)}</div>

            <div>{note?.post}</div>

          </div>

          <div className="remove__item">

            <Link to={`/notes/${note?.id}/edit`}><button className="button sm">edit icon</button></Link>

            <button type="button" className="button sm" onClick={() => handleDeleteNote(note?.id)}>delete icon</button>


          </div>

        </div>
    </>
    )
}



