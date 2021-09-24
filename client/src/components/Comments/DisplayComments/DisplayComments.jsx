import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import style from './DisplayComments.module.css'


export default function Reviews(id) {
    const [data, setData] = useState([])
    const [display, setDisplay] = useState([])
    const [eventRating, setEventRating] = useState(0)


    useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3001/api/comment/all?id=${id.state}`)
        const generalRating = await axios.get(`http://localhost:3001/api/comment/generalRating?id=${id.state}`)
console.log(response.data, 'esta es mi respuesta')
        if (response.data.length) {
            // por cada array filtrar solo comentarios que tengan el ID del evento
            setData(Object.entries(response.data).forEach(arr => arr.filter(event =>Number(event.eventId) === Number(id.state))));
            setDisplay(data)
        }
        if (generalRating) setEventRating(generalRating)
    }
    fetchData()
    },[])


    //Diego: Funcion que recibe una calificacion y la convierte a estrellas. Puede recibir numeros enteros 1-5
    function toStars(grade){
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
        <div className={style.commentsWrapper}>
        {
            !data.length ? (
                    
                        <p className={style.noReviews}>Este evento todavia no tiene comentarios.</p>
                    
                ) : (
                    <div>
                        <div className={style.leftContainer}>
                        {
                            eventRating ? (
                                <>
                                    <p className={style.generalRating}>
                                    Rating General: <span className='general-stars'>{toStars(eventRating)}</span>
                                    </p>
                                    <p>
                                        {data.length} calificaciones para este evento.
                                    </p>
                                    <div className={style.starContainer}>
                                        <p onClick={setDisplay(data.fiveStars)}>
                                            ★★★★★ {data.fiveStars.length}%
                                        </p>
                                        <p onClick={setDisplay(data.fourStars)}>
                                            ★★★★☆ {data.fourStars.length}%
                                        </p>
                                        <p onClick={setDisplay(data.threeStars)}>
                                            ★★★☆☆ {data.threeStars.length}%
                                        </p>
                                        <p onClick={setDisplay(data.twoStars)}>
                                            ★★☆☆☆ {data.twoStars.length}%
                                        </p>
                                        <p onClick={setDisplay(data.oneStar)}>
                                            ★☆☆☆☆ {data.oneStar.length}%
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <p className={style.noRating}>
                                    Este evento todavia no tiene calificaciones.
                                </p>
                            )
                        }

                        </div>
                        {
                        display.map(comment => (
                            <Card
                                key={keyGenerator++}
                                name={`${comment.user.first_name} ${comment.user.last_name}`}
                                rating={toStars(comment.rating)}
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
