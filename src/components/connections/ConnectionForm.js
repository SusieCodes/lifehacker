//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add a connection

import React, { useState } from "react";
import { useHistory } from "react-router";
import { addConnection } from "./ConnectionManager";
import { WelcomeBar } from "../../components/navbar/WelcomeBar";
import { Upload } from "../uploads/Upload";
import Axios from "axios";
import { Image } from "cloudinary-react";
import "./Connections.css";
import "../LifeHacker.css";

export const ConnectionForm = () => {
  const [conflictDialog, setConflictDialog] = useState(false);

  // Defining initial state of the form inputs with useState
  const [connection, setConnection] = useState({
    userId: parseInt(sessionStorage.getItem("lifehacker_user")),
    name: "",
    image: "default.png",
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
    zodiac: "",
    personality: "",
    enneagram: "",
    timestamp: Date.now(),
  });

  const history = useHistory();

  const ResetForm = () => {
    setConnection({
      userId: parseInt(sessionStorage.getItem("lifehacker_user")),
      name: "",
      image: "default.png",
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
      zodiac: "",
      personality: "",
      enneagram: "",
      timestamp: Date.now(),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleControlledInputChange = (evt) => {
    const newConnection = { ...connection };
    let selectedVal = evt.target.value;

    newConnection[evt.target.id] = selectedVal;
    setConnection(newConnection);
  };

  const handleSave = (evt) => {
    evt.preventDefault(); //Prevents the browser from submitting the form
    if (connection.name === "") {
      setConflictDialog(true);
    } else {
      addConnection(connection).then(() => history.push("/connections"));
    }
  };

  return (
    <>
      <div className="page">
        <WelcomeBar title="Add New Connection" />

        <div className="form-flex">
          <fieldset className="form">
            <dialog className="dialog-c" open={conflictDialog}>
              <div className="dialog-forms__connections">
                Please Input A Name
              </div>
              <button
                className="button-close"
                onClick={(e) => setConflictDialog(false)}
              >
                Close
              </button>
            </dialog>

            <div className="form__group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                required
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" First &#38; Last Name"
                value={connection.name}
              />
            </div>

            <div className="upload-section">
              <Upload />
              <Image cloudName="dllowdq2w" />
            </div>

            <div className="form__group">
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                id="email"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" name@email.com"
                value={connection.email}
              />
            </div>

            <div className="form__group">
              <label htmlFor="phone">Phone: </label>
              <input
                type="text"
                id="phone"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" XXX-XXX-XXXX"
                value={connection.phone}
              />
            </div>

            <div className="form__group">
              <label htmlFor="address">Address: </label>
              <input
                type="text"
                id="address"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Enter Street Address"
                value={connection.address}
              />
            </div>

            <div className="form__group">
              <label htmlFor="city">City: </label>
              <input
                type="text"
                id="city"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Enter City"
                value={connection.city}
              />
            </div>

            <div className="form__group">
              <label htmlFor="stateProvince">State/Province: </label>
              <input
                type="text"
                id="stateProvince"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Enter 2 Letter Code"
                value={connection.stateProvince}
              />
            </div>

            <div className="form__group">
              <label htmlFor="zipCode">Zip/Postal Code: </label>
              <input
                type="text"
                id="zipCode"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" 90210 or V3C 2XR"
                value={connection.zipCode}
              />
            </div>

            <div className="form__group">
              <label htmlFor="country">Country: </label>
              <input
                type="text"
                id="country"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" USA, Canada etc"
                value={connection.country}
              />
            </div>

            <div className="form__group">
              <label htmlFor="work">Work: </label>
              <input
                type="text"
                id="work"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Company/Industry"
                value={connection.work}
              />
            </div>

            <div className="form__group">
              <label htmlFor="relationship">Relationship: </label>
              <input
                type="text"
                id="relationship"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Friend, sibling etc"
                value={connection.relationship}
              />
            </div>

            <div className="form__group light-font">
              <label htmlFor="birthday">Birthday: </label>
              <input
                type="date"
                id="bday"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                value={connection.bday}
              />
            </div>

            <div className="form__group">
              <label htmlFor="family">Family Members: </label>
              <input
                type="text"
                id="family"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Spouse, children etc"
                value={connection.family}
              />
            </div>

            <div className="form__group">
              <label htmlFor="pets">Pets: </label>
              <input
                type="text"
                id="pets"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Pet names &#38; bdays"
                value={connection.pets}
              />
            </div>

            <div className="form__group">
              <label htmlFor="howWeMet">How/Where Did You Meet: </label>
              <input
                type="text"
                id="howWeMet"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" How Did You Meet?"
                value={connection.howWeMet}
              />
            </div>

            <div className="form__group">
              <label htmlFor="giftIdeas">Gift Ideas: </label>
              <input
                type="text"
                id="giftIdeas"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Gifts or stores"
                value={connection.giftIdeas}
              />
            </div>

            <div className="form__group">
              <label htmlFor="faveDrink">Favorite Drink: </label>
              <input
                type="text"
                id="faveDrink"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Wine, beer, juice etc"
                value={connection.faveDrink}
              />
            </div>

            <div className="form__group">
              <label htmlFor="faveDessert">Favorite Dessert: </label>
              <input
                type="text"
                id="faveDessert"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Cake, ice cream etc"
                value={connection.faveDessert}
              />
            </div>

            <div className="form__group">
              <label htmlFor="notes">Notes: </label>
              <input
                type="text"
                id="notes"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" General notes"
                value={connection.notes}
              />
            </div>

            <div className="form__group">
              <label htmlFor="zodiac">Zodiac: </label>
              <input
                type="text"
                id="zodiac"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Aquarius, Libra etc"
                value={connection.zodiac}
              />
            </div>

            <div className="form__group">
              <label htmlFor="personality">Personality Type: </label>
              <input
                type="text"
                id="personality"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" e.g. INTJ"
                value={connection.personality}
              />
            </div>

            <div className="form__group">
              <label htmlFor="enneagram">Enneagram: </label>
              <input
                type="text"
                id="enneagram"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" Number"
                value={connection.enneagram}
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
              onClick={() => history.push("/connections")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
