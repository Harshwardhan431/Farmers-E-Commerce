import React,{useState} from "react";
import ButtonStyles from "./components/material_styles/Button_Styles_Primary";
import Buttons from "./components/Button_Primary";
import TextField from '@material-ui/core/TextField';
import TextFieldStyles from "./components/textarea";
import { Button } from "@material-ui/core";


function LoginPage(props){
     


    return (
        <div className="outerDiv">
            <div className="innerDiv">
                <form>
                    <label className="Label">Welcome To Farmers</label>
                    <TextField  variant="outlined" label="Email Address" type="text" className={TextFieldStyles("#03C04A")().root}/>
                    <TextField  variant="outlined" label="Password" type="password" className={TextFieldStyles("#03C04A")().root}/>
                    <Button onClick={() => props.onTap("forgot")} >Forgot Password?</Button>
                    <div className="b1">
                    <Buttons text="Login" name="login" onTap={() => props.onTap("login")} /> 
                    <Buttons text="Register" name="register" onTap={() => props.onTap("register")} />

                    
                    </div>
                </form>
            </div>
        </div>
    );
}
export default LoginPage;

