import React, { useState , useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import ForgotPassword from "./forgotPassword"; 
import { Children } from "react";
import Profile from "./pages/profile_page";
import Root from "./pages/root";
import Dashboard from "./pages/dasboard_page";    
import  {Amplify,API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
//import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';
import { listUsers } from "./graphql/queries";
import { updateUser } from "./graphql/mutations";


Amplify.configure(awsconfig);

const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { path: "/", element: <LoginPage />, },
      { path: "/Register", element: <RegistrationPage /> },
      { path: "/Forgot_pass", element: <ForgotPassword /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/profile", element: <Profile /> }

    ]
  },
])

function App() {
  //const [isUserRegistered, setUser] = useState(true);
  
  const [users,setUsers]=useState([]);

  // useEffect(()=>{
  //  // fetchUsers();
  //   //upUser(0);
  // },[]);

  const fetchUsers = async ()=>{
    try{
      const userData=await API.graphql(graphqlOperation(listUsers));
      const userList=userData.data.listUsers.items;
      console.log('user list',userList);
      setUsers(userList)
    }catch(error)
    {
      console.log('error in fetching users ',error);
    }
  }

  const upUser = async (idx)=>{
    try{
      const user=users[idx];
      //user.name="ha" ;
      //console.log(' xyz ' , user, ' baba');
      delete user.createdAt;
      delete user.updatedAt;
      
      const userData=await API.graphql(graphqlOperation(updateUser, {input: user}));
      const userList= [...users];
      userList[idx]=userData.data.updateUser;
      setUsers(userList)
    }catch(error)
    {
      console.log('error in adding users ',error);
    }
  }

  return (
    <RouterProvider router={router} />
  );
}
export default App;