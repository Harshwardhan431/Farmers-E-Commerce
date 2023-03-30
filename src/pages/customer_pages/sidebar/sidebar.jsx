import React from "react";
import "./sidebar.css";
import Card from "./card";
import item from "./items";

function Sidebar(props){
        function createCard(items){
           return <Card src={items.image} ItemName={items.name} onClick={props.onClick} name={items.name}/>;
        }

    return(<div className="container">
        <div>
        {item.map(createCard)}
        </div>
    </div>);
}

export default Sidebar;