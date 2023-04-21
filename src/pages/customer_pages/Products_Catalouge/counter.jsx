import React from "react";
import "../customer.css";
function Counter(props) {
  return (
    <div className="container">

        <button className="custom_button" onClick={props.Decrement}>
          -
        </button>
        <div className="num">
        <h1>{props.counter}</h1>
      </div>
        <button className="custom_button" onClick={props.Increment}>
          +
        </button>
      
    </div>
  );
}
export default Counter;