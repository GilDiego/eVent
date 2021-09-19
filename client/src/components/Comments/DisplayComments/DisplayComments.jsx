import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import './DisplayComments.css'


export default function Reviews({postId}) {
    const [comments, setComments] = useState([])
    const [average, setAverage] = useState(0)


    useEffect(() => {
    async function fetchComments(){
        const response = await axios.get(`http://localhost:3001/api/comment/all`)
        setComments(response.data)
    }
    fetchComments()
    },[])
    
    useEffect(() =>{
        setAverage(findAvg(comments))
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
        <div className='wrapper'>
        {
            !comments.length ? (
                    <div>
                        <p>Este evento todavia no tiene comentarios.</p>
                    </div>
                ) : (
                    <div>
                        {
                            average !== 0 ? (
                                // <p>Rating General: x/x</p>
                                <p>Rating General: {average > 0 ? setStars(Math.floor(average)) : 'x/x'}</p>
                            ) : (
                                <p>Este evento todavia no tiene calificaciones.</p>
                            )
                        }
                        {
                        comments.map(comment => (
                            <Card
                                key={keyGenerator++}
                                userId={comment.user.first_name}
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
