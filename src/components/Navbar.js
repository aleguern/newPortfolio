import React from "react";
import { Link } from "gatsby";

const Navbar = props => {
  return (
    <div className="navbar">
      <ul className="navlink-container">
        <Link className="navlink selected" to="/">
          Accueil
        </Link>
        <Link className="navlink" to="/#projects">
          Portfolio
        </Link>
        <Link className="navlink" to="/#skills">
          Compétences
        </Link>
        <Link className="navlink" to="/contact/">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
