import React from "react";
import TextField from "@material-ui/core/TextField";
import TextFieldStyles from "../components/textarea";

function Profile(){
    return (
        <div>
             <h1>Complete the regristration details</h1>
             <br />
             <TextField  variant="outlined" label="Name" type="text" className={TextFieldStyles("#03C04A")().root}/> 
             <br/>
             <TextField  variant="outlined" label="Sir-Name" type="text" className={TextFieldStyles("#03C04A")().root}/>
             <br/>
             <TextField  variant="outlined" label="City" type="text" className={TextFieldStyles("#03C04A")().root}/> 
             <br/>
             <TextField  variant="outlined" label="Entity" type="text" className={TextFieldStyles("#03C04A")().root}/>
             <br/>
             <TextField  variant="outlined" label="Phone Number" type="text" className={TextFieldStyles("#03C04A")().root}/>
             <br/>
             <TextField  variant="outlined" label="Password" type="text" className={TextFieldStyles("#03C04A")().root}/>
             <br/>
             <TextField  variant="outlined" label="Confirm Pasword" type="text" className={TextFieldStyles("#03C04A")().root}/>
             <br/>
             
             <br/>
             <button >
                 Complete
             </button>    
        </div>
   
    );
}

export default Profile;