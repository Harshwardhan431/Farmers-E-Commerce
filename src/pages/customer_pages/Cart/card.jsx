import React from "react";
import "./products.css"

function Card(props) {
  return (
    <div className="Cart_products" id={props.id} onClick={props.onClick}>
      <div className="farmer_details" id={props.id}>
        <div id={props.id}>
        <p id={props.Farmer_name}>{props.Farmer_name}</p>
        <p id={props.Farmer_name}>{props.stock}</p>
        </div>
        <p id={props.Farmer_name}>Rs: {props.price}</p>
      </div>
    </div>
  );
}

export default Card;
