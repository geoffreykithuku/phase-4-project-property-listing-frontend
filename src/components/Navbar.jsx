import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link >Home</Link>
      <Link >Login</Link>
      <Link >Signup</Link>
    </div>
  );
};

export default Navbar;