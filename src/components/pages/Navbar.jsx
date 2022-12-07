import "./Navbar.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="header">
      <div className="container">
        <h1>
          <span className="logo1">B-</span>
          <span className="logo">Homes</span>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "var(--primary)" : "#000",
              })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "var(--primary)" : "#000",
              })}
              to="/new"
            >
              New Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "var(--primary)" : "#000",
              })}
              to="/forms"
            >
              Sign In | Sign Up
            </NavLink>
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