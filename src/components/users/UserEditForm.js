//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an their account

import React, { useState, useEffect } from "react";
import { update, getUserById } from "./UserManager";
import { useParams, useHistory } from "react-router-dom";
import { WelcomeBar2 } from "../../components/navbar/WelcomeBar2";
import { Input } from "../Input";
import "../connections/Connections.css";
import "../LifeHacker.css";

export const UserEditForm = () => {
  const [user, setUser] = useState({
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
    bday: "",
    timestamp: Date.now(),
  });

  const [conflictDialog, setConflictDialog] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { userId } = useParams();
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
    setLoading(false);
    setClickedStyle("uploaded-image");
  };
  // end of upload function

  const handleFieldChange = (evt) => {
    const stateToChange = { ...user };
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
  };

  const updateExistingUser = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the info
    const editedUser = {
      id: userId,
      name: user.name,
      image: image ? image : user.image,
      email: user.email,
      phone: user.phone,
      address: user.address,
      city: user.city,
      stateProvince: user.stateProvince,
      zipCode: user.zipCode,
      country: user.country,
      bday: user.bday,
      timestamp: Date.now(),
    };

    if (user.name === "") {
      setConflictDialog(true);
      setIsLoading(false);
    } else {
      update(editedUser).then(() => {
        history.goBack();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  };

  useEffect(() => {
    getUserById(userId).then((user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, [userId]); //wont cause infinite loop because it comes from params

  return (
    <>
      <div className="page">
        <WelcomeBar2 title="Edit Your Account Details" />

        <div className="form-flex">
          <fieldset className="form">
            <dialog className="dialog" open={conflictDialog}>
              <div className="dialog-forms">
                Please make sure name is filled in
              </div>
              <button
                className="button-close"
                onClick={(e) => setConflictDialog(false)}
              >
                Close
              </button>
            </dialog>
            <div className="user-detail-image">
              {user.image !== "" ? (
                <img
                  src={user.image}
                  alt={user.name}
                  className="user-detail-photo"
                />
              ) : (
                <img
                  src={require(`../../images/default.png`).default}
                  alt="default"
                  className="user-detail-photo"
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
                  onChange={uploadImage}
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
                    alt="user"
                    width="150"
                    height="150"
                    className={clickedStyle}
                  />
                </div>
              )}
            </div>

            <Input
              id="name"
              required
              value={user?.name}
              onChange={handleFieldChange}
              label="Name: "
            />

            <Input
              id="email"
              value={user?.email}
              onChange={handleFieldChange}
              label="Email: "
            />

            <Input
              id="phone"
              value={user?.phone}
              onChange={handleFieldChange}
              label="Phone: "
            />

            <Input
              id="address"
              value={user?.address}
              onChange={handleFieldChange}
              label="Address: "
            />

            <Input
              id="city"
              value={user?.city}
              onChange={handleFieldChange}
              label="City: "
            />

            <Input
              id="stateProvince"
              value={user?.stateProvince}
              onChange={handleFieldChange}
              label="State/Province: "
            />

            <Input
              id="zipCode"
              value={user?.zipCode}
              onChange={handleFieldChange}
              label="Zip/Postal Code: "
            />

            <Input
              id="country"
              value={user?.country}
              onChange={handleFieldChange}
              label="Country: "
            />

            <Input
              id="bday"
              type="date"
              value={user?.bday}
              onChange={handleFieldChange}
              label="Birthday: "
            />
          </fieldset>

          <div className="form-btns">
            <button
              type="button"
              disabled={isLoading}
              className="form-btn"
              onClick={updateExistingUser}
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
