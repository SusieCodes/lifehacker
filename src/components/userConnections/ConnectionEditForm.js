//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing connection


import React, { useState, useEffect } from "react"
import { update, getConnectionById } from "./ConnectionManager"
import { useParams, useHistory } from "react-router-dom"
import { formatDate } from "../helper"
import "./Connections.css"
import "../LifeHacker.css"

export const ConnectionEditForm = () => {
  const [connection, setConnection] = useState(
    { 
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
      name: "", 
      image: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      stateProvince: "",
      zipCode: "",
      country: "",
      work: "",
      relationship: "",
      bday: "",
      family: "",
      pets: "",
      howWeMet: "",
      giftIdeas: "",
      faveDrink: "",
      faveDessert: "",
      notes: "",
      personality: "",
      enneagram: "",
      timestamp: Date.now()
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
      userId: connection.userId,
      name: connection.name,
      image: connection.image,
      email: connection.email,
      phone: connection.phone,
      address: connection.address,
      city: connection.city,
      stateProvince: connection.stateProvince,
      zipCode: connection.zipCode,
      country: connection.country,
      work: connection.work,
      relationship: connection.relationship,
      bday: connection.bday,
      family: connection.family,
      pets: connection.pets,
      howWeMet: connection.howWeMet,
      giftIdeas: connection.giftIdeas,
      faveDrink: connection.faveDrink,
      faveDessert: connection.faveDessert,
      notes: connection.notes,
      zodiac: connection.zodiac,
      personality: connection.personality,
      enneagram: connection.enneagram,
      timestamp: connection.timestamp
    };

  update(editedConnection)
    .then(() => history.push("/connections")
    )
  }

  useEffect(() => {
    getConnectionById(connectionId)
      .then(connection => {
        setConnection(connection[0]);
        setIsLoading(false);
      });
  }, [connectionId]); //wont cause infinite look because it comes from params

console.log("connection is ", connection)

  return (
    <>
    <div className="page">

      <div className="page-title__flex">

        <div className="page-title__left">Welcome <span className="welcome-name">{sessionStorage.getItem("lifehacker_username")}</span></div>

        <div className="page-title__headline">Edit Connection</div>

        <div className="page-title__right">Today: &nbsp;&nbsp;<span className="todays-date">{formatDate(Date.now())}</span></div>

      </div>

      <div className="form-flex">

            <fieldset className="form">

              <div className="form__group">

                <label htmlFor="name">Name:</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="name"
                  value={connection.name}
                />
              </div>

              <div className="form__group">
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="email"
                  value={connection.email}
                />
              </div>

              <div className="form__group">
                <label htmlFor="phone">Phone:</label>
                <input
                  name="phone"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="phone"
                  value={connection.phone}
                />
              </div>

              <div className="form__group">
                <label htmlFor="address">Address:</label>
                <input
                  name="address"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="address"
                  value={connection.address}
                />
              </div>

              <div className="form__group">
                <label htmlFor="city">City:</label>
                <input
                  name="city"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="city"
                  value={connection.city}
                />
              </div>

              <div className="form__group">
                <label htmlFor="stateProvince">State/Province:</label>
                <input
                  name="stateProvince"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="stateProvince"
                  value={connection.stateProvince}
                />
              </div>

              <div className="form__group">
                <label htmlFor="zipCode">Zipcode:</label>
                <input
                  name="zipCode"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="zipCode"
                  value={connection.zipCode}
                />
              </div>

              <div className="form__group">
                <label htmlFor="country">Country:</label>
                <input
                  name="country"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="country"
                  value={connection.country}
                />
              </div>

              <div className="form__group">
                <label htmlFor="work">Work:</label>
                <input
                  name="work"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="work"
                  value={connection.work}
                />
              </div>

              <div className="form__group">
                <label htmlFor="relationship">Relationship:</label>
                <input
                  name="relationship"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="relationship"
                  value={connection.relationship}
                />
              </div>

              <div className="form__group">
                <label htmlFor="bday">Birthday:</label>
                <input
                  name="bday"
                  type="date"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="bday"
                  value={connection.bday}
                />
              </div>

              <div className="form__group">
                <label htmlFor="family">Family:</label>
                <input
                  name="family"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="family"
                  value={connection.family}
                />
              </div>

              <div className="form__group">
                <label htmlFor="pets">Pets:</label>
                <input
                  name="pets"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="pets"
                  value={connection.pets}
                />
              </div>

              <div className="form__group">
                <label htmlFor="howWeMet">How We Met:</label>
                <input
                  name="howWeMet"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="howWeMet"
                  value={connection.howWeMet}
                />
              </div>

              <div className="form__group">
                <label htmlFor="giftIdeas">Gift Ideas:</label>
                <input
                  name="giftIdeas"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="giftIdeas"
                  value={connection.giftIdeas}
                />
              </div>

              <div className="form__group">
                <label htmlFor="faveDrink">Favorite Drink:</label>
                <input
                  name="faveDrink"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="faveDrink"
                  value={connection.faveDrink}
                />
              </div>

              <div className="form__group">
                <label htmlFor="faveDessert">Favorite Dessert:</label>
                <input
                  name="faveDessert"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="faveDessert"
                  value={connection.faveDessert}
                />
              </div>

              <div className="form__group">
                <label htmlFor="notes">Notes:</label>
                <input
                  name="notes"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="notes"
                  value={connection.notes}
                />
              </div>

              <div className="form__group">
                <label htmlFor="zodiac">Zodiac:</label>
                <input
                  name="zodiac"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="zodiac"
                  value={connection.zodiac}
                />
              </div> 

              <div className="form__group">
                <label htmlFor="personality">Personality:</label>
                <input
                  name="personality"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="personality"
                  value={connection.personality}
                />
              </div>

              <div className="form__group">
                <label htmlFor="enneagram">Enneagram:</label>
                <input
                  name="enneagram"
                  type="text"
                  className="form__group--edit"
                  onChange={handleFieldChange}
                  id="enneagram"
                  value={connection.enneagram}
                />
              </div>

            </fieldset>

            <div className="form-btns">
                
                <button
                  type="button" 
                  disabled={isLoading}
                  className="form-btn"
                  onClick={updateExistingConnection}>
                    Submit
                  </button>

                <button
                  type="button"
                  className="form-btn"
                  onClick={() => history.push(`/connections`)}>
                    Cancel
                  </button>

            </div>

        </div>

       

    </div>
    </>
  );
}