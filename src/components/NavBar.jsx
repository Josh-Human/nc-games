import { Link } from "react-router-dom";
import "./css/NavBar.css";
import icon from "../assets/joystick.png";
const NavBar = ({ username }) => {
    return (
        <nav>
            <Link to="/">
                <img src={icon} />
            </Link>
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/profile">{username === "" ? "Profile" : username}</Link>
        </nav>
    );
};

export default NavBar;
