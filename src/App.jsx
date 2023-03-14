import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import ForgotPassword from "./forgotPassword";
import { Children } from "react";
import Profile from "./pages/profile_page";
import Root from "./pages/root";
import Dashboard from "./pages/dashboard_page";

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
  return (
    <RouterProvider router={router} />
  );
}
export default App;