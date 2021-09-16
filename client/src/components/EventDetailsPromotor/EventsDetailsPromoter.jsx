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

//    let  eliminate = e =>{
//        dispatch(eliminatedetail(
//            e.target.value 
//        ))
//    }
// const data = detailsEvent.pictures.map((e)=>{
//     return e
// })
//   console.log('yo soy data',data)
 
 const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

//console.log('hola soy data',data)
    return(
        <>
        <div className='detailsAll'>
            <div className='detailsCard'>
                {
                    
                    detailsEvent.eventName!==undefined?   
                    <div className='deailscard2'>
                        <h1 className='titleCard'>{detailsEvent.eventName}</h1>
                        <Carousel
            data={detailsEvent.pictures.map((e)=>(e))}
            
            time={2000}
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
            }}
       
          />
                        
                     {/* <div>{detailsEvent.pictures.map((img)=>(
                           <>
                           <img src={img}/>
                           {console.log('soy e del map',(img))}
                           </>
                     ))}
                            </div>  */}
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


// "virtual": false,
// "isRecurrent": false,
// "id": 1,
// "eventName": "Rock al parque",
// "description": "Esta es la descripcion del modelo",
// "location": "Colombia/Valle/cali",
// "address": "cra 7ksdfkdsj",
// "pictures": [
//   "image 1"
// ],
// "start_date": "2021-10-30",
// "schedule": [
//   "10:00"
// ],
// "weekdays": [
//   "SUN",
//   "FRI"
// ],
// "tags": "Indoors",
// "age_rating": "7+",
// "price": "290",
// "starring": null,   artistas
// "finish_date": null,  fecha final
// "ticket_limit": null,  limite de tikets
// "seat_booking": null   croquis 
// }