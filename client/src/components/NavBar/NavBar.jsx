import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () =>{
    return (
        <nav className={styles.Navbar}>
            <Link to="/" className={styles.homeBtn}>          
                 Home       
            </Link>
            <Link to="/formUser" className={styles.loginBtn}>         
                Login     
            </Link>       

        </nav>
    )
}

export default NavBar;
