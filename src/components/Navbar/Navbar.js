import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <div className="dropdown">
            <button className="dropbtn">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="dropdown-content">
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-me"> About Me</NavLink>
              </li>
              <li>
                <NavLink to="/projects"> Projects</NavLink>
              </li>
              {/* <li>
                <NavLink to="/blog">Blog</NavLink>
              </li> */}
              <li>
                <NavLink to="/contact">Contact Me</NavLink>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
