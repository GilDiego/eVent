import { useEffect} from 'react'
import  {useDispatch , useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getEventDetail} from '../../actions/actions'
import { editDetail } from '../../actions/actions'
import { Carousel } from 'react-carousel-minimal';
import Loading from '../Loading/Loading'
import './EventsDetailsPromoter.css'



//dafne : son los detalles de los eventos 


function DetailPromoter() {

    const dispatch = useDispatch()
    const params =useParams()
    const {id}=params
    const detailsEvent = useSelector(state => state.detailsEvent)
    console.log(detailsEvent,'details event')

    useEffect(()=>{
        async function getDetails(){
            await dispatch(getEventDetail(id))
        }
        getDetails()
    },[dispatch , id])

    console.log('soy get detalle',getEventDetail)
  
  console.log('hola q Ondix ')
 const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
    console.log(detailsEvent)
    if(!detailsEvent[0]=== true){

        
     
        let data = [];
        let picture = detailsEvent.result.pictures
        console.log('soy imagenes de for', picture)

         for (let index = 0; index < picture.length; index++) {
          const img=  data.push({image:picture[index]});
           console.log('soy img ', img)  
         }
       

         
         
        
                                      
        
     
     console.log('hola soy data ',data);

    return(
        <>
        <div className='detailsAll'>
            <div className='detailsCard'>
                {
                    
                    detailsEvent.result.name!==undefined?   
                    <div className='deailscard2'>
                        <h1 className='titleCard'>{detailsEvent.result.name}</h1>
                        <Carousel
            data={data}
            
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
                         <br/> 
                         <div>
                             <h4>Descripcion:</h4>
                         <p>{ detailsEvent.result.description}</p>
                         </div>
                         <div>
                         <h4>Artistas:</h4>
                         <p>{` ${detailsEvent.result.starring}`}</p>
                         </div>
                         <div>
                             <h4>Dirección:</h4>
                         <p>{` ${detailsEvent.result.location}`}</p>
                         </div>
                         <div>
                             <h4>Dirrecion:</h4>
                         <p> {` ${detailsEvent.result.address}`}</p>

                         </div>
                         <div>
                             <h4>Fecha:</h4>
                             <p>{` ${detailsEvent.result.start_date}`}</p>
                        </div>
                        <div>
                            <h4>Fecha Termino:</h4>
                        <p>{` ${detailsEvent.result.finish_date}`}</p>
                        </div>
                        <div>
                            <h4>Dias:</h4>
                            <p>{` ${detailsEvent.result.weekdays.map((e)=>(e))}`}</p>
                        </div>
                        <div>
                            <h4>Horarios:</h4>
                            <p>{` ${detailsEvent.result.schedule.map((e)=>(e))}`}</p>
                        </div>
                        <div>
                            <h4>Tipo de Evento:</h4>
                            <p>{` ${detailsEvent.result.tags}`}</p>
                        </div>
                        <div>
                            <h4>Calsificación:</h4>                            
                            <p>{` ${detailsEvent.result.age_rating}`}</p>
                        </div>
                        <div>
                            <h4>Precio:</h4>
                            <p>{` $${detailsEvent.result.price}`}</p>
                        </div>
                        <div> 
                            <h4>limite de asiastentes:</h4>
                            <p>{` ${detailsEvent.result.ticket_limit}`}</p>
                        </div>
                        <div>
                            <h4>Croquis:</h4>
                            {` ${detailsEvent.result.seat_booking} `} </div>
                        </div>
                     </div>: <Loading/>

                }
                


            </div>


        </div>
        </>
    )}
    else{
        return (<Loading/>)
    }
}

export default DetailPromoter