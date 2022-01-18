import React, { useState } from "react";
import { useHistory } from "react-router";
import { addGrocery } from "./GroceryManager";
import { WelcomeBar2 } from "../navbar/WelcomeBar2";
import "./Grocery.css";
import "../LifeHacker.css";

export const GroceryForm = () => {
  const [conflictDialog, setConflictDialog] = useState(false);

  const [grocery, setGrocery] = useState({
    text: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const history = useHistory();

  const ResetForm = () => {
    setGrocery({
      text: "",
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    });
  };

  const handleControlledInputChange = (event) => {
    const newGrocery = { ...grocery };
    let selectedVal = event.target.value;
    newGrocery[event.target.id] = selectedVal;
    setGrocery(newGrocery);
  };

  const handleSave = (evt) => {
    evt.preventDefault(); // Prevents the browser from submitting the form

    if (grocery.text === "") {
      setConflictDialog(true);
    } else {
      addGrocery(grocery).then(() => history.push("/groceries"));
    }
  };

  return (
    <>
      <div className="page">
        <WelcomeBar2 title="Add New Groceries" />

        <div className="form-flex">
          <fieldset className="form-grocery">
            <dialog className="dialog" open={conflictDialog}>
              <div className="dialog-forms">Please add a grocery item</div>
              <button
                className="button-close"
                onClick={(e) => setConflictDialog(false)}
              >
                Close
              </button>
            </dialog>

            <div className="form__group">
              <label htmlFor="text" className="grocery-item-label">
                Grocery Item:{" "}
              </label>
              <input
                type="text"
                id="text"
                maxLength="20"
                onChange={handleControlledInputChange}
                required
                autoFocus
                className="form__group--edit"
                placeholder="e.g. Vegetables"
                value={grocery.text}
              />
            </div>
          </fieldset>

          <div className="form-btns">
            <button type="button" className="form-btn" onClick={handleSave}>
              Submit
            </button>

            <button type="button" className="form-btn" onClick={ResetForm}>
              Reset Form
            </button>

            <button
              type="button"
              className="form-btn"
              onClick={() => {
                history.push("/groceries");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
