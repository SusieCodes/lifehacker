import React, { useState } from "react";
import { ApplicationViews } from "./ApplicationViews";

export const LifeHacker = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("lifehacker_user") !== null
  );

  const setAuthUser = (user) => {
    sessionStorage.setItem("lifehacker_user", user.id);
    const [firstname] = user.name.split(" ");
    sessionStorage.setItem("lifehacker_username", firstname);
    setIsAuthenticated(sessionStorage.getItem("lifehacker_user") !== null);
  };

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("lifehacker_user") !== null);
  };

  return (
    <>
      <ApplicationViews
        setAuthUser={setAuthUser}
        isAuthenticated={isAuthenticated}
        clearUser={clearUser}
      />
    </>
  );
};
