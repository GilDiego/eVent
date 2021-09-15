import {useState, useEffect} from 'react'
import  {useDispatch , useSelector} from 'react-redux'

function EditDetail (){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getEventdetail())
    }, [dispatch])
    console.log('soy get',getEventdetail)
    const detailsEvent=useSelector(state => state.detailsEvent)

    console.log('soy detalle',detailsEvent)

    const handleEdit = (e) =>{
        e.prevent.default();
        const newName= detailsEvent.name;
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
   
    // <p>{`Diponibilidad de asientos ${detailsEvent.disponibility}`}</p>
    // <p>{`limite de asiastentes ${detailsEvengt.limit}`}</p>




    return(
        <>
        </>
    )
 
}
export default EditDetail