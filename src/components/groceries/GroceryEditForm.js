import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { getGroceryById, update } from "./GroceryManager";
import { WelcomeBar } from "../navbar/WelcomeBar";
import "./Grocery.css";
import "../LifeHacker.css";

export const GroceryEditForm = () => {
  const [grocery, setgrocery] = useState({
    text: "",
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
  });

  const [isLoading, setIsLoading] = useState(false);

  const { groceryId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...grocery };
    stateToChange[evt.target.id] = evt.target.value;
    setgrocery(stateToChange);
  };

  const updateExistinggrocery = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedGrocery = {
      text: grocery.text,
      userId: grocery.userId,
      id: groceryId,
    };

    update(editedGrocery).then(() => history.push("/groceries"));
  };
  useEffect(() => {
    getGroceryById(groceryId).then((grocery) => {
      setgrocery(grocery);
      setIsLoading(false);
    });
  }, [groceryId]);

  return (
    <div className="page">
      <WelcomeBar title="Edit Groceries" />

      <div className="form-flex">
        <fieldset className="form">
          <div className="form__group">
            <label htmlFor="text">Grocery Item</label>
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
            onClick={updateExistinggrocery}
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
