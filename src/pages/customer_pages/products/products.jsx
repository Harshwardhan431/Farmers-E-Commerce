import React from "react";
import Card from "./card";
import Items from "./items";
import "./products.css";



function Products(props) {
  function createCard(items) {
    return (
      <Card
        key={items.id}
        src={items.src}
        ItemName={items.ItemName}
        price={items.price}
        onClick={props.onClick}
        name={items.ItemName}
      />
    );
  }
  return (
    <div className="product">
      <dl className="dictionary1">{Items.map(createCard)}</dl>
    </div>
  );
}

export default Products;
