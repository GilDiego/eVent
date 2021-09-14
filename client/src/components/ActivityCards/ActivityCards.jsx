import React from 'react'
import ActivityCard from '../ActivityCard/ActivityCard'


const ActivityCards = ({activitiesList})=>{



    return (
        <div className='Events'>
            {/* Leo:aqui va AtivityCard */}
            {/* <ActivityCard /> */}
            <ul>
            {activitiesList.map(activity => (
                <li>
                     <ActivityCard
                     activity={activity}
                     prueba='prueba'
                     />
                </li>
                
            ))}
            </ul>
           
            
        </div>
    )
}

export default ActivityCards