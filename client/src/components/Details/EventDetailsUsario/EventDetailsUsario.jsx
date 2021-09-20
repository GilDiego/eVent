import React from 'react'
import DisplayComments from '../../Comments/DisplayComments/DisplayComments'
import { Link } from 'react-router-dom'
import { useEffect} from 'react'
import  {useDispatch , useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getEventDetail} from '../../../actions/actions'
import { Carousel } from 'react-carousel-minimal';
import Loading from '../../Loading/Loading'
import './EventDetailsUsario.css'

//Diego: Componente que muestra los detalles de un evento para el tipo Usuario.
export default function EventDetailsUsario() {

    const event = [{id: 1, name: 'Festival de los Muertos', desc: 'Ven y disfruta una noche imperdible! El Festival de los Muertos es uno de los mas esperados eventos de esta ciudad. Este año tenemos un lineup de los que dan miedo! Prueba nuestros deliciosos hot dogs y hamburguesas gourmet. Compra un pase de barra y no te hara falta la cerveza. No te lo puedes perder!', artists: ['Scar Symmetry','The Crimson Armada','Here Comes The Kraken', 'Between The Buried and Me'], img: 'https://monterreyrock.com/wp-content/uploads/2019/05/poster-Mexico-metal-fest-2019.jpg'}]

    // Diego: Variable solo para que no tire Warning en la consola sobre unique keys
    let listId = 0

  
        
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
            let picture = detailsEvent.result.pictures
            console.log('soy imagenes de for', picture)
    
             for (let index = 0; index < picture.length; index++) {
              const img=  data.push({image:picture[index]});
               console.log('soy img ', img)  
             }
           
    
             
             
            
                                          
            
         
         console.log('hola soy data ',data);
    
        return(
            <>
            <div className='detailsAllUser'>
                <div className='detailsCardUser'>
                    
                    {
                        
                        detailsEvent.result.name!==undefined?   
                        <div className='deailscard2User'>
                            <h1 className='titleCard'>{detailsEvent.result.name}</h1>
                            <div className='img'>
                            <Carousel
                data={data}
                
                time={5000}
                width="650px"
                height="400px"
                
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
                            
                      </div>  
                               
                             <div className='otherDetailsUser'>  
                             <br/> 
                             
                                 <h4 className='h4'>Descripcion:</h4>
                             <p className='p'>{ detailsEvent.result.description}</p>
                            
                             
                             <div className='detailsUsers2User'>
                                <h4 className='h4'>Artistas:</h4>
                                <p className='p'>{` ${detailsEvent.result.starring}`}</p>
                                <h4 className='h4'>Dirrecion:</h4>
                                <p className='p'> {` ${detailsEvent.result.address}`}</p>
                                <h4 className='h4'>Fecha:</h4>
                                 <p className='p'>{` ${detailsEvent.result.start_date}`}</p>
                                <h4 className='h4'>Fecha Termino:</h4>
                                <p className='p'>{` ${detailsEvent.result.finish_date}`}</p>
                                <h4 className='h4'>Dias:</h4>
                                <p className='p'>{` ${detailsEvent.result.weekdays.map((e)=>(e))}`}</p>
                                <h4 className='h4'>Horarios:</h4>
                                <p className='p'>{` ${detailsEvent.result.schedule.map((e)=>(e))}`}</p>
                                <h4 className='h4'>Tipo de Evento:</h4>
                                <p className='p'>{` ${detailsEvent.result.tags}`}</p>
                                <h4 className='h4'>Calsificación:</h4>                            
                                <p className='p'>{` ${detailsEvent.result.age_rating}`}</p>
                                <h4 className='h4'>Precio:</h4>
                                <p className='p'>{` $${detailsEvent.result.price}`}</p>
                        </div>
                            </div>
                         </div>: <Loading/>
    
                    }
                    
    
    
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
        
        </>
    )} 
    else{
        return (<Loading/>)
    }
}
