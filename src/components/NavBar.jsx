import { Link } from "react-router-dom";
import "./css/NavBar.css";
import icon from "../assets/joystick.png";
const NavBar = () => {
    return (
        <nav>
            <Link to="/">
                <img src={icon} />
            </Link>
            <Link to="/">Home</Link>
            <Link to="/">Categories</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    );
};

export default NavBar;
