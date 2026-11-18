import React, { useEffect } from 'react';
import ListEvent from './ListEvent';
import styles from './PromotorePorfile.module.css';
import { getEventPromoter } from '../../actions/actions';
import { connect } from 'react-redux';
const PromotorePorfile = ({ userData, getEventPromoter, promoterEvents }) => {
  useEffect(() => {
    const getEvents = async () => {
      try {
        const events = await getEventPromoter(userData.id);
        return events;
      } catch (error) {
        return error;
      }
    };
    getEvents();
  }, []);
  const whats = {
    whats: `https://api.whatsapp.com/send?phone=${524612917348}`,
  };
  return (
    <div className={styles.contPrin}>
      <div className={styles.contProfile}>
        <div className={styles.imgProfile}>
          <img src={userData.picture} alt="" />
        </div>
      </div>
      <div className={styles.contInfo}>
        <h3>
          {userData.business_type} {userData.business_name}
        </h3>
      </div>
      <hr />

      <div className={styles.contEvents}>
        <div className={styles.barEvent}>
          <h4> Eventos</h4>
        </div>
        <div className={styles.whats}>
          <a href={whats.whats} target="_blank" rel="noopener noreferrer">
            <img
              src="https://1.bp.blogspot.com/-c156R1-yBRg/YIJJXWpUS9I/AAAAAAAAFP4/Q7eQOnTtqesWS2Q7s8CxireQvnB1OwNUwCLcBGAsYHQ/w680/logo-whatsApp-"
              className={styles.whats}
            />
          </a>
        </div>

        <ListEvent events={promoterEvents} />
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    promoterEvents: state.promoterEvents,
  };
}
export default connect(mapStateToProps, {
  getEventPromoter,
})(PromotorePorfile);
