import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteGrocery, getGroceriesByUserId } from "./GroceryManager";
import { GroceryCard } from "./GroceryCard";
import { WelcomeBar2 } from "../navbar/WelcomeBar2";
import "../LifeHacker.css";
import "./Grocery.css";

export const GroceryBoard = () => {
  const [groceries, setGroceries] = useState([]);

  const getGroceries = () => {
    getGroceriesByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (userGroceries) => {
        setGroceries(userGroceries);
      }
    );
  };

  const handleDelete = (id) => {
    deleteGrocery(id).then(() => {
      getGroceries();
    });
  };

  useEffect(() => {
    getGroceries();
  }, []);

  return (
    <>
      <div className="page">
        <WelcomeBar2 title="Groceries" />

        <div className="section-flex">
          <div className="section-flex__content">
            <Link to={`/groceries/create`}>
              <button className="add-grocery">+ Add Groceries</button>
            </Link>
          </div>

          <div className="board-container__grocery">
            <div className="grocery-card-list">
              {groceries.map((grocery) => (
                <GroceryCard
                  key={grocery.id}
                  grocery={grocery}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </div>
          <div className="section-flex__content">
            <Link to={`/groceries/print`}>
              <button className="printable-btn">Print</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
