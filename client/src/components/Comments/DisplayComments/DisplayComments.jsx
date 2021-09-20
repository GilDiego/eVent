import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import './DisplayComments.css'


export default function Reviews(id) {
    const [comments, setComments] = useState([])
    const [average, setAverage] = useState(0)

    useEffect(() => {
    async function fetchComments(){
        const response = await axios.get(`http://localhost:3001/api/comment/all`)
        setComments(response.data.filter(event => Number(event.eventId) === Number(id.state)))
    }
    fetchComments()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    useEffect(() =>{
        setAverage(findAvg(comments))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[comments])
    
    // Diego: Funcion para promediar calificacion general del evento
    let arr = []
    function findAvg(data){
        if (!data.length) return
        else {
            data.forEach(comment => arr.push(Number(comment.rating)))
            let quantity = arr.length
            let sum = arr.reduce((a, b) => a + b, 0)
            return sum / quantity
        }
    }
    
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
                            average > 0 ? (
                                <p className='general-rating'>Rating General: <span className='general-stars'>{setStars(Math.floor(average))}</span></p>
                            ) : (
                                <p className='no-rating'>Este evento todavia no tiene calificaciones.</p>
                            )
                        }
                        {
                        comments.map(comment => (
                            <Card
                                key={keyGenerator++}
                                // userId={comment.user.userId}
                                userId={'Cesar'}
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
