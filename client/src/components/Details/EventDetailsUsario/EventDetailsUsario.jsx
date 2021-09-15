import React from 'react'
import './EventDetailsUsario.css'

//Diego: Componente que muestra los detalles de un evento para el tipo Usuario.
export default function EventDetailsUsario() {

    const event = [{name: 'Festival de los Muertos', desc: 'Ven y disfruta una noche imperdible! El Festival de los Muertos es uno de los mas esperados eventos de esta ciudad. Este año tenemos un lineup de los que dan miedo! Prueba nuestros deliciosos hot dogs y hamburguesas gourmet. Compra un pase de barra y no te hara falta la cerveza. No te lo puedes perder!', artists: ['Scar Symmetry','The Crimson Armada','Here Comes The Kraken', 'Between The Buried and Me'], img: 'https://monterreyrock.com/wp-content/uploads/2019/05/poster-Mexico-metal-fest-2019.jpg'}]
    return (
        <>
                <h1>{event[0].name}</h1>
                <div className='event-main'>
                    <img src={event[0].img} alt={event[0].name} />
                    <div className='event-details'>
                        <p>{event[0].desc}</p>
                        <ul>
                        {
                            event[0].artists.map(artist => <li>{artist}</li>)
                        }
                        </ul>
                    </div>
            </div>
                <button>Reservar</button>
                <button>Reseña</button>
        </>
    )
}