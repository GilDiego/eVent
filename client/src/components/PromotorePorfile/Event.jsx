import React from "react";
import styles from './Event.module.css';
import {Link} from 'react-router-dom'

const Evento=({name, qualification, id})=>{
    return (
        <div className={styles.contEvent}>
            <div className={styles.contName}>
                {name}
            </div>
            <div className={styles.contQuali}>
                ★★★☆☆
            </div>
            <div className={styles.btn}>
                <Link to ={`/eventDetailsUsuario/${id}`}>Edit</Link>
            </div>
        </div>
    );
}

export default Evento