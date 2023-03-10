import React from "react";
import { Button } from "@material-ui/core";
import ButtonStyles from "./material_styles/Button_Styles_Primary";

function Buttons(props){
    return (
        <Button data-testid={props.name} variant="filled" onClick={props.onTap} className={ButtonStyles("green","#03C04A")().root} >{props.text}</Button>
    );
}
export default Buttons;