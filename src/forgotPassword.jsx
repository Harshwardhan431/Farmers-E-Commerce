import React from "react";
import ButtonStyles from "./components/material_styles/Button_Styles_Primary";
import TextField from '@material-ui/core/TextField';
import TextFieldStyles from "./components/textarea";
import { Button } from "@material-ui/core";

function ForgotPassword(){

    function sendotp(){
        
    }
 
    return (
        <div className="outerDiv">
            <div className="innerDiv">
                <form>
                    <label className="Label">Enter email to reset password</label>
                    <div className="Inputs">
                    <TextField  variant="outlined" label="Email Address" type="text" className={TextFieldStyles("#03C04A")().root}/>
                    </div>

                    <Button variant="filled" className={ButtonStyles("green","#03C04A")().root} >Get Otp</Button>

                </form>
            </div>
        </div>
    );
}
export default ForgotPassword;