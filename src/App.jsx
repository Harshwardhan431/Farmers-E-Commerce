import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import ForgotPassword from "./forgotPassword";
import { Children } from "react";
import Profile from "./pages/profile_page";
import Root from "./pages/root";
import Dashboard from "./pages/dasboard_page";
import Product_Page from "./pages/customer_pages/Products_Catalouge/product_card";
import Products_Display from "./pages/customer_pages/Products_Catalouge/product_page";
import Cart_page from "./pages/customer_pages/Cart/cart_page";
import Orders from "./pages/customer_pages/Orders/orders";
const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { path: "/", element: <LoginPage />, },
      { path: "/Register", element: <RegistrationPage /> },
      { path: "/Forgot_pass", element: <ForgotPassword /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/profile", element: <Profile /> },
      { path: "/Product", element: <Products_Display /> },
      { path: "/Cart", element: <Cart_page /> },
      { path: "/Orders", element: <Orders /> },

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