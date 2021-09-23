import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import './DisplayComments.css'


export default function Reviews(id) {
    const [comments, setComments] = useState([])
    const [eventRating, setEventRating] = useState(0)


    useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3001/api/comment/all`)
        const generalRating = await axios.get(`http://localhost:3001/api/comment/generalRating?id=${id}`)
        if (response.data.length) setComments(response.data.filter(event => Number(event.eventId) === Number(id.state)));
        if (generalRating) setEventRating(generalRating)
    }
    fetchData()
        
    },[id])


    //Diego: Funcion que recibe una calificacion y la convierte a estrellas. Puede recibir numeros enteros 1-5
    function setStars(grade){
        let result = ''
        while (grade !== 0){
            result += '★'
            grade--
        }        
        while (result.length < 5) {
            result += '☆'
        }
        return result
    }


    let keyGenerator = 0
    return (
        <div className='comments-wrapper'>
        {
            !comments.length ? (
                    
                        <p className='no-reviews'>Este evento todavia no tiene comentarios.</p>
                    
                ) : (
                    <div>
                        {
                            eventRating ? (
                                <p className='general-rating'>Rating General: <span className='general-stars'>{setStars(eventRating)}</span></p>
                            ) : (
                                <p className='no-rating'>Este evento todavia no tiene calificaciones.</p>
                            )
                        }
                        {
                        comments.map(comment => (
                            <Card
                                key={keyGenerator++}
                                userId={comment.user.userId}
                                rating={setStars(comment.rating)}
                                review={comment.review}
                            />
                        ))
                        }
                    </div>
            )
        }
        </div>
    )
}
