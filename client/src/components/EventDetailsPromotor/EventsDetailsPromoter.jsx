import {useState, useEffect} from 'react'
import  {useDispatch , useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getEventDetail} from '../../actions/actions'
import { editDetail } from '../../actions/actions'
import './EventsDetailsPromoter.css'




function DetailPromoter() {

    const dispatch = useDispatch()
    const params =useParams()
    const {id}=params
    const detailsEvent=useSelector(state => state.detailsEvent)
 
    useEffect(()=>{
        dispatch(getEventDetail(id))
    },[dispatch , idEvent])

   let edit = e=>{
       dispatch(editDetail(
           e.target.value 
       ))
   }

   let  eliminate = e =>{
       dispatch(eliminatedetail(
           e.target.value 
       ))
   }
 


    return(
        <>
        <div>
            <div>
                {
                    
                    detailsEvent? 
                    <div>
                        <h3>{detailsEvent.eventName}</h3>
                        <img src={detailsEvent.img}/>
                        <p>{`Descripción: ${detailsEvent.description}`}</p>
                        <p>{`Ubicación: ${detailsEvent.ubication}`}</p>
                        <p>{`Fecha Inicial: ${detailsEvent.dateInitial}`}</p>
                        <p>{`Fecha Termino: ${detailsEvent.dateFinish}`}</p>
                        <p>{`Horarios disponibles: ${detailsEvent.schedule}`}</p>
                        <p>{`Tipo de Evento: ${detailsEvent.type}`}</p>
                        <p>{`Calsificación: ${detailsEvent.clasification}`}</p>
                        <p>{`Precio: $${detailsEvent.price}`}</p>
                        <p>{`Diponibilidad de asientos ${detailsEvent.disponibility}`}</p>
                        <p>{`limite de asiastentes ${detailsEvengt.limit}`}</p>
                     </div>:'Espera'

                }
                <div>
                    <button onClick={edit}>Modificar</button>
                </div>
                <div>
                    <button onclik={eliminate}>Eliminar</button>
                </div>


            </div>


        </div>
        </>
    )
}

export default DetailPromoter