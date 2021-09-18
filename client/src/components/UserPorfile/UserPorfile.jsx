import React from "react";
import styles from './UserPorfile.module.css'
import SubCarousel from '../subCarousel/SubCarousel'
import NavBar from "../NavBar/NavBar";
const UserPorfile = ()=>{
    return(
        <div className={styles.contain}>
            <NavBar login={true}/>
            <div className={styles.barPorfile}>
                <div className={styles.porfileImg}>
                    <img src="https://payload.cargocollective.com/1/3/122148/1670411/13.jpg" alt="xx" />
                </div>
                <h3 className={styles.nombre}>Juan Perez</h3>
                <h4 className={styles.ciudad}>Bogotá, Colombia</h4>
            </div>

            <div className={styles.myEvents}>
                <h3>Mis Eventos</h3>
                    <SubCarousel />
            </div>
            <div className={styles.favorites}>
                <h3>Eventos Favoritos</h3>
                    <SubCarousel />
            </div>
        </div>
    )
}

export default UserPorfile