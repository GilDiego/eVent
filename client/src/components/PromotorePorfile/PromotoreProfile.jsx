import React from "react";
import ListEvent from "./ListEvent";
import Grafica from  './GraphPromoter'
import styles from './PromotorePorfile.module.css';

const PromotorePorfile = () =>{
    return(
        <div className={styles.contPrin}>
            <div className={styles.contProfile}>
                <div className={styles.imgProfile}>
                    <img src="" alt="" />
                </div>
            </div>
            <div className={styles.contInfo} >
                <h3>Teatro Julio Mario Santodomingo</h3>
            </div>
            <hr/>
            
            <div className={styles.contEvents}>
                <h4>Mis Eventos</h4>
                <ListEvent />
            </div>
            <Grafica/>

        </div>
    );
}
export default PromotorePorfile