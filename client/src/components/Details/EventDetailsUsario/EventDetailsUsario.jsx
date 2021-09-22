import React from 'react'
import DisplayComments from '../../Comments/DisplayComments/DisplayComments'
import { Link } from 'react-router-dom'
import { useEffect,useState} from 'react'
import  {useDispatch , useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getEventDetail} from '../../../actions/actions'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Loading from '../../Loading/Loading'
import styles from './EventDetailsUsario.module.css'

//Diego: Componente que muestra los detalles de un evento para el tipo Usuario.
export default function EventDetailsUsario() {


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
        
       
      
      
     const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
        
        if(!detailsEvent[0]=== true){
            
            let data=[];
            let data2=[];
            let data3 = [];
            let data4=[];
            let data5=[];
            

            let picture = detailsEvent.result.pictures

            data.push(picture[0])
            data2.push(picture[1])
            data3.push(picture[2])
            data4.push(picture[3])
            data5.push(picture[4])
            
             console.log('holis soy elemento o de picture',data)
             console.log('holis soy elemento o de picture',data2)
             console.log('holis soy elemento o de picture',data3)
             console.log('holis soy elemento o de picture',data4)
             console.log('holis soy elemento o de picture',data5)
            



             // si pictues lenght pictures  tiene 3 retorname este si tiene 4 retorname este otro y si tiene 5 retorname este otro 
            //  for (let index = 0; index < picture.length; index++) {
            //      data6.push(picture[4])
               
                
            //  }
            //  const image =data6.filter((e)=>{
            //       return e[0]
            //  })
            //  console.log('hola soy image2',image)
            
            //  console.log('holis soy data6',data6)
          //si data es iguala a 3 retorname data3  el carrucel lo ponemos en el if donde le paso solo la  data 3
          // y asi con 4,5,6

        return(
            
            <div className={styles.detailsAllUser}>
                <div className='detailsCardUser'>
                    
                    {
                        
                        detailsEvent.result.name!==undefined?   
                        <div className='deailscard2User'>
                            <h1 className={styles.titleCard}>{detailsEvent.result.name}</h1>
                            <div className='img'>
                            {/* {(()=>{
                                console.log('entre al if ')
                                if(picture.length===1){
                                    {console.log('entre antes del carrucel',picture.length)}
                                    <Carousel 
                                    showArrows={true} 
         
                                    >
                                        <div>
                                         <img src={data} id='img'/>
                                         {console.log('hola soy dat dentro de carrucel',data)}
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                    </Carousel>
                                }else if(picture.length===2){
                                    
                                    <Carousel 
                                    showArrows={true} 
         
                                    >
                                    <div>
                                         <img src={data} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data2} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                    </Carousel>
                                }else if(picture.length===3){
                                    <Carousel 
                                    showArrows={true} 
         
                                    >
                                    <div>
                                         <img src={data} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data2} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data3} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     </Carousel>
                                }else if(picture.length===4){
                                    <Carousel 
                                    showArrows={true} 
         
                                    >
                                    <div>
                                         <img src={data} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data2} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data3} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data4} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     </Carousel>
                                }else if(picture.length===6){
                                    {console.log('hoa te odio')}

                        
                                    <Carousel 
                                    showArrows={true} 
         
                                    >
                                        
                                    <div>
                                         <img src={data} id='img'/>
                                         {console.log('hola soy data dentro de carrucel',data)}
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data2} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data3} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data4} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data5} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     </Carousel>
                                }
                                
                                
                                })()} */}

                          
                                   <Carousel 
                                    showArrows={true} 
                                    axis={'horizontal'}
                                    autoFocus={true}
                                    autoPlay={true}
                                    centerMode={false}
                                    centerSlidePercentage={40}
                                    dynamicHeight={false}
                                    emulateTouch={true}
                                    infiniteLoop={true}
                                    interval={5000}
                                    stopOnHover={false}
                                    swipeScrollTolerance={0}
                                    thumbWidth={90}
                                    width={1000}
                                    
                                    >
                                        
                                    <div>
                                         <img src={data} id='img'/>
                                         {console.log('hola soy data dentro de carrucel',data)}
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data2} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data3} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data4} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     <div>
                                         <img src={data5} id='img'/>
                                         <p className={styles.description}>{ detailsEvent.result.description}</p>
                                     </div>
                                     </Carousel>
                                 
                      </div>  
                            <div className={styles.otherDetailsUser}>  
                             <br/> 
                              <h4 className='h4'>Descripcion:</h4>
                             <p className={styles.description}>{ detailsEvent.result.description}</p>
                             <div className={styles.detailsUsers2User}>
                                 <div className={styles.leftColumn}>
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
                                 </div>
                                 <div className={styles.rightColumn}>
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
                            </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Reservar</button>
                    <Link to={{
                        pathname:'/nuevoComentario',
                        state: id
                    }}>
                    <button className={styles.button}>Reseña</button>
                    </Link>
                </div>
                <div className='comments-container'>
                        <DisplayComments state={id}/>
                        <br />
                        <br />

                </div>

                         </div>: <Loading/>
    
                    }
                    
    
    
                </div>
    
    
            </div>
           
       
    
        
        
    )} 
    else{
        return (<Loading/>)
    }
}
