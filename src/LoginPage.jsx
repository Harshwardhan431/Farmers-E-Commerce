import React,{useState , useEffect} from "react";
import Buttons from "./components/Button_Primary";
import TextArea from "./components/Text_Area";
import { Button } from "@material-ui/core";
import {Link, useNavigate} from "react-router-dom";
import { listUsers } from "./graphql/queries";
import  {Amplify,API, graphqlOperation } from 'aws-amplify';

function LoginPage(props) {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [users,setUsers]=useState([]);

  const login = async ()=>{
    try{
      const userData=await API.graphql(graphqlOperation(listUsers));
      const userList=userData.data.listUsers.items;
      console.log('user list',userList);
      setUsers(userList)
      console.log("login");
      console.log(user.email+user.password);
      for(var i=0;i<3;i++)
      {
        if (userList[i]['email']==user.email)
        {
          if (userList[i]['password']==user.password)
          {
            navigate("/dashboard");
          }else{
            console.log('wrong password !!');
          }
        }
      } 
    }catch(error)
    {
      console.log('error in fetching users ',error);
    }
  }
  const [user, setUser]=useState({
    "email":"",
    "password":""
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
            <TextArea id="email" OnChange={OnChange2} label="Email Address" type="text" />
            <TextArea id="password" OnChange={OnChange2} label="Password" type="password" />
            <Link to="/Forgot_pass">
            <Button>
              Forgot Password?
            </Button>
            </Link>
            <div className="b1">
                <Buttons  text="Login" name="login" onTap={login()} />
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