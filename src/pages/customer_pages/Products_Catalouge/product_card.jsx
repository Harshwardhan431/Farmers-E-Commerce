import { useState } from "react";
import Counter from "./counter";
import "../customer.css";



export default function Product_Page(props) {
  
  return (
    <div className="Products" id={props.Farmer_name} onClick={props.onClick}>
      <div className="farmer_details" id={props.Farmer_name}>
        <div id={props.Farmer_name}>
        <p id={props.Farmer_name}>{props.Farmer_name}</p>
        <p id={props.Farmer_name}>{props.stock}</p>
        </div>
        <p id={props.Farmer_name}>Rs: {props.price}</p>
      </div>
    </div>
  );
}
//<Counter counter={counter} Increment={increment} Decrement={decrement}/>