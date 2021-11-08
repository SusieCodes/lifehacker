import React, { useRef } from "react";
import { render } from "react-dom";
import { useHistory } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { getWishlistByUserId } from "./ListManager";
import { WishlistPrintCard } from "./WishlistCard";
import "./List.css";

export class ComponentToPrint extends React.Component {
  state = { wishlist: [] };

  componentDidMount() {
    getWishlistByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (userWishlist) => {
        this.setState({ wishlist: userWishlist });
      }
    );
  }

  render() {
    return (
      <>
        <div className="print-wishlist-container">
          <div className="print-wishlist-info">
            <div className="print-header">
              {sessionStorage.getItem("lifehacker_username")}&#39;s Wish List
            </div>

            <div className="print-wishlist-list">
              {this.state.wishlist.map((wishlist) => (
                <WishlistPrintCard key={wishlist.id} wishlist={wishlist} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export const PrintWishlist = () => {
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

render(<PrintWishlist />, document.querySelector("#root"));
