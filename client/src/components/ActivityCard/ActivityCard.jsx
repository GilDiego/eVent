import React from "react";
import styles from "./ActivityCard.module.css";
import {Link} from 'react-router-dom';


const ActivityCard = ({ event }) => {
  function setId(id) {
    console.log(id);
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.titleCard}>{event.name}</h1>
      <img src={event.pictures[0]} alt="Imagen Evento" className={styles.imgCard} />

      <p className={styles.infoCard}>Lugar: {event.location}</p>
      <p className={styles.infoCard}>Fecha: sin fecha</p>
      <p className={styles.infoCard}>Precio: {event.price}$</p>
      {/* <button className={styles.btnCard} onClick={() => setId(activity.id)}>
        Info
      </button> */}
      
      {/* <Link to={`/eventDetailsUsuario/${activity.id}`}>
        <button className={styles.btnCard} onClick={() => setId(activity.id)}>Info</button>
      </Link> */}
      
      <Link to={`/eventDetailsUsuario/${event.id}`}>
        <button className="EbtnCard margTop40" onClick={() => setId(event.id)}>Info</button>
      </Link>
    </div>
  );
};

export default ActivityCard;
