import React from 'react'
import ActivityCards from '../ActivityCards/ActivityCards'
import styles from './Home.module.css'
import activitiesList from '../../FakeDB/FakeDB'
import Carousel from '../Carousel/Carousel'

const Home = () =>{
    //* La informacion de las actividades esta en el archivo FakeDB
    return(
        <div className={styles.Home}>
            <Carousel />
            <ActivityCards 
            activitiesList={activitiesList}
            />
        </div>
    )
}

export default Home