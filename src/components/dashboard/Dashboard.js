// Author: Susie Stanley
// Purpose: To display relevant info from database on landing page

import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { getAllTodos } from "../todos/TodoManager";
import { TodoDashCard } from "../todos/TodoDashCard";

import { formatDate } from "../helper";
import "../LifeHacker.css";
import "../dashboard/Dashboard.css";

export const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    return getAllTodos().then(todosFromAPI => {
        setTodos(todosFromAPI)
    });
};

  useEffect(() => {
    getTodos();
}, []);  

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
            
            {/* ternary statement to show only uncompleted todos */}
            {todos.map(todo => todo.isCompleted ? 
              console.log('true') 
            : <TodoDashCard 
                key={todo.id} todo={todo} />)}

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