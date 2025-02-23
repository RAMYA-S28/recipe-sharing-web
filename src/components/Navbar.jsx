import { Link } from "react-router-dom";
import "./Navbar.css"; // Add styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Recipe Sharing</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-recipe">Add Recipe</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
