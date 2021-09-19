import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';


export default function CreateComment() {
    const [input, setInput] = useState({
        review: '',
        rating: '',
        user_id: '3',
        event_id: ''
    })

    // React location hook
    const location = useLocation()

    useEffect(() => {
        setInput({
            ...input,
            event_id: location.state
            });
    },[])


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
            });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        axios.post('http://localhost:3001/api/comment')
        
        // fetch('http://localhost:3001/api/comment',{
        //         method: 'POST',
        //         headers:{'Content-type': 'application/json'},
        //         body:JSON.stringify(input)
        //     })
    }
    return (
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
    )
}
