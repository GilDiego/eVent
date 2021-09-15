import React from "react";
import ActivityCards from "../ActivityCards/ActivityCards";
import styles from "./Home.module.css";
import activitiesList from "../../FakeDB/FakeDB";
import Carousel from "../Carousel/Carousel";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  //* La informacion de las actividades esta en el archivo FakeDB
  return (
    <div className={styles.container}>
        {true?<div className={styles.sideBar}>
        <SideBar />
        </div>: <div></div> }
      <div>
        <Carousel />
        <ActivityCards activitiesList={activitiesList} />
      </div>
    
    </div>
  );
};

export default Home;
