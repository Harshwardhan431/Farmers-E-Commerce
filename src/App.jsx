import React,{useState} from "react";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import ForgotPassword from "./forgotPassword";



function App(){
    const [frame,set_frame]=useState(true);
    const [isUserRegistered, setUser]=useState(true); 
    
    function frame_display(){
        return frame? <RegistrationPage /> : <ForgotPassword />
    }

    

    const frame_set = name => {
        console.log(name);
        if (name === "register") {
          set_frame(true);
          setUser(false);
        } else if (name === "forgot") {
          set_frame(false);
          setUser(false);
        }

      };

        


    
    return(
        isUserRegistered ? <LoginPage onTap={frame_set} /> : frame_display()
    );
}
export default App;