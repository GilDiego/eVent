import React from 'react'
import DisplayComments from '../../Comments/DisplayComments/DisplayComments'
import { Link } from 'react-router-dom'
import './EventDetailsUsario.css'

//Diego: Componente que muestra los detalles de un evento para el tipo Usuario.
export default function EventDetailsUsario() {

    const event = [{id: 1, name: 'Festival de los Muertos', desc: 'Ven y disfruta una noche imperdible! El Festival de los Muertos es uno de los mas esperados eventos de esta ciudad. Este año tenemos un lineup de los que dan miedo! Prueba nuestros deliciosos hot dogs y hamburguesas gourmet. Compra un pase de barra y no te hara falta la cerveza. No te lo puedes perder!', artists: ['Scar Symmetry','The Crimson Armada','Here Comes The Kraken', 'Between The Buried and Me'], img: 'https://monterreyrock.com/wp-content/uploads/2019/05/poster-Mexico-metal-fest-2019.jpg'}]

    // Diego: Variable solo para que no tire Warning en la consola sobre unique keys
    let listId = 0

    return (
        
        <div className='details'>
                <div className='event-main'>
                    <h1 className='title'>{event[0].name}</h1>
                    <img className='poster' src={event[0].img} alt={event[0].name} />
                    <div className='event-details'>
                        <p>{event[0].desc}</p>
                        <p>Artistas:</p>
                        <ul>
                        {
                            event[0].artists.map(artist => <li key={listId++}>{artist}</li>)
                        }
                        </ul>
                    </div>
                </div>

                <div className='comments-container'>
                        <DisplayComments/>
                </div>

                <div className='button-container'>
                    <button className='button'>Reservar</button>
                    <Link to={{
                        pathname:'/nuevoComentario',
                        state: event[0].id
                    }}>
                    <button className='button'>Reseña</button>
                    </Link>
                </div>
        </div>
    )
}
