import {useState, useEffect} from 'react'
import  {useDispatch , useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getEventDetail} from '../../actions/actions'
import { editDetail } from '../../actions/actions'
import { Carousel } from 'react-carousel-minimal';

import './EventsDetailsPromoter.css'
import logo from '../../Utilities/logoProvi.png'


//dafne : son los detalles de los eventos 


function DetailPromoter() {

    const dispatch = useDispatch()
    const params =useParams()
    const {id}=params
    const detailsEvent=useSelector(state => state.detailsEvent)
    console.log('soy detalle',detailsEvent)
    useEffect(()=>{
        dispatch(getEventDetail(id))
    },[dispatch , id])
    console.log('soy get detalle',getEventDetail)
   let edit = e=>{
       dispatch(editDetail(
           e.target.value 
       ))
   }

 const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
    
    return(
        <>
        <div className='detailsAll'>
            <div className='detailsCard'>
                {
                    
                    detailsEvent.name!==undefined?   
                    <div className='deailscard2'>
                        <h1 className='titleCard'>{detailsEvent.eventName}</h1>
                        <Carousel
            data={detailsEvent.pictures.map((e)=>(e))}
            
            time={5000}
            width="850px"
            height="500px"
            
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }} />
                        
                    
                           
                         <div className='otherDetails'>   
                        <p>{`Descripción: ${detailsEvent.description}`}</p>
                        <p>{`Artistas: ${detailsEvent.starring}`}</p>
                        <p>{`Ubicación: ${detailsEvent.location}`}</p>
                        <p> {`Dirrecion: ${detailsEvent.address}`}</p>
                        <p>{`Fecha: ${detailsEvent.start_date}`}</p>
                        <p>{`Fecha Termino: ${detailsEvent.finish_date}`}</p>
                        <p>{`Dias: ${detailsEvent.weekdays.map((e)=>(e))}`}</p>
                        <p>{`Horarios: ${detailsEvent.schedule.map((e)=>(e))}`}</p>
                        <p>{`Tipo de Evento: ${detailsEvent.tags}`}</p>
                        <p>{`Calsificación: ${detailsEvent.age_rating}`}</p>
                        <p>{`Precio: $${detailsEvent.price}`}</p>
                        <p>{`Diponibilidad de asientos ${detailsEvent.disponibility}`}</p> 
                        <p>{`limite de asiastentes ${detailsEvent.ticket_limit}`}</p>
                        <div>{`Croquis ${detailsEvent.seat_booking} `} </div>
                      </div>
                     </div>: <p>Espera</p>

                }
                <div className='button'>
                    <button onClick={edit}>Modificar</button>
                     <button >Eliminar</button>
                </div>


            </div>


        </div>
        </>
    )
}

export default DetailPromoter

