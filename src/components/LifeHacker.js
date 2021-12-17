import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Sidebar } from "./sidebar/Sidebar";
// import { ApplicationViews } from "./ApplicationViews"
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";

export const LifeHacker = () => {
  return (
    <>
      <Route
        render={() => {
          if (sessionStorage.getItem("lifehacker_user")) {
            return (
              <>
                <Sidebar />
                {/* <ApplicationViews /> */}
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
    </>
  );
};
