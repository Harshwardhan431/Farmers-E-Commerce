import React from "react";
import ButtonStyles from "./components/material_styles/Button_Styles_Primary";
import TextArea from "./components/Text_Area";
import { Button } from "@material-ui/core";
import Buttons from "./components/Button_Primary";
import ButtonsSecondry from "./components/Button_Secondry";
import { Link } from "react-router-dom";

function RegistrationPage(props){
 
    return (
        <div className="outerDiv">
            <div className="innerDiv">
                <form>
                    <label className="Label">Welcome To Farmers</label>
                    <div className="Inputs">
                    <TextArea label="Name" type="text" />
                    <TextArea label="Surname" type="text" />
                    <TextArea label="Email Address" type="text" />
                    <TextArea label="City" type="text" />
                    <TextArea label="Entity" type="text" />
                    <TextArea label="Phone No" type="text" />
                    <TextArea label="Password" type="password" />
                    <TextArea label="Confirm Password" type="password" />
                    </div>

                    <Buttons text="Register" name="register" onTap={() => props.onTap("register")} />

                    <Link to="/"><ButtonsSecondry text="Log In?" onClick={() => props.onTap("login")} /></Link>

                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;