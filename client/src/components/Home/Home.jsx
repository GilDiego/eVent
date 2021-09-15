import React from 'react'
import './Home.css'
import img from "./media/provisional.svg"
import ActivityCards from '../ActivityCards/ActivityCards'
import activitiesList from '../../FakeDB/FakeDB'

const Home = () =>{
    //* La informacion de las actividades esta en el archivo FakeDB
    return(
        <div className='Home'>
            <div className='Slider'>
                <img src={img} alt="..." />
            </div>
            <ActivityCards 
            activitiesList={activitiesList}
            />
        </div>
    )
}

export default Home