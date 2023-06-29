import React from "react";
import "./styles.css";
import logo from "../logo.gif";
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div class="intro">
      <nav class="navbar">
        <div class="navbar-logo">
          <a>
            <img src={logo} alt="" srcSet="" />
          </a>
        </div>
        <div class="navbar-link">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li> <Link to="/contact" >  Contact </Link></li>
          </ul>
        </div>

      </nav>
    </div>
  );
};



export default Header;

