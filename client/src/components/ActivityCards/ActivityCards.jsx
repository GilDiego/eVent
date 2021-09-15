import React from 'react'
import ActivityCard from '../ActivityCard/ActivityCard'
import {styles} from './ActivityCards.module.css'

const ActivityCards = ({activitiesList})=>{



    return (
        <div className={styles.Events}>
            <ul>
            {activitiesList.map(activity => (
                <li key={activity.id}>
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