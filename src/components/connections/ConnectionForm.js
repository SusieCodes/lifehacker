//Author: Susie Stanley
//Purpose: Creates and displays an input form for user to add a connection

import React, { useState } from "react";
import { useHistory } from "react-router";
import { addConnection } from "./ConnectionManager";
import { WelcomeBar2 } from "../../components/navbar/WelcomeBar2";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./Connections.css";
import "../LifeHacker.css";

export const ConnectionForm = () => {
  const [conflictDialog, setConflictDialog] = useState(false);
  // Defining initial state of the form inputs with useState
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
    zodiac: "",
    personality: "",
    enneagram: "",
    isFave: false,
    timestamp: Date.now(),
  });

  const history = useHistory();

  // start of upload function
  const [clickedStyle, setClickedStyle] = useState("no-uploaded-image");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const uploadImage = async (evt) => {
    const files = evt.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "wp84lxqy");
    setLoading(true);

    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/dllowdq2w/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);
    // console.log("image is ", image);
    // console.log("file.secure_url is ", file.secure_url);
    // console.log("image type is ", typeof image);
    setLoading(false);
    setClickedStyle("uploaded-image");
  };
  // end of upload function

  const ResetForm = () => {
    setConnection({
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
      zodiac: "",
      personality: "",
      enneagram: "",
      isFave: false,
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
      const newConnection = {
        userId: parseInt(sessionStorage.getItem("lifehacker_user")),
        name: connection.name,
        image: image,
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
        isFave: connection.isFave,
        timestamp: Date.now(),
      };
      addConnection(newConnection).then(() => history.push("/connections"));
    }
  };

  return (
    <>
      <div className="page">
        <WelcomeBar2 title="Add New Connection" />

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
                maxLength="20"
                required
                autoFocus
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" First &#38; Last Name"
                value={connection.name}
              />
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
                  // value={connection.image}
                  onChange={uploadImage}
                />
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
            </div>

            <div className="form__group--email">
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                id="email"
                maxLength="22"
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
                maxLength="12"
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
                maxLength="25"
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
                maxLength="20"
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
                maxLength="2"
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
                maxLength="10"
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
                maxLength="15"
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
                maxLength="25"
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
                maxLength="20"
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
                maxLength="20"
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
                maxLength="40"
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
                maxLength="40"
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
                maxLength="30"
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
                maxLength="30"
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
                maxLength="25"
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
                maxLength="25"
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
                maxLength="50"
                onChange={handleControlledInputChange}
                className="form__group--edit"
                placeholder=" General notes"
                value={connection.notes}
              />
            </div>

            <div className="form__group">
              <div className="zodiac-wrapper">
                <label htmlFor="zodiac">Zodiac: </label>
                <select
                  name="zodiac"
                  id="zodiac"
                  className="zodiac-options"
                  onChange={handleControlledInputChange}
                  value={connection?.zodiac}
                >
                  <option className="zodiac-placeholder" value="">
                    Choose...
                  </option>
                  <option value="Aries">Aries</option>
                  <option value="Taurus">Taurus</option>
                  <option value="Gemini">Gemini</option>
                  <option value="Cancer">Cancer</option>
                  <option value="Leo">Leo</option>
                  <option value="Virgo">Virgo</option>
                  <option value="Libra">Libra</option>
                  <option value="Scorpio">Scorpio</option>
                  <option value="Sagittarius">Sagittarius</option>
                  <option value="Capricorn">Capricorn</option>
                  <option value="Aquarius">Aquarius</option>
                  <option value="Pisces">Pisces</option>
                </select>
              </div>
            </div>

            <div className="form__group--personality">
              <label htmlFor="personality" className="personality-label">
                <div className="personality-text">Personality: </div>
                <div className="personality-icon">
                  <a
                    href="https://www.16personalities.com/personality-types"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineInfoCircle className="p-icon" />
                  </a>
                </div>
              </label>
              <select
                name="personality"
                id="personality"
                className="personality-options"
                onChange={handleControlledInputChange}
                value={connection?.personality}
              >
                <option className="personality-placeholder" value="">
                  Choose...
                </option>
                <option value="INTJ">INTJ - Architect</option>
                <option value="INTP">INTP - Logician</option>
                <option value="ENTJ">ENTJ - Commander</option>
                <option value="ENTP">ENTP - Debater</option>
                <option value="INFJ">INFJ - Advocate</option>
                <option value="INFP">INFP- Mediator</option>
                <option value="ENFJ">ENFJ - Protagonist</option>
                <option value="ENFP">ENFP - Campaigner</option>
                <option value="ISTJ">ISTJ - Logistician</option>
                <option value="ISFJ">ISFJ - Defender</option>
                <option value="ESTJ">ESTJ - Executive</option>
                <option value="ESFJ">ESFJ - Consul</option>
                <option value="ISTP">ISTP - Virtuoso</option>
                <option value="ISFP">ISFP - Adventurer</option>
                <option value="ESTP">ESTP - Entrepreneur</option>
                <option value="ESFP">ESFP - Entertainer</option>
              </select>
            </div>

            <div className="form__group--enneagram">
              <label htmlFor="enneagram" className="enneagram-label">
                <div className="enneagram-text">Enneagram: </div>
                <div className="enneagram-icon">
                  <a
                    href="https://www.enneagraminstitute.com/how-the-enneagram-system-works"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineInfoCircle className="e-icon" />
                  </a>
                </div>
              </label>
              <select
                name="enneagram"
                id="enneagram"
                className="enneagram-options"
                onChange={handleControlledInputChange}
                value={connection?.enneagram}
              >
                <option className="enneagram-placeholder" value="">
                  Choose...
                </option>
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
                <option value="3">Type 3</option>
                <option value="4">Type 4</option>
                <option value="5">Type 5</option>
                <option value="6">Type 6</option>
                <option value="7">Type 7</option>
                <option value="8">Type 8</option>
                <option value="9">Type 9</option>
              </select>
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
