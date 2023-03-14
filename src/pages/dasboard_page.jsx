import { Link } from "react-router-dom";
import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";
function Dashboard(){
    return (<>
    <NavBar/>
    <Link to="/profile">Complete Profile</Link>
    </>);
}
export default Dashboard