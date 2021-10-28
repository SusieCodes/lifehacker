import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../components/LifeHacker.css";
import "./Auth.css";
import "../../src/components/LifeHacker.css";

export const Login = () => {
  const [loginUser, setLoginUser] = useState({ email: "" });
  const [existDialog, setExistDialog] = useState(false);

  const history = useHistory();

  const handleInputChange = (event) => {
    const newUser = { ...loginUser };
    newUser[event.target.id] = event.target.value;
    setLoginUser(newUser);
  };

  const existingUserCheck = () => {
    // If your json-server URL is different, please change it below
    return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
      .then((res) => res.json())
      .then((user) => (user.length ? user[0] : false));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    existingUserCheck().then((exists) => {
      if (exists) {
        // The user id is saved under the key lifehacker_user in session Storage
        // Change below if needed
        sessionStorage.setItem("lifehacker_user", exists.id);
        const [firstname] = exists.name.split(" ");
        sessionStorage.setItem("lifehacker_username", firstname);
        history.push("/dashboard");
      } else {
        setExistDialog(true);
      }
    });
  };

  return (
    <main className="container-login">
      <dialog className="dialog dialog-auth" open={existDialog}>
        <div className="login-dialog">User does not exist</div>
        <button
          className="login-button-close"
          onClick={(e) => setExistDialog(false)}
        >
          Close
        </button>
      </dialog>

      <div className="form-flex">
        <div className="form-flex__inner">
          <form className="form-login" onSubmit={handleLogin}>
            <div className="form-login__headline">Welcome To Life Hacker</div>
            <div className="form-login__subtitle">Please Sign In</div>

            <fieldset>
              <label htmlFor="inputEmail" className="login-label">
                Email address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form__group--edit"
                placeholder="name@email.com"
                required
                autoFocus
                value={loginUser.email}
                onChange={handleInputChange}
              />

              <div className="form-btns">
                <button type="submit" className="login-btn">
                  Sign In
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="link-register">
        <Link to="/register">Register for an account</Link>
      </div>
    </main>
  );
};
