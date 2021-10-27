//Author: Susie Stanley
//Purpose: Creates and displays individual journal entries that is passed as a prop

import React from "react";
import { formatDateFromIntStr } from "../helper";

const formatTitleLength = (title) => {
  if (title.length > 25) {
    const shortTitle = title.slice(0, 25) + "...";
    return shortTitle;
  } else return title;
};

export const JournalDashCard = ({ journal }) => {
  return (
    <>
      <div className="dash-journal">
        <div className="dash-journal__col1">
          <div className="dash-journal__text">
            {formatTitleLength(journal?.title)}
          </div>
        </div>

        <div className="dash-journal__col2">
          <div className="dash-journal__text">
            {formatDateFromIntStr(journal?.dayTime)}
          </div>
        </div>
      </div>
    </>
  );
};
