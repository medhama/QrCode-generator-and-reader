import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";
import Logo from "./images/logoqeveyer.svg";

const NavBar = () => {
  return (
    <div className="sum">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="item">
        <ul className="ul">
          <li>
            <Link to="/">Generate QR code</Link>
          </li>
          <li>
            <Link to="/scan">Scan QR code</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
