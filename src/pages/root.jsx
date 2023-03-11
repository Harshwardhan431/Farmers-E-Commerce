import LoginPage from "../LoginPage";
import { Outlet } from "react-router-dom";
function Root(){
    return(<>
        <Outlet/>
        </>);
}
export default Root;