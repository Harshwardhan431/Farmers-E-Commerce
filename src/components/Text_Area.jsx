import React from "react";
import TextField from '@material-ui/core/TextField';
import TextFieldStyles from "./textarea";
function TextArea(props){
    return(
        <TextField error={props.Error} helperText={props.HelperText}  id={props.id} value={props.value} onChange={props.OnChange}  variant="outlined" label={props.label} type={props.type} className={TextFieldStyles("#03C04A")().root}/>
    );
}

export default TextArea;