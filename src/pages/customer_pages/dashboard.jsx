import NavBar from "../../components/navbar";
import Products from "./products/products";
import Sidebar from "./sidebar/sidebar";
import "./customer.css";
import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";


export let item="";

function Customer_Dashboard(){
    
    const navigate = useNavigate();
    function select_item(e){
        const i= e.target.id;        
        item=i;
        console.log(item);
        navigate("/Product");   
}

    return (<>
    <NavBar first="Home" second="Cart" third="Orders" fourth="Login" />
    <div className="Container">
    <div className="product_header">
    <div className="Buy">
        <h2>{item}</h2>
    </div>
    <div className="Items">
    <Products onClick={select_item}/>
    </div>
    </div>
    </div>
    </>);
}
export default Customer_Dashboard;
