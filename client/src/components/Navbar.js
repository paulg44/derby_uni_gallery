import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logoImage from "../assets/images/uni_derby_logo.jpg";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src={logoImage} alt="logo - University of Derby"></img>
      </Link>
      <div className="navLinksContainer">
        <ul className="navLinks">
          <li>Course Search</li>
          <li>Study</li>
          <li>Life</li>
          <li>International</li>
          <li>Research</li>
          <Link to="/gallery">Gallery</Link>
          <li>Alumni</li>
        </ul>
      </div>
      <div className="searchIcon">
        <FaSearch />
      </div>
    </nav>
  );
}

export default Navbar;
