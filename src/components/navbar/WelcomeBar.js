import React from "react";
import { Link } from "react-router-dom";
import { dateFormatWithSuffix } from "../helper";
import "../LifeHacker.css";

export const WelcomeBar = (props) => {
  const userName = sessionStorage.getItem("lifehacker_username");
  const userId = parseInt(sessionStorage.getItem("lifehacker_user"));
  const { title } = props;

  return (
    <div className="page-title__flex">
      <div className="page-title__left">
        Welcome{" "}
        <span className="welcome-name">
          <Link to={`/users/${userId}`}>{userName}</Link>
        </span>
      </div>

      <div className="page-title__headline">{title}</div>

      <div className="page-title__right">
        Today: &nbsp;&nbsp;
        <span className="todays-date">{dateFormatWithSuffix(Date.now())}</span>
      </div>
    </div>
  );
};
