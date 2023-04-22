import React from "react";
import Items from "../products/items"; //Dummy JSON
import Product_Page from "./product_card";
import "../customer.css";
import {item} from "../dashboard";
import NavBar from "../../../components/navbar";

const selected_item=item// the customer has choosen this item

export default function Products_Display(){
  //return your JSON in variable called as items  
  
  
  function createCard(items) { //change this variable
        return (
          <Product_Page
            key={items.id} //change accordingly
            src={items.src}
            item={items.ItemName}
            price={items.price}
            Farmer_name="Farmer Name"
            stock="stock"
          />
        );
      }
    return(
      
        <div className="Rows">
        <NavBar first="Home" second="Cart" third="Orders" fourth="Login" />
        <dl className="dictionary">{Items.map(createCard)}</dl>
      </div>
    );
}