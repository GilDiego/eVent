import React from 'react';
import styles from './ActivityCard.module.css';
import { Link } from 'react-router-dom';
const ActivityCard = ({ event }) => {
  return (
    <Link to={`/eventDetailsUsuario/${event.id}`}>
      <div className={styles.card}>
        <h2 className={styles.titleCard}>{event.name}</h2>
        <h4 className={styles.tagsCard}>{event.tags}</h4>
        <img src={event.pictures[0]} alt="Imagen Evento" className={styles.imgCard} />
        <p className={styles.infoCard}>Precio: ${event.price}</p>
      </div>
    </Link>
  );
};
export default ActivityCard;
