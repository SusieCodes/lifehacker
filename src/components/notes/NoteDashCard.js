//Author: Susie Stanley
//Purpose: Creates and displays individual note cards for a single note that is passed as a prop

import React from "react"
import { FaTrash } from "react-icons/fa"


const formatDate = (obj) => {
  const date = new Date(obj);
  const formattedDate = date.toDateString(); // converts date object to a string that displays in format "Sun Jul 22 2018"
  return formattedDate;
}

export const NoteDashCard = ({ recentNote, handleDelete }) => {
    return (
    <>
        <div className="dash-note__wrapper">

          <div className="dash-note">

            <div className="dash-note__text">

              <div className="top-text">
                {recentNote.title}
              </div>

              <div className="bottom-text">
                {recentNote.text}
              </div>

            </div>

          </div>

          <div className="dash-note__delete">

            <button type="button" className="note-delete" onClick={() => handleDelete(recentNote?.id)}><FaTrash className="delete-icon"/></button>

          </div>

        </div>
    </>
    )
}