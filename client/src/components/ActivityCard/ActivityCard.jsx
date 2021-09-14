import React from 'react';
import styles from './ActivityCard.module.css'


const ActivityCard = () => {



    return (
        <div className={styles.card}>
            <h1 className={styles.titleCard}>Nombre de la actividad</h1>
            <img src="https://www.eventindustryshow.com/img/blog/Eventos-y-Exposiciones-web-Ballet-Folklorico-De-Mexico-Coliseum-215-700x455.jpg" alt="Imagen Evento" className={styles.imgCard}/>
            <p className={styles.infoCard}>Fecha de la actividad</p>
            <p className={styles.infoCard}>Lugar de la Actividad</p>
            <button className={styles.btnCard}>Info</button>
            
        </div>
    )
}

export default ActivityCard;