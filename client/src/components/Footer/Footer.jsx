import React from 'react';
import styles from './Footer.module.css'
import img from '../../Utilities/logoProvi.png'
import imgw from '../../Utilities/whatsapp.svg'
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