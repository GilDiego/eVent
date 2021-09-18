import React, { useState } from 'react';
import Upload from './Upload.jsx'
import Prueba from './Prueba.jsx';
import './formEvent.css'
import { connect } from 'react-redux';
import { postEvent } from '../../actions/actions.js';

export function Validate(input) {
    let errors = {};
    console.log(input, 'validate')
    if (!input.name) {
        errors.name = '*Campo obligatorio'
    }
    if (!input.description) {
        errors.description = '*Campo obligatorio'
    }
    if (!input.address) {
        errors.address = '*Campo obligatorio'
    }
    if (!input.location) {
        errors.location = '*Campo obligatorio'
    }
    if (!input.start_date) {
        errors.start_date = '*Campo obligatorio'
    }
    if (!input.schedule) {
        errors.schedule = '*Campo obligatorio'
    }
    if (!input.tags) {
        errors.tags = '*Campo obligatorio'
    }
    if (!input.age_rating) {
        errors.age_rating = '*Campo obligatorio'
    }
    if (!input.price) {
        errors.price = '*'
    }
    if (!input.ticket_limit) {
        errors.ticket_limit = '*'
    }
    // if (!input.img) {
    //     errors.img = '*'
    // }
    // if (input.img.length > 5) {
    //     errors.img = 'limite 5'
    // }
    return errors
}

