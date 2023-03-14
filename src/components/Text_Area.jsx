import React from "react";
import TextField from '@material-ui/core/TextField';
import TextFieldStyles from "./textarea";
function TextArea(props){
    return(
        <TextField  variant="outlined" label={props.label} type={props.type} className={TextFieldStyles("#03C04A")().root}/>
    );
}

export default TextArea;