import "./Navbar.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="header">
      <div className="container">
        <h1>
          <span style={{ color: "#222" }}>Best</span>
          <span className="primary">Homes</span>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/new">New Listing</NavLink>
          </li>
          <li>
            <NavLink to="/forms">Sign In | Sign Out</NavLink>
          </li>
        </ul>
       
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={40} style={{ color: "#333" }} />
          ) : (
            <FaBars size={40} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
