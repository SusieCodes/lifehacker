//Author: Susie Stanley
//Purpose: Creates and displays individual note cards for a single note that is passed as a prop

import React from "react"
import { FaTrash } from "react-icons/fa"


const formatDate = (obj) => {
  const date = new Date(obj);
  const formattedDate = date.toDateString(); // converts date object to a string that displays in format "Sun Jul 22 2018"
  return formattedDate;
}

export const NoteDashCard = ({ note, handleDelete }) => {
    return (
    <>

          <div className="dash-note">

              <div className="dash-note__col1">

            

              </div>

          </div>

          <div className="dash-note__col2">

            <button type="button" className="note-delete" onClick={() => handleDelete(note?.id)}><FaTrash className="delete-icon"/></button>

          </div>
    </>
    )
}