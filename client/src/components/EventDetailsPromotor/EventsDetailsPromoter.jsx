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

    useEffect(async()=>{
        await dispatch(getEventDetail(id))
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
        console.log('soy las imagenes ',data)
        let picture=detailsEvent.result.pictures
        console.log ('hola soy picture',picture)
        let size = detailsEvent.result.pictures.length
        console.log('soy size',size)
        while (size && picture !== undefined){
            console.log('soy size del wile ',size)
        data.push({image:picture[size]})
        size --
        }


        // let image = detailsEvent.result.pictures[0] 
        // console.log('soy yo imagen', image)
        //   data.push({image:image})
        //   let image2 = detailsEvent.result.pictures[1] 
        // console.log('soy yo imagen', image2)
        //   data.push({image:image2})
        //   let image3 = detailsEvent.result.pictures[2] 
        // console.log('soy yo imagen', image3)
        //   data.push({image:image3})
        //   let image4 = detailsEvent.result.pictures[3] 
        // console.log('soy yo imagen', image4)
        //   data.push({image:image4})
        //   let image5 = detailsEvent.result.pictures[4] 
        // console.log('soy yo imagen', image5)
        //   data.push({image:image5})

         
         
        
                                      
        
     
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
                        <p>{`Descripción: ${detailsEvent.result.description}`}</p>
                        <p>{`Artistas: ${detailsEvent.result.starring}`}</p>
                        <p>{`Ubicación: ${detailsEvent.result.location}`}</p>
                        <p> {`Dirrecion: ${detailsEvent.result.address}`}</p>
                        <p>{`Fecha: ${detailsEvent.result.start_date}`}</p>
                        <p>{`Fecha Termino: ${detailsEvent.result.finish_date}`}</p>
                        <p>{`Dias: ${detailsEvent.result.weekdays.map((e)=>(e))}`}</p>
                        <p>{`Horarios: ${detailsEvent.result.schedule.map((e)=>(e))}`}</p>
                        <p>{`Tipo de Evento: ${detailsEvent.result.tags}`}</p>
                        <p>{`Calsificación: ${detailsEvent.result.age_rating}`}</p>
                        <p>{`Precio: $${detailsEvent.result.price}`}</p>
                        <p>{`Diponibilidad de asientos ${detailsEvent.result.disponibility}`}</p> 
                        <p>{`limite de asiastentes ${detailsEvent.result.ticket_limit}`}</p>
                        <div>{`Croquis ${detailsEvent.result.seat_booking} `} </div>
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