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
            <div className="print-header">Grocery List</div>
          </div>
          {this.state.groceries.map((grocery) => (
            <GroceryPrintCard key={grocery.id} grocery={grocery} />
          ))}
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
    <div className="print-wrapper">
      <ComponentToPrint ref={componentRef} />
      <button className="print-btn" onClick={handlePrint}>
        Print
      </button>
    </div>
  );
};

render(<Example />, document.querySelector("#root"));
