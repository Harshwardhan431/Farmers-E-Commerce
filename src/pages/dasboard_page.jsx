import { Link } from "react-router-dom";
import Customer_Dashboard from "./customer_pages/dashboard";
import Farmer_Dashboard from "./farmer_pages/dashboard";
import { useState } from "react";
function Dashboard(){
    const [user,setUser]=useState(false);
    return (<>
    {user?<Farmer_Dashboard/>:<Customer_Dashboard/>}
    
    <Link to="/profile">Complete Profile</Link>
    </>);
}
export default Dashboard