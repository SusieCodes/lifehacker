import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./NavBar"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"

export const LifeHacker = () => {
  return (
    <>
    <Route
      render={() => {
        if (sessionStorage.getItem("lifehacker_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          )
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
  )
}