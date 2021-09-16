import {useState, useEffect} from 'react'
import  {useDispatch , useSelector} from 'react-redux'
import {getEventDetail} from '../../actions/actions'

//dafne: es para poder editar los eventos  

function EditDetail (){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getEventDetail())
    }, [dispatch])
    console.log('soy get',getEventDetail)
    const detailsEvent=useSelector(state => state.detailsEvent)

    console.log('soy detalle',detailsEvent)
    useEffect(()=>{
        dispatch()
    })

    const handleEdit = (e) =>{
        e.prevent.default();
        const newEventName= detailsEvent.name;
        const  newDescription = detailsEvent.newDescription;
        const newImg =detailsEvent.img ;
        const newUbication = detailsEvent.ubication;
        const newDateInitial = detailsEvent.dateInitial;
        const  newDateFinish = detailsEvent.dateFinish;
        const  newSchedule = detailsEvent.schedule;
        const newType = detailsEvent.type;
        const newClasification = detailsEvent.clasification;
        const newprice = detailsEvent.price;
        const newLimit = detailsEvent.limit

    }
   
    const data ={
        newEventName,
        newDescription,
        newImg,
        newUbication,
        newDateInitial,
        newDateFinish,
        newSchedule,
        newType,
        newClasification,
        newPrice,
        newLimit,
    }


    return(
        <>
        <diV>
            

        </diV>
        </>
    )
 
}
export default EditDetail