import React from 'react'
import './Home.css'
import img from "./media/provisional.svg"
import ActivityCards from '../ActivityCards/ActivityCards'

const Home = () =>{

    const activitiesList = [
        {
            name:'Danza regional',
            date: '20/09/2021',
            place: 'Teatro del pueblo',
            img:'https://www.eventindustryshow.com/img/blog/Eventos-y-Exposiciones-web-Ballet-Folklorico-De-Mexico-Coliseum-215-700x455.jpg'
        },
        {
            name:'Cuarteto de cuerdas',
            date: '22/09/2021',
            place: 'Teatro Degollado',
            img:'https://elcultural.com/wp-content/uploads/imgBD/20170210/escenarios/img/39218_1.jpg'
        },
        {
            name:'Teatro evangelico',
            date: '22/09/2021',
            place: 'Templo de la santisima',
            img:'https://i.ytimg.com/vi/Ebx1XXZrY54/maxresdefault.jpg'
        },
    ];

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