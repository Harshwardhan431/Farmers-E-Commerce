import React,{useState} from "react";
import Buttons from "./components/Button_Primary";
import TextArea from "./components/Text_Area";
import { Button } from "@material-ui/core";
import {Link, useNavigate} from "react-router-dom";


function LoginPage(props) {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  function login(){
  
       navigate("/dashboard");
       const data=Object.values(user);
       console.log(data);

  }
  const [user, setUser]=useState({
    "Email":"",
    "Password":""
  })


  function OnChange2(e){
    e.preventDefault();
    const {value,id}=e.target;
    //here id is the name of the input field
    //value is the value of that input field
    const newdata = user;
    newdata[id]=value;
    setUser(newdata); 
    
  }
    return (
      <div className="outerDiv">
        <div className="innerDiv">
          <form on>
            <label className="Label">Welcome To Farmers</label>
            <TextArea id="Email" OnChange={OnChange2} label="Email Address" type="text" />
            <TextArea id="Password" OnChange={OnChange2} label="Password" type="password" />
            <Link to="/Forgot_pass">
            <Button>
              Forgot Password?
            </Button>
            </Link>
            <div className="b1">
                <Buttons  text="Login" name="login" onTap={login} />
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
