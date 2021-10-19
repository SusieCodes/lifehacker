//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing connection


import React, { useState, useEffect } from "react"
import { update, getConnectionById } from "./ConnectionManager"
import { useParams, useHistory } from "react-router-dom"


export const ConnectionEditForm = () => {
  const [connection, setConnection] = useState(
    { 
      name: "", 
      image: "default.png",
      email: "",
      phone: "",
      address: "",
      city: "",
      stateProvince: "",
      zipCode: 0,
      work: "",
      relationship: "",
      birthday: "",
      family: "",
      pets: "",
      howWeMet: "",
      giftIdeas: "",
      favoriteDrink: "",
      favoriteDessert: ""
    });
  const [isLoading, setIsLoading] = useState(false);

  const {connectionId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...connection };
    stateToChange[evt.target.id] = evt.target.value;
    setConnection(stateToChange);
  };

  const updateExistingConnection = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedConnection = {
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
      name: "",
      image: "default.png",
      email: "",
      phone: "",
      address: "",
      city: "",
      stateProvince: "",
      zipCode: 0,
      work: "",
      relationship: "",
      birthday: "",
      family: "",
      pets: "",
      howWeMet: "",
      giftIdeas: "",
      favoriteDrink: "",
      favoriteDessert: "",
      id: connectionId
    };

  update(editedConnection)
    .then(() => history.push("/connections")
    )
  }

  useEffect(() => {
    getConnectionById(connectionId)
      .then(connection => {
        setConnection(connection);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
    <div className="form__flex">

        <form>

          <div className="form__title">Edit Connection
          </div>

          <fieldset>

            <div className="form__group">

              <label htmlFor="name">Connection Name:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="name"
                value={connection.name}
              />

              <label htmlFor="date">Connection Date:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="date"
                value={connection.date}
              />

              <label htmlFor="address">Connection Address:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="address"
                value={connection.address}
              />

              <label htmlFor="city">Connection City:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="city"
                value={connection.city}
              />

              <label htmlFor="zipcode">Connection Zipcode:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="zipcode"
                value={connection.zipcode}
              />

              <label htmlFor="notes">Connection Notes:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="notes"
                value={connection.notes}
              />

            </div>

          </fieldset>

          <div className="form__btns">
              
              <button
                type="button" disabled={isLoading}
                onClick={updateExistingConnection}
                className="form__btn">Submit
                </button>

              <button
                type="button"
                onClick={() => history.push(`/connections`)}
                className="form__btn">Cancel
                </button>

          </div>

        </form>

      </div>
    </>
  );
}