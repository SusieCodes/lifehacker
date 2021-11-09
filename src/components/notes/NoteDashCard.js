//Author: Susie Stanley
//Purpose: Creates and displays individual note cards for a single note that is passed as a prop

import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { changeFave } from "./NoteManager";

export const NoteDashCard = ({ recentNote, handleDelete }) => {
  const handleFave = (e) => {
    changeFave(recentNote.id, e.target.checked);
  };
  return (
    <>
      <div className="dash-note__wrapper">
        <Link to="/notes">
          <div className="dash-note">
            <div className="dash-note__text">
              <div className="top-text">
                {" "}
                <div className="dn-text-wrapper">{recentNote?.title}</div>
              </div>

              <div className="bottom-text">
                <div className="dn-text-wrapper">{recentNote?.text}</div>
              </div>
            </div>
          </div>
        </Link>

        <div className="dash-note__delete">
          <div
            className="note-delete"
            onClick={() => handleDelete(recentNote.id)}
          >
            <FaTrash className="n-delete-icon" />
          </div>
          <div className="dn-checkbox">
            <Checkbox
              color="error"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              defaultChecked={recentNote.isFave}
              onChange={(e) => handleFave(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
