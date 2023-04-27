import React from "react";
import Cust_NavBar from "../navbar";
import Order_card from "./card";

const Items="";//your json

export default function Orders(){
    function createCard(items) { 
        return (
            <Order_card />
        );
      }
    return(
        <div>
        <Cust_NavBar/>
        <div>
        <dl className="dictionary">{/*Items.map(createCard)*/}</dl> 
        </div>
        </div>
    );
}