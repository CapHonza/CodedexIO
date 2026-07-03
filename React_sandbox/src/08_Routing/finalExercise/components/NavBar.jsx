import { Link } from "react-router-dom";

export default function NavBar() {
    return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/Customers">Customers</Link>
        <Link to="/About">About</Link>
    </nav>
    );
}