export  function FormEvent(props) {
    console.log(props,'????')
    const [errors, setErrors] = useState({})
    const [event, setEvent] = useState({
        name: '',
        pictures: [],
        description: '',
        starring: '',
        address: '',
        location: '',
        start_date: '',
        finish_date: '',
        isRecurrent: false,
        schedule: [],
        weekdays: [],
        tags: '',
        age_rating: '',
        price: '',
        ticket_limit: ''
    })
    const [hour, setHour] = useState('')
    const [mins, setMins] = useState('')
    const [day, setDay] = useState()
    const [type, setType] = useState()
    const tags = ["Exteriores", "Interiores", "En vivo", "Recital", "Teatro", "Película", "Disco", "Deportes"]
    const weeks = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]//"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
    // const uploadFiles = function (e) {
    //     if (e.target.value !== '') {
    //         setEvent({
    //             ...event,
    //             img: [e.target.value, ...event.img]
    //         })
    //     }
    // }
    const [img, setImg] = useState([]);
    const [load, setLoad] = useState(false)
    const click = async (e) => {
        const files = e.target.files
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'cloudinary_event')
        setLoad(true)
        const op = { method: 'POST', body: data }
        const res = await fetch(`https://api.cloudinary.com/v1_1/event-pf/image/upload`, op)
        const file = await res.json();
        setImg([...img, file.secure_url])
        setTimeout(()=>setEvent({...event,pictures:[file.secure_url,...event.pictures]}),1000) 
    }
    console.log(event.pictures,'pictures')
    const scheduleInputChange = function (e) {
        // setHour(e.target.value)
        if (e.target.name === 'hours') {
            setHour(e.target.value)
        }
        if (e.target.name === 'mins') {
            setMins(e.target.value)
        }
    }
    const scheduleChange = function (e) {
        e.preventDefault()
        if (hour !== '' && mins !== '') {
            if (mins <= 9) {
                const hours = hour + ':' + '0' + mins
                if (event.schedule.includes(hours)) {
                    alert('No es posible volver a agregar el mismo horario')
                } else {
                    setEvent({
                        ...event,
                        schedule: [hours, ...event.schedule]
                    })
                }
            } else {
                const hours = hour + ':' + mins
                if (event.schedule.includes(hours)) {
                    alert('No es posible volver a agregar el mismo horario')
                } else {
                    setEvent({
                        ...event,
                        schedule: [hours, ...event.schedule]
                    })
                }
            }
        }
    }
    const deleteScedule = function (e) {
        setEvent({
            ...event,
            schedule: event.schedule.filter((d) => d !== e.target.value)
        })
        alert(`Se eliminó ${e.target.value} de los días seleccionados`)
    }
    const weekdaysInputChange = function (e) {
        setDay(e.target.value)
    }
    const weekdaysChange = function (e) {
        e.preventDefault()
        if (event.weekdays.includes(day)) {
            alert('No es posble volver a agregar el mismo día')
        } else if (day !== '') {
            setEvent({
                ...event,
                weekdays: [day, ...event.weekdays]
            })
        }
    }
    const deleteDay = function (e) {
        setEvent({
            ...event,
            weekdays: event.weekdays.filter((d) => d !== e.target.value)
        })
        alert(`Se eliminó ${e.target.value} de los días seleccionados`)
    }
    const options = function (e) {
        setEvent({
            ...event,
            age_rating: e.target.value
        })
    }
    const eventChange = function (e) {
        console.log(e.target.value)
        // setType(e.target.value)
        setEvent({...event,tags:e.target.value})
    }
    // const eChange = function (e) {
    //     e.preventDefault()
    //     if (event.tags.includes(type)) {
    //         alert('No es posble volver a agregar el mismo tipo de evento')
    //     } else {
    //         setEvent({
    //             ...event,
    //             tags: type
    //         })
    //     }
    // }
    // const deleteType = function (e) {
    //     setEvent({
    //         ...event,
    //         tags: event.tags.filter((d) => d !== e.target.value)
    //     })
    //     alert(`Se eliminó ${e.target.value} de los tipos de eventos seleccionados`)
    // }
    const handleInputChange = function (e) {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        });

        // setErrors(Validate({
        //     ...errors,
        //     [e.target.name]: e.target.value
        // }));
    }

    return (
        <form className='form-event' onSubmit={(e) => {
            e.preventDefault()
            // setEvent({...event,pictures:img})
            console.log(event, '¿')
            setErrors(Validate({
                ...event,
                [e.target.name]: e.target.value
            }))
            setTimeout(()=>props.postEvent(event),1000) 

        }}>
            <div className='container-event'>
                <label>Nombre del Evento: </label>
                <><input className={errors.name && 'danger'} type='text' name='name' value={event.name} onChange={handleInputChange} placeholder='Nombre del evento' />
                    {errors.name && (<span className="danger">{errors.name}</span>)}</>

                <label>Imagenes: </label>
                <span style={{ fontFamily: 'serif', fontSize: 'smaller' }}>para agregar más imagenes vuelva a elegir otro archivo</span>
                <div>
                <input type="file" className="app_uploadInput" onChange={click} />
                <br />
                {img && img.map((i,index) => {
                    return <img key={index} src={i} alt='foto' width='150px' />
                })}
                </div>
                {/* <Upload/> */}
                {/* componente de carga de imagen */}
                {/* <Prueba/> */}
                <label>Descripción: </label>
                <textarea className={errors.description && 'danger'} style={{ width: '50%', height: '50px' }} name='description' value={event.description} onChange={handleInputChange} placeholder='Descripcion..'></textarea>{/* maxlength='300' */}
                {errors.description && (<span className="danger">{errors.description}</span>)}
                <label>Elenco/Participantes: </label>
                <input type='text' name='starring' value={event.starring} onChange={handleInputChange} placeholder='Ejemplo: Michael Jackson, Leonardo DiCaprio..' />

                <label>Ubicación: </label>
                <input className={errors.location && 'danger'} type='text' name='location' value={event.location} onChange={handleInputChange} placeholder='pais/provincia(estado,departamento)/ciudad' />
                {errors.location && (<span className="danger">{errors.location}</span>)}
                <label>Dirección: </label>
                <input className={errors.address && 'danger'} type='text' name='address' value={event.address} onChange={handleInputChange} placeholder='Calle Falsa 123 ☺' />
                {errors.address && (<span className="danger">{errors.address}</span>)}
                <label>Fecha de Inicio: </label>
                <input className={errors.start_date && 'danger'} type='text' name='start_date' value={event.start_date} onChange={handleInputChange} placeholder='AAAA/MM/DD' />
                {errors.start_date && (<span className="danger">{errors.start_date}</span>)}

                <label>Recurrente</label>
                <div>
                    <span>Si</span>
                    <input style={{ position: 'relative', width: '10%' }} type='radio' name='isRecurrent' value={true} onChange={handleInputChange} />
                    <span>No</span>
                    <input style={{ position: 'relative', width: '10%' }} type='radio' name='isRecurrent' value={false} onChange={handleInputChange} />
                </div>
                {event.isRecurrent === 'false' ?
                    <>
                        <label>Fecha de finalización: </label>
                        <input type='text' name='finish_date' value={event.finish_date} onChange={handleInputChange} placeholder='AAAA/MM/DD' />
                    </>
                    : null}


                <label>Horarios: </label>
                <div>
                    <input style={{ width: '10%' }} type='number' min='0' max='23' name='hours' value={hour} onChange={scheduleInputChange} placeholder='horas' />
                    :
                    <input style={{ width: '10%' }} type='number' min='0' max='59' name='mins' value={mins} onChange={scheduleInputChange} placeholder='minutos' />
                    <button className='button-event' onClick={scheduleChange}>agregar</button>
                </div>

                {event.schedule ?
                    <select onChange={deleteScedule}>
                        <option>Horarios Disponibles</option>
                        {event.schedule.map((e, i) => {
                            return <option key={i}>{e}</option>
                        })}
                    </select>
                    : null}

                <label>Días: </label>
                <div>
                    <select onChange={weekdaysInputChange}>
                        <option>Seleccionar</option>
                        {weeks.map((e, i) => {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                    <button className='button-event' onClick={weekdaysChange}>agregar</button>
                </div>

                {event.weekdays ?
                    <select onChange={deleteDay}>
                        <option>Días Seleccionados</option>
                        {event.weekdays.map((e, i) => {
                            return <option key={i}>{e}</option>
                        })}
                    </select>
                    : null}
                <label>Tipo de Evento: </label>
                <div>
                    <select onChange={eventChange}>
                        <option>Seleccionar</option>
                        {tags.map((e, i) => {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                    {/* <button className='EbtnCard' onClick={eChange}>agregar</button> */}
                </div>

                {/* {event.tags ?
                    <select onChange={deleteType}>
                        <option value='seleccionar'>Tipos Seleccionados</option>
                        {event.tags.map((e, i) => {
                            return <option key={i}>{e}</option>
                        })}
                    </select>
                    : null} */}

                <label>Clasificación: </label>
                <select onChange={(e) => options(e)}>
                    <option value='seleccionar'>Seleccionar</option>
                    <option value='0+'>0+</option>
                    <option value='7+'>7+</option>
                    <option value='13+'>13+</option>
                    <option value='18++'>18+</option>
                </select>
                <label>Precios: </label>
                <input type='text' name='price' value={event.price} onChange={handleInputChange} placeholder='Ejemplo: $500' />

                <label>Limite de ingresos: </label>
                <input type='text' name='ticket_limit' value={event.ticket_limit} onChange={handleInputChange} placeholder='Ejemplo: 500' />

                <input className='button-event' type='submit' />
            </div>
        </form>
    )
}
function mapDispatchToProps(dispatch){
    return{
        postEvent: (event) => dispatch(postEvent(event))
    }
}
export default connect(null,mapDispatchToProps)(FormEvent)
// - virtual: boolean (default: false)
// - Sistema de asignacion de sillas / seat_booking

/* <span style={{ fontFamily: 'serif', fontSize: 'smaller' }}>para agregar más imagenes vuelva a elegir otro archivo</span>
<input type='file' name='files' value={event.img[0]} onChange={uploadFiles} multiple />
{event.img ?
    <select>
        <option>Archivos seleccionados</option>
        {event.img.map((e, i) => {
            return <option key={i}>{e}</option>
        })}
    </select>
    : null} */