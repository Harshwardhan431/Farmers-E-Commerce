import React from "react";

function NavBar(props){
    return(
        <div>
            <nav>
                <a>Farmers</a>
                <div id="navbar">
                <ul>
                    <li>
                        <a >{props.first}</a>
                    </li>
                    <li>
                        <a>{props.second}</a>
                    </li>
                    <li>
                        <a>{props.third}</a>
                    </li>
                    <li>
                        <a>{props.fourth}</a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )

}
export default NavBar;