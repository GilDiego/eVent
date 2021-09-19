import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import success from '../../../Utilities/successGif.gif'

//Diego: Componente de creacion de comentarios. Falta obtener dinamicamente user_id.
export default function CreateComment() {
    const [editing, setEditing] = useState(true)
    const [input, setInput] = useState({
        review: '',
        rating: '',
        user_id: '1',
        event_id: ''
    })

    // React location hook
    const location = useLocation()

    useEffect(() => {
        setInput({
            ...input,
            event_id: location.state
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
            });
    }

    function handleSubmit(e){
        e.preventDefault();
        const { review, rating, user_id, event_id } = input
        if (!rating || !review) return alert('Todos los campos son requeridos.')
        else if (review.length < 100) return alert('El comentario debe tener un mínimo de 100 caracteres.')
        else {
            axios.post('http://localhost:3001/api/comment', {
                review,
                rating,
                user_id,
                event_id
            })
            setEditing(false)
        }
    }
    return (
        <div>
            {
                editing ? (
                    <div>
                        <p>Agregar Comentario:</p>
                        <form onSubmit={e => handleSubmit(e)}>
                            <label> Calificacion*: </label>
                            <input name='rating' type="number" min='1' max='5' onChange={e => handleChange(e)}/>
                            <br />
                            <label> Comentario*: </label>
                            <textarea name='review' onChange={e => handleChange(e)}/>
                            <br />
                            <button type='submit'>Enviar</button>                            
                        </form>
                    </div>
                ) : (
                    <div>
                        <img src={success} alt="Fue un éxito." />
                        <p>Gracias por compartir tu opinión!</p> 
                        <Link to=''>
                            <button>Listo</button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}
