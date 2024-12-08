import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../assets/images/uni_derby_logo.jpg";
import { useState } from "react";

function Navbar() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const openNavMenu = () => {
    setNavMenuOpen(!navMenuOpen);
  };

  const closeNavMenu = () => {
    setNavMenuOpen(false);
  };

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src={logoImage} alt="logo - University of Derby"></img>
      </Link>

      <div className="navMenu" onClick={openNavMenu}>
        <FaBars />
      </div>
      <div className={`navLinksContainer ${navMenuOpen ? "open" : ""}`}>
        <ul className="navLinks">
          {navMenuOpen && (
            <FaTimes className="faCross" onClick={closeNavMenu} />
          )}
          <li>Course Search</li>
          <li>Study</li>
          <li>Life</li>
          <li>International</li>
          <li>Research</li>
          <li>
            <Link to="/gallery" onClick={closeNavMenu}>
              Gallery
            </Link>
          </li>

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
