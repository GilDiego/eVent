import React, {useEffect, useState } from 'react';
import { connect,useSelector } from 'react-redux';
import { filterTags, filterAgeRating, filerWeekdays, getEvents,removeFilters } from '../../actions/actions';

//tags -- age_rating

export function Filters(props) {
    // console.log(props)
    const stateFilters = useSelector(state => state.filters)
    const tags = ["Exteriores", "Interiores", "En vivo", "Recital", "Teatro", "Película", "Disco", "Deportes"]
    const age_rating = ["0+", "7+", "13+", "18+"]
    const weekdays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    const get =props.getEvents
    useEffect(() => {
        props.getEvents()
      }, [get])
    // const [type, setType] = useState()

    const handleChange = (e) =>{
        console.log(e.target.name,'pruebaaaaaa',e.target.value)
        props.filterTags(e.target.value)
    }
    const ageRatingChange = (e) =>{
        props.filterAgeRating(e.target.value)
    }
    const weekdaysChange = (e) =>{
        props.filerWeekdays(e.target.value)
    }
    const all = (e) =>{
        props.removeFilters()
    }
    return (
        <div style={{display:'flex', flexDirection:'column',marginLeft:'1rem'}}>
            <h6 style={{marginBlockEnd:'0',cursor:'pointer', textDecoration:'underline',color:'#f5af00'}} onClick={all}>Eliminar Filtros</h6>
            <h6 style={{marginBlockEnd:'0'}}>Tipos de eventos:</h6>
                {tags.map((e,i)=>{
                    return <option style={{cursor:'pointer',width:'30%'}} key={i} name='tags' value={e} onClick={handleChange}>{e}</option>
                })}
            <h6 style={{marginBlockEnd:'0'}}>Clasificación:</h6>
                 {age_rating.map((e,i)=>{
                    return <option style={{cursor:'pointer',width:'30%'}} key={i} name='age_rating' value={e} onClick={ageRatingChange}>{e}</option>
                })}
                <h6 style={{marginBlockEnd:'0'}}>Días:</h6>
                 {weekdays.map((e,i)=>{
                    return <option style={{cursor:'pointer',width:'30%'}} key={i} name='age_rating' value={e} onClick={weekdaysChange}>{e}</option>
                })}
        </div>
    )
}
export default connect(null, { filterTags, filterAgeRating,getEvents, filerWeekdays, removeFilters })(Filters)