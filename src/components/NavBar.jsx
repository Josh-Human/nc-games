import { Link } from "react-router-dom";
import "./css/NavBar.css";
const NavBar = () => {
    return (
        <nav>
            <Link to="/">Icon</Link>
            <Link to="/">Home</Link>
            <Link to="/">Categories</Link>
            <Link to="/">Profile</Link>
        </nav>
    );
};

export default NavBar;
