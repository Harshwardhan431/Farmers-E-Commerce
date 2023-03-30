import React, { useState } from "react";
import TextArea from "./components/Text_Area";
import Buttons from "./components/Button_Primary";
import ButtonsSecondry from "./components/Button_Secondry";
import { Link, useNavigate} from "react-router-dom";

function RegistrationPage(props){
    const navigate=useNavigate();
    const [Error,setError]=useState({
        "contact":false
    })
    const [Helper,setHelper]=useState({
        "contact":""
    })


    function addUser(){
       // navigate("/dashboard");
        console.log("start ");
        var ran="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var num="0123456789";
        var length=1+Math.floor(Math.random() * 6);
        var id="";
        for(var i=0;i<length;i++){
            var element=id+ran[Math.floor(Math.random() * 25)]+num[Math.floor(Math.random() * 9)];
            id=element;
            console.log(id);
        }
        console.log("id:"+id);
        
        const data={
        "user_id": "hshsgtjak13ha",
        "name": "dfhr",
        "last_name": "errfg",
        "email":"rhetf",
        "city":"hretteh",
        "password": "thetefd",
        "contact":"testjh",
        "address":"",
        "zip": "",
        "type": "",
        };
       // const data=Object.values(user);
        //console.log(data);
        //ete push krto aws la iuser table mdhr
    }
    const [user,setUser]=useState({
        "user_id": "hshsgtjak13ha",
        "name": "",
        "last_name": "",
        "email":"",
        "city":"",
        "password": "",
        "contact":"",
        "address":"",
        "zip": "",
        "type": "",
    });
    //const data=user;
    const OnChange3 = (e) => {
        e.preventDefault();
        const newdata = user;
        const {value,id}=e.target;
        var newError=Error;
        var newHelper=Helper;
        if(id=="contact"){
            
            if(value.length!==10){
                console.log(value.length);
                newError[id]=true;
                console.log(newError[id]);
                console.log(Error);
                newHelper[id]="Contact number inalid";
            }
            else{
                console.log(value.length);
                newError[id]=false;
                console.log(newError[id]);
                newHelper[id]="";

            }
            setError(newError);
            setHelper(newHelper);
        }
        newdata[id] = value;
        setUser(newdata);
        console.log(user);
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
                    <TextArea id="type" OnChange={OnChange3} label="Entity" type="text" />
                    <TextArea Error={Error.contact} HelperText={Helper.contact}   id="contact" OnChange={OnChange3} label="Phone No" type="text" />
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

