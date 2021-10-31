// Author: Susie Stanley
// Purpose: To display relevant info from database on landing page

import React from "react";
import { Link } from "react-router-dom";
import { TodoDashList } from "../todos/TodoDashList";
import { ActivityDashList } from "../activities/ActivityDashList";
import { GroceryDashList } from "../groceries/GroceryDashList";
import { NoteDashList } from "../notes/NoteDashList";
import { JournalDashList } from "../journals/JournalDashList";
import { ConnectionDashList } from "../connections/ConnectionDashList";
import { formatDate } from "../helper";
import "../LifeHacker.css";
import "../dashboard/Dashboard.css";

export const Dashboard = () => {
  return (
    <>
      <div className="page">
        <div className="page-title__flex">
          <div className="page-title__left">
            Welcome{" "}
            <span className="welcome-name">
              {sessionStorage.getItem("lifehacker_username")}
            </span>
          </div>

          <div className="page-title__headline">Dashboard</div>

          <div className="page-title__right">
            Today: &nbsp;&nbsp;
            <span className="todays-date">{formatDate(Date.now())}</span>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-grid__row1">
            {/* row1 col1 hold all 4 sections (Activity, Grocery, Notes, & Journal) */}
            <div className="dashboard-grid__row1__col1">
              <div className="dashboard-grid__row1__col1__row1">
                {/* START OF ACTIVITY DASHBOARD */}
                <div className="activity-container">
                  <Link to="/activities">
                    <h2>Activities</h2>
                  </Link>

                  <div className="dash-activity__list">
                    <ActivityDashList />
                  </div>
                </div>

                {/* START OF GROCERY DASHBOARD */}
                <div className="grocery-container">
                  <Link to="/groceries">
                    <h2>Groceries</h2>
                  </Link>
                  <div className="dash-grocery__list">
                    <GroceryDashList />
                  </div>
                </div>
              </div>

              <div className="dashboard-grid__row1__col1__row2">
                {/* START OF NOTES DASHBOARD */}
                <div className="note-container">
                  <Link to="/notes">
                    <h2>Notes</h2>
                  </Link>
                  <div className="dash-note-text">
                    <NoteDashList />
                  </div>
                </div>

                {/* START OF JOURNAL DASHBOARD */}
                <div className="journal-container">
                  <Link to="/journals">
                    <h2>Journal</h2>
                  </Link>
                  <div className="dash-journal__list">
                    <JournalDashList />
                  </div>
                </div>
              </div>
            </div>

            {/* START OF TO-DO DASHBOARD */}
            <div className="dashboard-grid__row1__col2">
              <Link to="/todos">
                <h2>To-Do List</h2>
              </Link>
              <div className="dash-todo__list">
                <TodoDashList />
              </div>
            </div>
          </div>

          {/* START OF CONNECTIONS DASHBOARD */}
          <div className="dashboard-grid__row2">
            <div className="dashboard-grid__row2__row1">
              <Link to="/connections">
                <h2>Connections</h2>
              </Link>
              <ConnectionDashList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
