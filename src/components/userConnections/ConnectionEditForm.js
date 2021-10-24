//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing connection


import React, { useState, useEffect } from "react"
import { update, getConnectionById } from "./ConnectionManager"
import { useParams, useHistory } from "react-router-dom"
import { formatDate } from "../helper"
import "./Connections.css"

export const ConnectionEditForm = () => {
  const [connection, setConnection] = useState(
    { 
      // userId: "",
      name: "", 
      // image: "",
      // email: "",
      // phone: "",
      // address: "",
      // city: "",
      // stateProvince: "",
      // zipCode: "",
      // country: "",
      // work: "",
      // relationship: "",
      // bday: "",
      // family: "",
      // pets: "",
      // howWeMet: "",
      // giftIdeas: "",
      // faveDrink: "",
      // faveDessert: "",
      // notes: ""
      // isFave: false
      // timestamp: Date.now()
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

    // This is an edit, so we need the info
    const editedConnection = {
      id: connectionId,
      // userId: parseInt(sessionStorage.getItem("lifehacker_user")),
      name: connection?.name,
      // image: connection?.image,
      // email: connection?.email,
      // phone: connection?.phone,
      // address: connection?.address,
      // city: connection?.city,
      // stateProvince: connection?.stateProvince,
      // zipCode: connection?.zipCode,
      // country: connection?.country,
      // work: connection?.work,
      // relationship: connection?.relationship,
      // bday: connection?.bday,
      // family: connection?.family,
      // pets: connection?.pets,
      // howWeMet: connection?.howWeMet,
      // giftIdeas: connection?.giftIdeas,
      // faveDrink: connection?.faveDrink,
      // faveDessert: connection?.faveDessert,
      // notes: connection?.notes
      // timestamp: connection?.timestamp,
      // isFave: connection?.isFave,
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
    <div className="page">

      <div className="page-title__flex">

      <div className="page-title__left">Welcome <span className="welcome-name">{sessionStorage.getItem("lifehacker_username")}</span></div>

      <div className="page-title__headline">Edit Connection</div>

      <div className="page-title__right">Today: &nbsp;&nbsp;<span className="todays-date">{formatDate(Date.now())}</span></div>

    </div>

    <div className="form__flex">

        <form>

          <fieldset>

            <div className="form__group">

              <label htmlFor="name">Name:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="name"
                value={connection?.name}
              />

              {/* <label htmlFor="email">Email:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="email"
                value={connection?.email}
              /> */}

              {/* <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="phone"
                value={connection?.phone}
              /> */}

              {/* <label htmlFor="address">Address:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="address"
                value={connection?.address}
              /> */}

              {/* <label htmlFor="city">City:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="city"
                value={connection?.city}
              /> */}

              {/* <label htmlFor="stateProvince">State/Province:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="stateProvince"
                value={connection?.stateProvince}
              /> */}

              {/* <label htmlFor="zipCode">Zipcode:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="zipCode"
                value={connection?.zipCode}
              /> */}

              {/* <label htmlFor="country">Country:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="country"
                value={connection?.country}
              /> */}

              {/* <label htmlFor="work">Work:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="work"
                value={connection?.work}
              /> */}

              {/* <label htmlFor="relationship">Relationship:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="relationship"
                value={connection?.relationship}
              /> */}
 
              {/* <label htmlFor="bday">Birthday:</label>
              <input
                type="date"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="bday"
                value={connection?.bday}
              /> */}

              {/* <label htmlFor="family">Family:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="family"
                value={connection?.family}
              /> */}

              {/* <label htmlFor="pets">Pets:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="pets"
                value={connection?.pets}
              /> */}

              {/* <label htmlFor="howWeMet">How We Met:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="howWeMet"
                value={connection?.howWeMet}
              /> */}

              {/* <label htmlFor="giftIdeas">Gift Ideas:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="giftIdeas"
                value={connection?.giftIdeas}
              /> */}

              {/* <label htmlFor="faveDrink">Favorite Drink:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="faveDrink"
                value={connection?.faveDrink}
              /> */}

              {/* <label htmlFor="faveDessert">Favorite Dessert:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="faveDessert"
                value={connection?.faveDessert}
              /> */}

              {/* <label htmlFor="notes">Notes:</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="notes"
                value={connection?.notes}
              /> */}

            </div>

          </fieldset>

          <div className="form__btns">
              
              <button
                type="button" 
                disabled={isLoading}
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

    </div>
    </>
  );
}