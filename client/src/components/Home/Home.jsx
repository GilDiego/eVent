import React from 'react'
import './Home.css'
import img from "./media/provisional.svg"
import ActivityCards from '../ActivityCards/ActivityCards'

const Home = () =>{
    return(
        <div className='Home'>
            <div className='Slider'>
                <img src={img} alt="..." />
            </div>
            <ActivityCards />
        </div>
    )
}

export default Home