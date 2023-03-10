import React from "react";
import ButtonStyles from "./components/material_styles/Button_Styles_Primary";
import TextField from '@material-ui/core/TextField';
import TextFieldStyles from "./components/textarea";
import { Button } from "@material-ui/core";
import Buttons from "./components/Button_Primary";
import ButtonsSecondry from "./components/Button_Secondry";

function RegistrationPage(props){
 
    return (
        <div className="outerDiv">
            <div className="innerDiv">
                <form>
                    <label className="Label">Welcome To Farmers</label>
                    <div className="Inputs">
                    <TextField  variant="outlined" label="Name" type="text" className={TextFieldStyles("#03C04A")().root}/>
                    <TextField  variant="outlined" label="Surname" type="text" className={TextFieldStyles("#03C04A")().root}/>
                    <TextField  variant="outlined" label="Email Address" type="text" className={TextFieldStyles("#03C04A")().root}/>
                    <TextField  variant="outlined" label="City" type="text" className={TextFieldStyles("#03C04A")().root}/>
                    <TextField  variant="outlined" label="Entity" type="text" className={TextFieldStyles("#03C04A")().root}/>
                    <TextField  variant="outlined" label="Phone No" type="text" className={TextFieldStyles("#03C04A")().root}/>
                    <TextField  variant="outlined" label="Password" type="password" className={TextFieldStyles("#03C04A")().root}/>
                    <TextField  variant="outlined" label="Confirm Password" type="password" className={TextFieldStyles("#03C04A")().root}/>
                    </div>

                    <Buttons text="Register" name="register" onTap={() => props.onTap("register")} />

                    <ButtonsSecondry text="Log In?" onClick={() => props.onTap("login")} />

                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;