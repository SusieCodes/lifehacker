import React from "react";
import ReactToPrint from "react-to-print";
import { GroceryPrintContent } from "./GroceryPrintContent";
import "../LifeHacker.css";

export const GroceryPrint = () => {
  return (
    <div className="grocery-print-container">
      <GroceryPrintContent />

      <ReactToPrint
        content={GroceryPrintContent}
        trigger={() => <button className="print-btn">Print</button>}
      />
    </div>
  );
};
