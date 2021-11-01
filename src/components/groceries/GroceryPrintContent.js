import React, { useState, useEffect } from "react";
// import ReactToPrint from "react-to-print";
import { getGroceriesByUserId } from "./GroceryManager";
import { GroceryPrintCard } from "./GroceryCard";
import "../LifeHacker.css";
import "./Grocery.css";

export const GroceryPrintContent = () => {
  const [groceries, setGroceries] = useState([]);

  const getGroceries = () => {
    getGroceriesByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (userGroceries) => {
        setGroceries(userGroceries);
      }
    );
  };

  useEffect(() => {
    getGroceries();
  }, []);

  return (
    <>
      <div className="print-container__grocery">
        <div className="grocery-card-list">
          <div className="print-header">Grocery List</div>
          {groceries.map((grocery) => (
            <GroceryPrintCard key={grocery.id} grocery={grocery} />
          ))}
        </div>
      </div>
    </>
  );
};
