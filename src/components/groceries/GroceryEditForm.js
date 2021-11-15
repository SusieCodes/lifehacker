import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { getGroceryById, update } from "./GroceryManager";
import { WelcomeBar2 } from "../navbar/WelcomeBar2";
import "./Grocery.css";
import "../LifeHacker.css";

export const GroceryEditForm = () => {
  const [grocery, setGrocery] = useState({
    text: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const [conflictDialog, setConflictDialog] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { groceryId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...grocery };
    stateToChange[evt.target.id] = evt.target.value;
    setGrocery(stateToChange);
  };

  const updateExistingGrocery = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedGrocery = {
      text: grocery.text,
      userId: grocery.userId,
      id: groceryId,
    };

    if (grocery.text === "") {
      setConflictDialog(true);
      setIsLoading(false);
    } else {
      update(editedGrocery).then(() => history.push("/groceries"));
    }
  };

  useEffect(() => {
    getGroceryById(groceryId).then((grocery) => {
      setGrocery(grocery);
      setIsLoading(false);
    });
  }, [groceryId]);

  return (
    <div className="page">
      <WelcomeBar2 title="Edit Groceries" />

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
              Grocery Item:
            </label>
            <input
              type="text"
              id="text"
              maxLength="20"
              required
              className="form__group--edit"
              onChange={handleFieldChange}
              value={grocery.text}
            />
          </div>
        </fieldset>

        <div className="form-btns">
          <button
            type="button"
            disabled={isLoading}
            onClick={updateExistingGrocery}
            className="form-btn"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={() => history.push(`/groceries`)}
            className="form-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
