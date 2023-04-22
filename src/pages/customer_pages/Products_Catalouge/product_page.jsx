import React from "react";
import Items from "../products/items"; //Dummy JSON
import Product_Page from "./product_card";
import "../customer.css";
import {item} from "../dashboard";
import NavBar from "../../../components/navbar";
import Counter from "./counter";
import { useState } from "react";
import Buttons from "../../../components/Button_Primary";
import { Button } from "@material-ui/core";
import Cust_NavBar from "../navbar";



console.log(item);


export default function Products_Display(){
  //return your JSON in variable called as Items  
  
  const selected_item=item;// the customer has choosen this item use this to filte
  

//Filter your json
  const filteredItems = Items.filter(item1 => item1.ItemName == selected_item); //change Items to your own json
  const [focus,setFocus]=useState("");
  function clicked(e){
    console.log(e.target.id);
    setFocus(e.target.id);
  }

  function add_to_cart(){
    // upload item to json
  }
  function remove(){
    SetCounter(0);
    //remove item from cart
  }
  function createCard(items) { //Dont cahnge this parameter
        return (
          <Product_Page
            key={items.id} //change . accordingly
            price={items.price}
            Farmer_name="farmer Name"
            onClick={clicked}
            stock="stock"
          />
        );
      }

      let [counter, SetCounter] = useState(0);
      function increment() {
        if(focus!==""){
        counter++;
        SetCounter(counter);
      }
      }
      function decrement() {
        let c=counter;
        if(focus!=""){
        if(c>0){
          c--
        }}
        SetCounter(c);
      }
    return(
      
        <div className="Rows">
        <Cust_NavBar />
        <div  className="Item_catalouge" >
        <div id="item_counter">
          <div id="product_image"><img src={filteredItems[0].src}></img></div>
          <div id="product_name"><p >{filteredItems[0].ItemName}</p></div>
          <div><p>Buy from {focus}</p></div>
         <div id="product_counter"> <Counter counter={counter} Increment={increment} Decrement={decrement}/></div>
         
         <Buttons text="Add to Cart" onTap={add_to_cart}/>
         <div id="delete">
          <Button onClick={remove}>Remove</Button>
         </div>
        
        </div>
        <dl className="dictionary">{Items.map(createCard)}</dl> 
        </div>
      </div>
    );
}