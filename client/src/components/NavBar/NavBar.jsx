import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { connect } from "react-redux";
import { setSideBar } from "../../actions/actions";

const NavBar = ({ setSideBar, switchSide }) => {
  function setSide() {
    if (switchSide) {
      setSideBar(false);
    } else setSideBar(true);
  }

  return (
    <>
      <nav className={styles.Navbar}>
        <Link to="/" className={styles.homeBtn}>
          Home
        </Link>
        <Link to="/formUser" className={styles.loginBtn}>
          Login
        </Link>
      </nav>
      <div className={styles.subNav}>
        <button className={styles.sideBarBtn} onClick={setSide}>
        <span className={styles.icon}>
        <i className="fas fa-bars"></i>
        </span>
        </button>
      </div>
    </>
  );
};

      
function mapStateToProps(state) {
  return {
    switchSide: state.sideBarSwitch,
  };
}

export default connect(mapStateToProps, { setSideBar })(NavBar);
