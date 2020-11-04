import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
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
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Me</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
