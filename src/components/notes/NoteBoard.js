//Author: Susie Stanley
//Purpose: Displays all user's notes

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { deleteNote, getNotesByUserId } from "./NoteManager";
import { NoteCard } from "./NoteCard";

export const NoteBoard = () => {
    const [notes, setNotes] = useState([])

    const getNotes = () => {
        console.log("getNotes function invoked")
        getNotesByUserId(sessionStorage.getItem("lifehacker_user")).then(response => {
            console.log("response is: ", response)
            setNotes(response);
        })
    }

    const handleDelete = (noteId) => {
        //invoke the delete function and re-direct to the list
        deleteNote(noteId).then(() => getNotesByUserId(sessionStorage.getItem("lifehacker_user")).then(setNotes))
        console.log("noteId is: ", noteId);
    };

    useEffect(() => {
        getNotes();
    }, [])

    return (
        <div className="section-flex">

            <div className="section-notes__header">
            Notes
            </div> 

            <div className="section__content">
                <Link to={`/notes/create`}>
                <button className="add__note">+ Add Note</button>
                </Link>
            </div>

            <div className="container">
                {notes.map(note => <NoteCard key={note.id} note={note} handleDelete={handleDelete} />)}
            </div>

        </div>
    )
}