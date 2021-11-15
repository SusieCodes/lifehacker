import React from "react";
import { useHistory } from "react-router-dom";
import { dateFormatWithSuffix } from "../helper";
import "../LifeHacker.css";

export const WelcomeBar2 = (props) => {
  const history = useHistory();
  const { title } = props;

  return (
    <div className="page-title__flex">
      <div className="page-title__left">
        <span className="welcome-back" onClick={() => history.goBack()}>
          Back
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
