import React from 'react';
import styles from './ActivityCard.module.css'


const ActivityCard = ({ activity }) => {

    function setId(id){
        console.log(id)
    }



    return (
        <div className={styles.card}>
            <h1 className={styles.titleCard}>{activity.name}</h1>
            <img src={activity.img} alt="Imagen Evento" className={styles.imgCard}/>
            
            <p className={styles.infoCard}>Lugar: {activity.place}</p>
            <p className={styles.infoCard}>Fecha: {activity.date}</p>
            <button className={styles.btnCard} onClick={() => setId(activity.id)}>Info</button>
            
        </div>
    )
}

export default ActivityCard;