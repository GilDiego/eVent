import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/formUser">
        <button>Login</button>
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NavBar;
