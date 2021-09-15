import React from 'react'
import './Home.css'
import img from "./media/provisional.svg"
import ActivityCards from '../ActivityCards/ActivityCards'
import {styles} from './Home.module.css'
const Home = () =>{
    //* La informacion de las actividades esta en el archivo FakeDB
    return(
        <div className={styles.Home}>
            <div className={styles.Slider}>
                <img src={img} alt="..." />
            </div>
            <ActivityCards 
            activitiesList={activitiesList}
            />
        </div>
    )
}

export default Home