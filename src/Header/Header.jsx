import React from "react";
import "./styles.css";
import logo from "../logo.gif";
import { Link } from "react-router-dom";
import { Link as Link1, animateScroll as scroll } from 'react-scroll';


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
          <Link1
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            duration={300}
            className="my-link"
          >
            
            Contact
            </Link1>
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
