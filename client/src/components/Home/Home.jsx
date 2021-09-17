import React from "react";
import { connect } from "react-redux";
import styles from "./Home.module.css";
import ActivityCards from "../ActivityCards/ActivityCards";
import Carousel from "../Carousel/Carousel";
import SideBar from "../SideBar/SideBar";
import NavBarHome from "../NavBarHome/NavBarHome";
//* La informacion de las actividades esta en el archivo FakeDB
import activitiesList from "../../FakeDB/FakeDB";

const Home = ({ switchSide }) => {
  return (
    <>
    <NavBarHome/>
    <div className={styles.container}>
        {switchSide?<div className={styles.sideBar}>
        <SideBar />
        </div>: <div></div> }
      <div>
        <Carousel />
        <ActivityCards activitiesList={activitiesList} />
      </div>
    </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    switchSide: state.sideBarSwitch,
  };
}
export default connect(mapStateToProps)(Home);