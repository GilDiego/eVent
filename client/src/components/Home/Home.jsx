import React from 'react'
import './Home.css'
import img from "./media/provisional.svg"
const Home = () =>{
    return(
        <div className='Home'>
            <div className='Slider'>
                <img src={img} alt="..." />
            </div>
            <div className='Events'>
                eventos
            </div>
        </div>
    )
}

export default Home