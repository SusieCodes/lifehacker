//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing wishlist

import React, { useState, useEffect } from "react";
import { updateWishlist, getWishlistById } from "./ListManager";
import { useParams, useHistory } from "react-router-dom";
import { WelcomeBar } from "../navbar/WelcomeBar";
import "./List.css";
import "../LifeHacker.css";

export const WishlistEditForm = () => {
  // Defining initial state of the form inputs with useState()
  const [wishlist, setWishlist] = useState({
    item: "",
    isCompleted: false,
    store: "",
    url: "",
    notes: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [conflictDialog, setConflictDialog] = useState(false);

  const { wishlistId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...wishlist };
    stateToChange[evt.target.id] = evt.target.value;
    setWishlist(stateToChange);
  };

  const updateExistingWishlist = (evt) => {
    evt.preventDefault();

    // This is an edit, so we need the id
    const editedWishlist = {
      id: wishlistId,
      item: wishlist?.item,
      isCompleted: wishlist?.isCompleted,
      store: wishlist?.store,
      url: wishlist?.url,
      notes: wishlist?.notes,
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    };

    if (wishlist.item === "") {
      setConflictDialog(true);
      setIsLoading(false);
    } else {
      updateWishlist(editedWishlist).then(() => history.push("/lists"));
    }
  };

  useEffect(() => {
    getWishlistById(wishlistId).then((wishlist) => {
      setWishlist(wishlist);
      setIsLoading(false);
    });
  }, [wishlistId]);

  return (
    <>
      <div className="page">
        <WelcomeBar title="Edit Wishlist" />

        <div className="form-flex">
          <fieldset className="form">
            <dialog className="dialog" open={conflictDialog}>
              <div className="dialog-forms">Please enter a wishlist item</div>
              <button
                className="button-close"
                onClick={(e) => setConflictDialog(false)}
              >
                Close
              </button>
            </dialog>
            <div className="form__group">
              <label htmlFor="item">Item: </label>
              <input
                type="text"
                id="item"
                maxLength="25"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={wishlist?.item}
              />
            </div>

            <div className="form__group">
              <label htmlFor="store">Store: </label>
              <input
                type="text"
                id="store"
                maxLength="25"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={wishlist?.store}
              />
            </div>

            <div className="form__group">
              <label htmlFor="url">URL: </label>
              <input
                type="text"
                id="url"
                maxLength="400"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={wishlist?.url}
              />
            </div>

            <div className="form__group">
              <label htmlFor="notes">Notes: </label>
              <input
                type="text"
                id="notes"
                maxLength="120"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                value={wishlist?.notes}
              />
            </div>
          </fieldset>

          <div className="form-btns">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingWishlist}
              className="form-btn"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={() => history.push(`/lists`)}
              className="form-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
