import React from "react";
import "./styles.css";
import logo from "../logo.gif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="intro">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-link">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;