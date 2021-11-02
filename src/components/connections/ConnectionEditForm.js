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

  // start of upload function
  const [clickedStyle, setClickedStyle] = useState("no-uploaded-image");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const uploadImage = async (evt) => {
    console.log("uploadImage invoked");
    const files = evt.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "wp84lxqy");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dllowdq2w/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
    setClickedStyle("uploaded-image");
  };
  // end of upload function

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
      image: image ? image : connection.image,
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
      timestamp: Date.now(),
    };

    update(editedConnection).then(() => {
      history.goBack();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  useEffect(() => {
    getConnectionById(connectionId).then((connection) => {
      setConnection(connection);
      setIsLoading(false);
      // setImage(connection.image);
    });
  }, [connectionId]); //wont cause infinite loop because it comes from params

  return (
    <>
      <div className="page">
        <WelcomeBar title="Edit Connection" />

        <div className="form-flex">
          <fieldset className="form">
            <div className="connection-edit-image">
              {connection.image !== "" ? (
                <img
                  src={connection.image}
                  alt={connection.name}
                  className="connection-user-photo"
                />
              ) : (
                <img
                  src={require(`../../images/default.png`).default}
                  alt="default"
                  className="connection-user-photo"
                />
              )}
            </div>

            <div className="upload-section">
              <div className="upload-wrapper">
                <div className="upload-image-text">Image: </div>
                <input
                  type="file"
                  id="image"
                  name="file"
                  className="upload-input"
                  placeholder="Choose Image"
                  onChange={(evt) => {
                    uploadImage(evt);
                  }}
                />
              </div>
            </div>

            <div className="uploaded-image-section">
              {loading ? (
                <div className="loading">Loading...</div>
              ) : (
                <div className="uploaded-image-wrapper">
                  <img
                    src={image}
                    alt=""
                    width="150"
                    className={clickedStyle}
                  />
                </div>
              )}
            </div>

            <Input
              id="name"
              value={connection?.name}
              onChange={handleFieldChange}
              label="Name: "
              required={true}
              maxLength="20"
            />

            <Input
              id="email"
              value={connection?.email}
              onChange={handleFieldChange}
              label="Email: "
              required={false}
              maxLength="22"
            />

            <Input
              id="phone"
              value={connection?.phone}
              onChange={handleFieldChange}
              label="Phone: "
              equired={false}
              maxLength="12"
            />

            <Input
              id="address"
              value={connection?.address}
              onChange={handleFieldChange}
              label="Address: "
              required={false}
              maxLength="25"
            />

            <Input
              id="city"
              value={connection?.city}
              onChange={handleFieldChange}
              label="City: "
              required={false}
              maxLength="20"
            />

            <Input
              id="stateProvince"
              value={connection?.stateProvince}
              onChange={handleFieldChange}
              label="State/Province: "
              required={false}
              maxLength="2"
            />

            <Input
              id="zipCode"
              value={connection?.zipCode}
              onChange={handleFieldChange}
              label="Zip/Postal Code: "
              required={false}
              maxLength="10"
            />

            <Input
              id="country"
              value={connection?.country}
              onChange={handleFieldChange}
              label="Country: "
              required={false}
              maxLength="15"
            />

            <Input
              id="work"
              value={connection?.work}
              onChange={handleFieldChange}
              label="Work: "
              required={false}
              maxLength="25"
            />

            <Input
              id="relationship"
              value={connection?.relationship}
              onChange={handleFieldChange}
              label="Relationship: "
              required={false}
              maxLength="20"
            />

            <Input
              id="bday"
              type="date"
              value={connection?.bday}
              onChange={handleFieldChange}
              label="Birthday: "
              required={false}
              maxLength="20"
            />

            <Input
              id="family"
              value={connection?.family}
              onChange={handleFieldChange}
              label="Family: "
              required={false}
              maxLength="40"
            />

            <Input
              id="pets"
              value={connection?.pets}
              onChange={handleFieldChange}
              label="Pets: "
              required={false}
              maxLength="40"
            />

            <Input
              id="howWeMet"
              value={connection?.howWeMet}
              onChange={handleFieldChange}
              label="How/Where We Met: "
              required={false}
              maxLength="30"
            />

            <Input
              id="giftIdeas"
              value={connection?.giftIdeas}
              onChange={handleFieldChange}
              label="Gift Ideas: "
              required={false}
              maxLength="30"
            />

            <Input
              id="faveDrink"
              value={connection?.faveDrink}
              onChange={handleFieldChange}
              label="Favorite Drink: "
              required={false}
              maxLength="25"
            />

            <Input
              id="faveDessert"
              value={connection?.faveDessert}
              onChange={handleFieldChange}
              label="Favorite Dessert: "
              required={false}
              maxLength="25"
            />

            <Input
              id="notes"
              value={connection?.notes}
              onChange={handleFieldChange}
              label="Notes: "
              required={false}
              maxLength="50"
            />

            <Input
              id="zodiac"
              value={connection?.zodiac}
              onChange={handleFieldChange}
              label="Zodiac: "
              required={false}
              maxLength="15"
            />

            <Input
              id="personality"
              value={connection?.personality}
              onChange={handleFieldChange}
              label="Personality: "
              required={false}
              maxLength="20"
            />

            <Input
              id="enneagram"
              value={connection?.enneagram}
              onChange={handleFieldChange}
              label="Enneagram: "
              required={false}
              maxLength="8"
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
              onClick={() => {
                history.goBack();
                window.scrollTo({ top: 0, behavior: "smooth" });
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
