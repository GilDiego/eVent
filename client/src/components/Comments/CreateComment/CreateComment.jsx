import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import success from '../../../Utilities/successGif.gif'
import { useSelector } from 'react-redux';
import './CreateComment.css'

//Diego: Componente de creacion de comentarios. Falta obtener dinamicamente user_id.
export default function CreateComment() {
    const [editing, setEditing] = useState(true)
    const [input, setInput] = useState({
        review: '',
        rating: '',
        user_id: '1',
        event_id: ''
    })

    const userInfo = useSelector(state => state.userState)
    console.log(userInfo, 'esto es lo que me llega de Google en mi create comment')

    const location = useLocation()

    useEffect(() => {
        setInput({
            ...input,
            event_id: location.state,
            // user_id: userInfo.googleId
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
            });
    }

    // Diego: Funcion para revisar que el usuario no haya comentado anteriormente
    let userCheck=[]
    async function fetchUserComments(id){
        const response = await axios.get(`http://localhost:3001/api/comment/all`)
        userCheck = response.data.filter(comment => Number(comment.userId) === Number(id))
        }

    async function handleSubmit(e){
        e.preventDefault();
        const { review, rating, user_id, event_id } = input
        if (!rating || !review) return alert('Todos los campos son requeridos.')
        else if (review.length < 40) return alert('El comentario debe tener un mínimo de 40 caracteres.')
        else {
                await fetchUserComments(user_id)
                if (userCheck.length) return alert('Solamente puedes crear un comentario por evento.')
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
    }
    return (
        <div className='new-comment-wrapper'>
            {
                editing ? (
                    <div className='new-comment'>
                        <h2 className='new-comment-title'>Agregar Comentario:</h2>
                        <form className='new-comment-form' onSubmit={e => handleSubmit(e)}>
                            <label> Calificacion*: </label>
                            <input name='rating' type="number" min='1' max='5'  onChange={e => handleChange(e)}/>
                            <br />
                            <label> Comentario*: </label>
                            <input name='review' onChange={e => handleChange(e)}/>
                            <br />
                            <button type='submit' className='new-comment-btn'>Enviar</button>                            
                        </form>
                    </div>
                ) : (
                    <div className='new-comment-success'>
                        <img className='new-comment-success-img'src={success} alt="Fue un éxito." />
                        <p>Gracias por compartir tu opinión!</p> 
                        <Link to={`/eventDetailsUsuario/${input.event_id}`}>
                            <button className='new-comment-btn'>Listo</button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}
