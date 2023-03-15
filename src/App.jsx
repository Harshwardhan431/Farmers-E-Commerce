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

  useEffect(()=>{
    fetchUsers();
  },[]);

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

  return (
    <RouterProvider router={router} />
  );
}
export default App;