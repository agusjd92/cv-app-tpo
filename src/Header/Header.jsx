import React from "react";
import "./styles.css";
import logo from "../logo.gif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="menu">
        <a>
          {/* <img src={logo} alt="" srcSet="" /> */}
        </a>
        <ul className="menu_items">
          <li className="active">
            <Link to= "/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/contact" >  Contact </Link>
          </li>
        </ul>
        <span className="btn_menu">
          <i className="fa fa-bars"></i>
        </span>
      </nav>
    </div>
  );
};

export default Header;
