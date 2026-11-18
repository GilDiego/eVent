import React from 'react';
import styles from './ListEvent.module.css';
import Bienvenido from '../Loading/Bienvenido';
import Evento from './Event';
const ListEvent = ({ events }) => {
  return (
    <div className={styles.containerList}>
      {(() => {
        if (events.length === 0) {
          return <Bienvenido />;
        } else {
          return events?.map((event) => (
            <Evento name={event.name} qualification="4" id={event.id} />
          ));
        }
      })()}
    </div>
  );
};
export default ListEvent;
