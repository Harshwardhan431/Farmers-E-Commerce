import { makeStyles } from "@material-ui/core/styles";
const TextFieldStyles=(color1)=>{
    return (makeStyles({
 
        root: {
          marginTop:"10px",
          marginBottom:"10px",
          marginLeft:"25px",
          marginRight:"25px",

          "& label.Mui-focused": {
            color: color1,
          },
          "& .MuiOutlinedInput-root": {

            "& fieldset":{
              borderRadius:"25px"
            },
            "&.Mui-focused fieldset": {
              borderColor: color1,
            },
            "&:hover fieldset":{
              borderColor:color1
            }
          },
        },
      }));}
export default TextFieldStyles;

