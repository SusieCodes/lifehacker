import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/lifehackerbanner.svg";

import "./Auth.css";
import "../../src/components/LifeHacker.css";

export const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    image: "",
    phone: "",
    address: "",
    city: "",
    stateProvince: "",
    zipCode: "",
    country: "",
    bday: "",
  });
  const [conflictDialog, setConflictDialog] = useState(false);

  const history = useHistory();

  const handleInputChange = (event) => {
    const newUser = { ...registerUser };
    newUser[event.target.id] = event.target.value;
    setRegisterUser(newUser);
  };

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
      .then((res) => res.json())
      .then((user) => !!user.length);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    existingUserCheck().then((userExists) => {
      if (!userExists) {
        fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: registerUser.name,
            email: registerUser.email,
            image: registerUser.image,
            phone: registerUser.phone,
            address: registerUser.address,
            city: registerUser.city,
            stateProvince: registerUser.stateProvince,
            zipCode: registerUser.zipCode,
            country: registerUser.country,
            bday: registerUser.bday,
            timestamp: Date.now(),
          }),
        })
          .then((res) => res.json())
          .then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {
              // The user id is saved under the key lifehacker_user in session Storage
              sessionStorage.setItem("lifehacker_user", createdUser.id);
              const [firstname] = createdUser.name.split(" ");
              sessionStorage.setItem("lifehacker_username", firstname);
              history.push("/dashboard");
            }
          });
      } else {
        setConflictDialog(true);
      }
    });
  };

  return (
    <main className="container-login">
      <dialog className="dialog dialog-password" open={conflictDialog}>
        <div className="dialog-login-content">
          An account with that email address already exists
        </div>
        <button
          className="login-button-close"
          onClick={(e) => setConflictDialog(false)}
        >
          Close
        </button>
      </dialog>

      <div className="form-flex">
        <div className="form-flex__inner">
          <form className="form-login" onSubmit={handleRegister}>
            <div className="form-register__headline">Please Register</div>
            <div className="logo-wrapper-login">
              <img className="logo-login" src={logo} alt="LifeHacker Logo" />
            </div>
            <fieldset className="login-fieldset">
              <div className="register-wrapper">
                <div className="register-name">
                  <label htmlFor="name" className="register-label">
                    Name:
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form__group--edit"
                    placeholder="Full Name"
                    required
                    autoFocus
                    value={registerUser.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="register-name">
                  <label
                    htmlFor="inputEmail"
                    className="register-label login-indent"
                  >
                    Email address:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form__group--edit"
                    placeholder="name@email.com"
                    required
                    autofocus
                    value={registerUser.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-btns">
                <button type="submit" className="login-btn">
                  Register
                </button>

                <button
                  type="button"
                  className="login-btn"
                  onClick={() => history.push(`/login`)}
                >
                  Cancel
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  );
};
