import NavBar from "../../components/navbar";
import Products from "./products/products";
import Sidebar from "./sidebar/sidebar";
import "./customer.css";
import { useState } from "react";
function Customer_Dashboard(){
    let [item,setItem]=useState("Buy Fresh Vegetables");
    function select(e){
        setItem("Buy "+String(e.target.id));
    }

    return (<>
    <NavBar first="Home" second="Cart" third="Orders" fourth="Login" />
    <div className="Container">
    <div className="Sidebar">
    <Sidebar onClick={select}/>
    </div>
    <div className="product_header">
    <div className="Buy">
        <h2>{item}</h2>
    </div>
    <div className="Items">
    <Products/>
    </div>
    </div>
    </div>
    </>);
}
export default Customer_Dashboard;