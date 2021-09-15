import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.Navbar}>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/formUser">
        <button>Login</button>
      </Link>
    </nav>
  );
};

export default NavBar;
