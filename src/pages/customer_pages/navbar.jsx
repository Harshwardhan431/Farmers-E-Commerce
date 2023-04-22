import React from "react";
import { Link } from "react-router-dom";
function Cust_NavBar(){
    return(
        <div>
            <nav>
                <a>Farmers</a>
                <div id="navbar">
                <ul>
                    <li>
                        <Link to="/dashboard">Home</Link>
                    </li>
                    <li>
                    <Link to="/Cart">Cart</Link>
                    </li>
                    <li>
                    <Link to="/Orders">Orders</Link>
                    </li>
                    <li>
                        <a>Login a</a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )

}
export default Cust_NavBar;