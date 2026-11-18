import React from 'react';
import styles from './UserPorfile.module.css';
import { connect } from 'react-redux';
import SubCarousel from '../SubCarousel/SubCarousel';
const UserPorfile = ({ userState }) => {
  return (
    <div className={styles.contain}>
      <div className={styles.barProfile}>
        <div className={styles.profileImg}>
          <img src={userState.picture} alt="xx" />
        </div>
      </div>
      <div className={styles.contInfo}>
        <h3>¡Bienvenido! {userState.username}</h3>
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
  );
};
const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};
export default connect(mapStateToProps, null)(UserPorfile);
