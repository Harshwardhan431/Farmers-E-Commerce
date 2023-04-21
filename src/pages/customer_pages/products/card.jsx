import React from "react";
import "./products.css"

function Card(props) {
  return (
    <div className="card" id={props.name} onClick={props.onClick}>
      <img src={props.src} id={props.name}></img>
      <div className="card-text" id={props.name}>
        <h2 id={props.name}>{props.ItemName}</h2>
        <h3 id={props.name}>From ₹ {props.price} / Kg</h3>
      </div>
    </div>
  );
}

export default Card;
