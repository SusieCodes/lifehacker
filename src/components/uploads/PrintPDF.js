import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

export class ComponentToPrint extends React.Component {
  render() {
    return (
      <>
        <div className="grocery-card">
          <div className="grocery-info">
            <div>Grocery Title</div>
          </div>

          <div className="grocery-icons">Icons</div>
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
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print This Out!</button>
    </div>
  );
};

render(<Example />, document.querySelector("#root"));
