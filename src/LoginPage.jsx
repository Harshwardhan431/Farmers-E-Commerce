import React,{useState} from "react";
import ButtonStyles from "./components/material_styles/Button_Styles_Primary";
import Buttons from "./components/Button_Primary";
import TextField from '@material-ui/core/TextField';
import TextFieldStyles from "./components/textarea";
import { Button } from "@material-ui/core";
import {Link, Outlet} from "react-router-dom";


function LoginPage(props) {
    return (
      <div className="outerDiv">
        <div className="innerDiv">
          <form>
            <label className="Label">Welcome To Farmers</label>
            <TextField
              variant="outlined"
              label="Email Address"
              type="text"
              className={TextFieldStyles('#03C04A')().root}
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              className={TextFieldStyles('#03C04A')().root}
            />
            <Link to="/Forgot_pass">
            <Button>
              Forgot Password?
            </Button>
            </Link>
            <div className="b1">
              <Link to="/dashboard">
                <Buttons text="Login" name="login" />
              </Link>
              <Link to="/Register">
                <Buttons text="Register" name="register" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
export default LoginPage;