import React from "react";
import styles from './UserPorfile.module.css'
import SubCarousel from '../SubCarousel/SubCarousel'
import { connect } from 'react-redux';

const UserPorfile = ({userState})=>{
    console.log(userState.imageUrl)
    return(
        <div className={styles.contain}>
            <div className={styles.barPorfile}>
                <div className={styles.porfileImg}>
                    <img src={userState.imageUrl} alt="xx" />
                </div>
                <h3 className={styles.nombre}>{userState.name}</h3>
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
};

const mapStateToProps= (state) =>{
    return{
        userState:state.userState
    }
}

export default connect(mapStateToProps,null)(UserPorfile)