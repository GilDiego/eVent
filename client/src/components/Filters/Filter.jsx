import React, {useEffect, useState } from 'react';
import { connect,useSelector } from 'react-redux';
import { filterTags, filterAgeRating, getEventsHome } from '../../actions/actions';

//tags -- age_rating

export function Filters(props) {
    const stat = useSelector(state => state.filters)
    const tags = ["Exteriores", "Interiores", "En vivo", "Recital", "Teatro", "Película", "Disco", "Deportes"]
    const age_rating = ["0+", "7+", "13+", "18+"]
    const get =props.getEventsHome
    useEffect(() => {
        props.getEventsHome()
      }, [get])
    // const [type, setType] = useState()

    const handleChange = (e) =>{
        console.log(e.target.name,'pruebaaaaaa',e.target.value)
        props.filterTags(e.target.value)
    }
    const ageRatingChange = (e) =>{
        props.filterAgeRating(e.target.value)
    }
    return (
        <div>
                {tags.map((e,i)=>{
                    return <option key={i} name='tags' value={e} onClick={handleChange}>{e}</option>
                })}
                 {age_rating.map((e,i)=>{
                    return <option key={i} name='age_rating' value={e} onClick={ageRatingChange}>{e}</option>
                })}
        </div>
    )
}
export default connect(null, { filterTags, filterAgeRating,getEventsHome })(Filters)