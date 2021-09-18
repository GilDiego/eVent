import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { connect } from "react-redux";


const NavBar = ({ login }) => {
  

  return (
    <>
      <nav className={styles.Navbar}>
        <Link to="/" className={styles.homeBtn}>
          Home
        </Link>
        {login?<Link to="/" className={styles.loginBtn}>Salir</Link>:<Link to="/login" className={styles.loginBtn}>Login</Link>}
      </nav>
      
    </>
  );
};

      
function mapStateToProps(state) {
  return {
    switchSide: state.sideBarSwitch,
  };
}

export default connect(mapStateToProps)(NavBar);
