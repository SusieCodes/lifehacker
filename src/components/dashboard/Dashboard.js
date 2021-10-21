// Author: Susie Stanley
// Purpose: To display relevant info from database on landing page

import React from "react";
// import { Link } from "react-router-dom";
import { TodoDashList } from "../todos/TodoDashList";
import { formatDate } from "../helper";
import "../LifeHacker.css";
import "../dashboard/Dashboard.css";

export const Dashboard = () => { 

return (
    <>
    <div className="page">

      <div className="page-title__flex">

        <div className="page-title__left">Welcome <span className="welcome-name">Susie</span></div>

        <div className="page-title__headline">Dashboard</div>

        <div className="page-title__right">Today is: <span className="todays-date">{formatDate(Date.now())}</span></div>

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-grid__row1">
          {/* row1 col1 hold all 4 sections (Activity, Grocery, Notes, & Journal) */}
          <div className="dashboard-grid__row1__col1">
            
            <div className="dashboard-grid__row1__col1__row1">
              <div className="activity-container"><h2>Activities</h2></div>
              <div className="grocery-container"><h2>Groceries</h2></div>
            </div>

            <div className="dashboard-grid__row1__col1__row2">
            <div className="note-container"><h2>Notes</h2></div>
              <div className="journal-container"><h2>Journal</h2></div>
            </div>
          
          </div>

          {/* START OF TO-DO DASHBOARD */}
          <div className="dashboard-grid__row1__col2">

            <h2>To-Do List</h2>
            
            <div className="dash-todo__list">
              <TodoDashList />
            </div>

          </div>

        </div>

        <div className="dashboard-grid__row2">
          <div className="dashboard-grid__row2__row1">
            <h2>Connections</h2>
          </div>

        </div>

      </div>

    </div>
    </>
  )
}