import React, {useEffect, useState} from 'react'
import  axios from 'axios'
import styles from './Graph.css'




export function Graph (id){



    //dafne: primero tengo que traerme unicamente los de cada evento en este caso es event id 
    //luego tengo que buscar cada comentario que este en 5/4/3/2/1/0 lo pongo enun array para poder
    // si se esgna dfividindo por estrelalas ya solo saco los q son del evento 
    // sacar el tammaño y asi mandarse lo a la grafica 

   
  const [comments, setComments] = useState([])
    const [eventRating, setEventRating] = useState(0)


    useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3001/api/comment/all`)
        const generalRating = await axios.get(`http://localhost:3001/api/comment/generalRating?id=${id}`)
        if (response.data.length) setComments(response.data.filter(event => Number(event.eventId) === Number(id.state)));
        console.log('soy data ',response.data )
        if (generalRating) setEventRating(generalRating)
        console.log('soy  commengs ',setComments)
    }
    fetchData()
        
    },[id])
    console.log('soy comments ',setComments)


    return( 
        <>
        </>
    )


}

export default Graph

