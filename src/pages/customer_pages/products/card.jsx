import React from "react";
import "./products.css"

function Card(props) {
  return (
    <div className="card">
      <img src={props.src}></img>
      <div className="card-text">
        <h2>{props.ItemName}</h2>
        <h3>From ₹ {props.price} / Kg</h3>
      </div>
    </div>
  );
}

export default Card;
