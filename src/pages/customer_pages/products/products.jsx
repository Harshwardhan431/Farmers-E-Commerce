import React from "react";
import Card from "./card";
import Items from "./items";
import "./products.css";

function createCard(items) {
  return (
    <Card
      key={items.id}
      src={items.src}
      ItemName={items.ItemName}
      price={items.price}
    />
  );
}

function Products() {
  return (
    <div className="product">
      <dl className="dictionary">{Items.map(createCard)}</dl>
    </div>
  );
}

export default Products;