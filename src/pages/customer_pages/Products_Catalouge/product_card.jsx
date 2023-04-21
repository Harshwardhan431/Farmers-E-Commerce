import { useState } from "react";
import {item} from "../dashboard";
import Counter from "./counter";
import "../customer.css";


export default function Product_Page(props) {
  
  let [counter, SetCounter] = useState(0);
  function increment() {
    counter++;
    SetCounter(counter);
  }
  function decrement() {
    let c=counter;
    if(c>0){
      c--
    }
    SetCounter(c);
  }
  
  return (
    <div className="Products">
      <div className="farmer_details">
        <div><p>{props.Farmer_name}</p></div>
        <div><p>{props.stock}</p></div>
      </div>
      <div className="item_details">
        <div className="i1">
          <p>{props.item}</p>
          <img src={props.src}></img>
          <div>
            <p>Rs: {props.price}</p>
          </div>
        </div>
        <div className="i2">
          <div>
            <p>1kg</p>
          </div>
        <Counter counter={counter} Increment={increment} Decrement={decrement}/>
        </div>
      </div>
    </div>
  );
}
