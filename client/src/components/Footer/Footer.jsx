import React from 'react';
import styles from './Footer.module.css'
<<<<<<< HEAD
import img from '../../Utilities/logoProvi.png'
=======
import img from '../../utilities/logoProvi.png'
>>>>>>> 0ce466d1aed5dc0c2fb19369db7314d2ee0c8ad0

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