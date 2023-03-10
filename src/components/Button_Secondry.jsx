import React from "react";
import { Button } from "@material-ui/core";
import ButtonStylesSecondry from "./material_styles/Button_Styles_Secondry";

function ButtonsSecondry(props){
    return (
        <Button data-testid={props.name} variant="filled" onClick={props.onTap} className={ButtonStylesSecondry("white","#F5F5F5")().root} >{props.text}</Button>
    );
}
export default ButtonsSecondry;