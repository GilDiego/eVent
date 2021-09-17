import React from "react";
import styles from "./ActivityCard.module.css";
import {Link} from 'react-router-dom';


const ActivityCard = ({ activity }) => {
  function setId(id) {
    console.log(id);
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.titleCard}>{activity.name}</h1>
      <img src={activity.img} alt="Imagen Evento" className={styles.imgCard} />

      <p className={styles.infoCard}>Lugar: {activity.place}</p>
      <p className={styles.infoCard}>Fecha: {activity.date}</p>
      {/* <button className={styles.btnCard} onClick={() => setId(activity.id)}>
        Info
      </button> */}
      
      {/* <Link to={`/eventDetailsUsuario/${activity.id}`}>
        <button className={styles.btnCard} onClick={() => setId(activity.id)}>Info</button>
      </Link> */}
      
      <Link to={`/eventDetailsUsuario/${activity.id}`}>
        <button className="EbtnCard" onClick={() => setId(activity.id)}>Info</button>
      </Link>
    </div>
  );
};

export default ActivityCard;
