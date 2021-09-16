import React from 'react';
import styles from './Footer.module.css'
import img from '../../Utilities/logoProvi.png'

const Footer = () =>{
    return (
        <footer className={styles.Footer}>
            <div className={styles.logo}>
                <img src={img} alt="" />
            </div>
        </footer>
    )
}

export default Footer;