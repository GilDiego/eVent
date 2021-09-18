import React from 'react'
import './DisplayComments.css'


export default function Reviews() {

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

    // Diego: Calificacion provisional, refresh para obtener una random.
    // (Math.floor(Math.random() * 5) + 1)
    
    // Comentarios hardcodeados
    const comments = [
        {usuario: 'Pepito One',calificacion: 5,comentario: 'Me encanto el evento, una experiencia inigualable!!!!11'},
        {usuario: 'Pepitwo', calificacion: 1, comentario: 'Nunca habia visto un baño tan sucio y la comida estaba fria.'},
        {usuario: 'Pepithree', calificacion: 3,comentario: 'Hubiera preferido ir al de Shakira, pero no estuvo mal.'}
        ]

    return (
        <div className='wrapper'>
        {comments.map(i => 
            <div className='item'>
                <p className='author'>{i.usuario}</p>
                <p className='rating'>{setStars(i.calificacion)}</p>
                <p className='comment'>{i.comentario}</p>
            </div>
        )}
        </div>
    )
}
