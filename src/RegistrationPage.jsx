import React from "react";
import ButtonStyles from "./components/material_styles/Button_Styles_Primary";
import TextArea from "./components/Text_Area";
import { Button } from "@material-ui/core";
import Buttons from "./components/Button_Primary";
import ButtonsSecondry from "./components/Button_Secondry";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import  {API, graphqlOperation } from 'aws-amplify';
import { createUser } from "./graphql/mutations";

function RegistrationPage(props){
    const navigate=useNavigate();

    const addUser =async ()=> {
      try{
          console.log("start ");
          var ran="abcdefghijklmnopqrstuvwxyz";
          var num="0123456789";
          var getval=Math.floor(Math.random() * 10);
          
          const data={
          "user_id": "hshsgtjak13ha",
          "name": user.name,
          "last_name": user.last_name,
          "email":user.email,
          "city":user.city,
          "password": user.password,
          "contact":user.contact,
          "address":"",
          "zip": "",
          "type": "1",
          };
        console.log(typeof data);
         await API.graphql(graphqlOperation(createUser, {input: data}));
         navigate("/dashboard");
        }catch(error)
        {
          console.log('error in adding users ',error);
      }
    }

    const [user,setUser]=useState({
        "user_id":"gsyshajjaa27hshhah",
        "name":"",
        "last_name":"",
        "email":"",
        "city":"",
        "password":"",
        "contact":"",
        "address":"",
        "zip":"",
        "type":""
    });
    //const data=user;
    const OnChange3 = (e) => {
        e.preventDefault();
        const newdata = user;
        const {value,id}=e.target;
        newdata[id] = value;
        setUser(newdata);
    }


    return (
        <div className="outerDiv">
            <div className="innerDiv">
                <form >
                    <label className="Label">Welcome To Farmers</label>
                    <div className="Inputs">
                    <TextArea id="name" OnChange={OnChange3} label="Name" type="text" />
                    <TextArea id="last_name" OnChange={OnChange3} label="Surname" type="text" />
                    <TextArea id="email" OnChange={OnChange3} label="Email Address" type="text" />
                    <TextArea id="city" OnChange={OnChange3} label="City" type="text" />
                    <TextArea id="Entity" OnChange={OnChange3} label="Entity" type="text" />
                    <TextArea id="contact" OnChange={OnChange3} label="Phone No" type="text" />
                    <TextArea id="password" OnChange={OnChange3} label="Password" type="password" />
                    <TextArea id="CnfPassword" OnChange={OnChange3} label="Confirm Password" type="password" />

                    </div>

                    <Buttons text="Register" name="register" onTap={() => {addUser();}} />

                    <Link to="/"><ButtonsSecondry text="Log In?" onClick={() => props.onTap("login")} /></Link>

                </form>
                
            </div>
        </div>
    );
}

export default RegistrationPage;
/**
 const addUser =async ()=> {
  try{
      console.log("start ");
     // navigate("/dashboard");
      const data=Object.values(user);
      console.log(data);
      
      //const userData=await API.graphql(graphqlOperation(createUser, {input: data}));
      // const userList= [...users];
      // userList[idx]=userData.data.updateUser;
      //setUsers(userList)
    }catch(error)
    {
      console.log('error in adding users ',error);
  }
}
 */