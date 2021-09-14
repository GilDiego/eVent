import React from 'react';
import styles from './ActivityCard.module.css'


const ActivityCards = () => {



    return (
        <div className={styles.card}>
            <h1 className={styles.titleCard}>Nombre de la actividad</h1>
            <img src="" alt="Imagen Evento" />
            <p className={styles.infoCard}>Fecha de la actividad</p>
            <p className={styles.infoCard}>Lugar de la Actividad</p>
            <button className={styles.btnCard}>Info</button>
            
        </div>
    )
}

export default ActivityCards;