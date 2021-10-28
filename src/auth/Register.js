import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Auth.css";
import "../../src/components/LifeHacker.css";

export const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    image: "",
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
            name: `${registerUser.name}`,
            email: registerUser.email,
            image: "default.png",
          }),
        })
          .then((res) => res.json())
          .then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {
              // The user id is saved under the key lifehacker_user in session Storage. Change below if needed!
              sessionStorage.setItem("lifehacker_user", createdUser.id);
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
            <div className="form-register__headline">
              Please Register for Life Hacker
            </div>
            <fieldset>
              <label htmlFor="name" className="login-label">
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

              <label htmlFor="inputEmail" className="login-label login-indent">
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
