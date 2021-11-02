import React, { useRef } from "react";
import { render } from "react-dom";
import { useHistory } from "react-router-dom";
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

export const PrintGroceryList = () => {
  const componentRef = useRef();
  const history = useHistory();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="print-page">
      <div className="print-wrapper">
        <ComponentToPrint ref={componentRef} />
        <div className="print-btn-flex">
          <button className="print-btn" onClick={handlePrint}>
            Print
          </button>

          <button
            className="print-btn"
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

render(<PrintGroceryList />, document.querySelector("#root"));
