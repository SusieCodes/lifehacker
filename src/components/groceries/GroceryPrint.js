import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import { getGroceriesByUserId } from "./GroceryManager";
import { GroceryPrintCard } from "./GroceryCard";
import "./Grocery.css";

export class ComponentToPrint extends React.Component {
  state = { groceries: [] };

  componentDidMount() {
    getGroceriesByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (userGroceries) => {
        this.setState({ groceries: userGroceries });
      }
    );
  }

  render() {
    return (
      <>
        <div className="print-grocery-container">
          <div className="print-grocery-info">
            <div className="print-header">
              {sessionStorage.getItem("lifehacker_username")}&#39;s Grocery List
            </div>

            <div className="print-grocery-list">
              {this.state.groceries.map((grocery) => (
                <GroceryPrintCard key={grocery.id} grocery={grocery} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="print-page">
      <div className="print-wrapper">
        <ComponentToPrint ref={componentRef} />
        <button className="print-btn" onClick={handlePrint}>
          Print
        </button>
      </div>
    </div>
  );
};

render(<Example />, document.querySelector("#root"));
