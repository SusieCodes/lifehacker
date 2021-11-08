//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add a wishlist

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addWishlist } from "./ListManager";
import { WelcomeBar } from "../../components/navbar/WelcomeBar";
import "./List.css";
import "../LifeHacker.css";

export const WishlistForm = () => {
  const [conflictDialog, setConflictDialog] = useState(false);

  // Defining initial state of the form inputs with useState()
  const [wishlist, setWishlist] = useState({
    item: "",
    isCompleted: false,
    store: "",
    url: "",
    notes: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const history = useHistory();

  // When a field changes, it updates state
  // The return will re-render and display based on the values in state
  const ResetForm = () => {
    setWishlist({
      item: "",
      isCompleted: false,
      store: "",
      url: "",
      notes: "",
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    });
  };

  const handleControlledInputChange = (evt) => {
    /* Because we are changing a state object or array,
		we are creating a copy, making changes, and then setting state */
    const newWishlist = { ...wishlist };
    let selectedVal = evt.target.value;

    /* Sets the property to the new value
		using object bracket notation. */
    newWishlist[evt.target.id] = selectedVal;
    // update state
    setWishlist(newWishlist);
  };

  const handleSave = (evt) => {
    evt.preventDefault(); //Prevents the browser from submitting the form

    if (wishlist.item === "" || wishlist.store === "") {
      setConflictDialog(true);
    } else {
      addWishlist(wishlist).then(() => history.push("/lists"));
    }
  };

  return (
    <>
      <div className="page">
        <WelcomeBar title="Add New Wishlist" />

        <div className="form-flex">
          <fieldset className="form">
            <dialog className="dialog" open={conflictDialog}>
              <div className="dialog-forms">Please fill in all fields</div>
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
                maxLength="20"
                onChange={handleControlledInputChange}
                required
                autoFocus
                className="form__group--edit"
                placeholder="Wishlist item"
                value={wishlist?.item}
              />
            </div>

            <div className="form__group">
              <label htmlFor="store">Store: </label>
              <input
                type="text"
                id="store"
                maxLength="10"
                onChange={handleControlledInputChange}
                required
                className="form__group--edit"
                placeholder="Where to buy?"
                value={wishlist?.store}
              />
            </div>

            <div className="form__group">
              <label htmlFor="url">URL: </label>
              <input
                type="text"
                id="url"
                maxLength="400"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder="Add link here"
                value={wishlist?.url}
              />
            </div>

            <div className="form__group">
              <label htmlFor="notes">Notes: </label>
              <input
                type="text"
                id="notes"
                maxLength="120"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder="More Info"
                value={wishlist?.notes}
              />
            </div>
          </fieldset>

          <div className="form-btns">
            <button className="form-btn" onClick={handleSave}>
              Submit
            </button>

            <button className="form-btn" onClick={ResetForm}>
              Reset Form
            </button>

            <button className="form-btn" onClick={() => history.push("/lists")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
