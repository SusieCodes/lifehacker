//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing connection

import React, { useState, useEffect } from "react";
import { update, getConnectionById } from "./ConnectionManager";
import { useParams, useHistory } from "react-router-dom";
import { WelcomeBar } from "../../components/navbar/WelcomeBar";
import { Input } from "../Input";
import "./Connections.css";
import "../LifeHacker.css";

export const ConnectionEditForm = () => {
  const [connection, setConnection] = useState({
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
    timestamp: Date.now(),
  });

  const [isLoading, setIsLoading] = useState(false);

  const { connectionId } = useParams();
  const history = useHistory();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...connection };
    stateToChange[evt.target.id] = evt.target.value;
    setConnection(stateToChange);
  };

  const updateExistingConnection = (evt) => {
    evt.preventDefault();
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
      timestamp: connection.timestamp,
    };

    update(editedConnection).then(() => history.goBack());
  };

  useEffect(() => {
    getConnectionById(connectionId).then((connection) => {
      setConnection(connection);
      setIsLoading(false);
    });
  }, [connectionId]); //wont cause infinite look because it comes from params

  return (
    <>
      <div className="page">
        <WelcomeBar title="Edit Connection" />

        <div className="form-flex">
          <fieldset className="form">
            <Input
              id="name"
              value={connection?.name}
              onChange={handleFieldChange}
              label="Name: "
            />

            <Input
              id="email"
              value={connection?.email}
              onChange={handleFieldChange}
              label="Email: "
            />

            <Input
              id="phone"
              value={connection?.phone}
              onChange={handleFieldChange}
              label="Phone: "
            />

            <Input
              id="address"
              value={connection?.address}
              onChange={handleFieldChange}
              label="Address: "
            />

            <Input
              id="city"
              value={connection?.city}
              onChange={handleFieldChange}
              label="City: "
            />

            <Input
              id="stateProvince"
              value={connection?.stateProvince}
              onChange={handleFieldChange}
              label="State/Province: "
            />

            <Input
              id="zipCode"
              value={connection?.zipCode}
              onChange={handleFieldChange}
              label="Zip/Postal Code: "
            />

            <Input
              id="country"
              value={connection?.country}
              onChange={handleFieldChange}
              label="Country: "
            />

            <Input
              id="work"
              value={connection?.work}
              onChange={handleFieldChange}
              label="Work: "
            />

            <Input
              id="relationship"
              value={connection?.relationship}
              onChange={handleFieldChange}
              label="Relationship: "
            />

            <Input
              id="bday"
              type="date"
              value={connection?.bday}
              onChange={handleFieldChange}
              label="Birthday: "
            />

            <Input
              id="family"
              value={connection?.family}
              onChange={handleFieldChange}
              label="Family: "
            />

            <Input
              id="pets"
              value={connection?.pets}
              onChange={handleFieldChange}
              label="Pets: "
            />

            <Input
              id="howWeMet"
              value={connection?.howWeMet}
              onChange={handleFieldChange}
              label="How/Where We Met: "
            />

            <Input
              id="giftIdeas"
              value={connection?.giftIdeas}
              onChange={handleFieldChange}
              label="Gift Ideas: "
            />

            <Input
              id="faveDrink"
              value={connection?.faveDrink}
              onChange={handleFieldChange}
              label="Favorite Drink: "
            />

            <Input
              id="faveDessert"
              value={connection?.faveDessert}
              onChange={handleFieldChange}
              label="Favorite Dessert: "
            />

            <Input
              id="notes"
              value={connection?.notes}
              onChange={handleFieldChange}
              label="Notes: "
            />

            <Input
              id="zodiac"
              value={connection?.zodiac}
              onChange={handleFieldChange}
              label="Zodiac: "
            />

            <Input
              id="personality"
              value={connection?.personality}
              onChange={handleFieldChange}
              label="Personality: "
            />

            <Input
              id="enneagram"
              value={connection?.enneagram}
              onChange={handleFieldChange}
              label="Enneagram: "
            />
          </fieldset>

          <div className="form-btns">
            <button
              type="button"
              disabled={isLoading}
              className="form-btn"
              onClick={updateExistingConnection}
            >
              Submit
            </button>

            <button
              type="button"
              className="form-btn"
              onClick={() => history.goBack()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
