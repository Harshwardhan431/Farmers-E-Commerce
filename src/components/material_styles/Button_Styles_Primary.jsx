import React from "react";
import  Button  from '@material-ui/core/Button';
import { colors, makeStyles} from "@material-ui/core";



const ButtonStyles=(bg_color, color)=>{
    return (makeStyles({
    root: {
        marginTop:"25px",
        marginLeft:"25px",
        backgroundColor: bg_color,
        color: "white",
        width:"200px",
        '&:hover':{
            backgroundColor:color
        },
        '&:active':{
            backgroundColor:bg_color
        },

      },
}));}

export default ButtonStyles;