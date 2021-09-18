import React, { useState } from 'react';
import Upload from './Upload.jsx'
import Prueba from './Prueba.jsx';
import './formEvent.css'

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
    if (!input.startDate) {
        errors.startDate = '*Campo obligatorio'
    }
    if (!input.schedule) {
        errors.schedule = '*Campo obligatorio'
    }
    if (!input.eventType) {
        errors.eventType = '*Campo obligatorio'
    }
    if (!input.classification) {
        errors.classification = '*Campo obligatorio'
    }
    if (!input.prices) {
        errors.prices = '*'
    }
    if (!input.incomeLimit) {
        errors.incomeLimit = '*'
    }
    // if (!input.img) {
    //     errors.img = '*'
    // }
    // if (input.img.length > 5) {
    //     errors.img = 'limite 5'
    // }
    return errors
}

export default function FormEvent() {
    const [errors, setErrors] = useState({})
    const [event, setEvent] = useState({
        name: '',
        // img: [],
        description: '',
        starring: '',
        address: '',
        location: '',
        startDate: '',
        finishDate: '',
        isRecurrent: false,
        schedule: [],
        weekDays: [],
        eventType: [],
        classification: '',
        prices: '',
        incomeLimit: ''
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
    }
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
    const weekDaysInputChange = function (e) {
        setDay(e.target.value)
    }
    const weekDaysChange = function (e) {
        e.preventDefault()
        if (event.weekDays.includes(day)) {
            alert('No es posble volver a agregar el mismo día')
        } else if (day !== '') {
            setEvent({
                ...event,
                weekDays: [day, ...event.weekDays]
            })
        }
    }
    const deleteDay = function (e) {
        setEvent({
            ...event,
            weekDays: event.weekDays.filter((d) => d !== e.target.value)
        })
        alert(`Se eliminó ${e.target.value} de los días seleccionados`)
    }
    const options = function (e) {
        setEvent({
            ...event,
            classification: e.target.value
        })
    }
    const eventChange = function (e) {
        console.log(e.target.value)
        setType(e.target.value)
    }
    const eChange = function (e) {
        e.preventDefault()
        if (event.eventType.includes(type)) {
            alert('No es posble volver a agregar el mismo tipo de evento')
        } else {
            setEvent({
                ...event,
                eventType: [type, ...event.eventType]
            })
        }
    }
    const deleteType = function (e) {
        setEvent({
            ...event,
            eventType: event.eventType.filter((d) => d !== e.target.value)
        })
        alert(`Se eliminó ${e.target.value} de los tipos de eventos seleccionados`)
    }
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
            console.log(event, '¿')
            setErrors(Validate({
                ...event,
                [e.target.name]: e.target.value
            }))

        }}>
            <div className='container-event'>
                <label>Nombre del Evento: </label>
                <><input className={errors.name && 'danger'} type='text' name='name' value={event.name} onChange={handleInputChange} placeholder='Nombre del evento' />
                    {errors.name && (<span className="danger">{errors.name}</span>)}</>

                <label>Imagenes: </label>
                <span style={{ fontFamily: 'serif', fontSize: 'smaller' }}>para agregar más imagenes vuelva a elegir otro archivo</span>
                <input type="file" className="app_uploadInput" onChange={click} />
                <br />
                {img && img.map((i,index) => {
                    return <img key={index} src={i} alt='foto' width='150px' />
                })}
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
                <input className={errors.startDate && 'danger'} type='text' name='startDate' value={event.startDate} onChange={handleInputChange} placeholder='AAAA/MM/DD' />
                {errors.startDate && (<span className="danger">{errors.startDate}</span>)}

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
                        <input type='text' name='finishDate' value={event.finishDate} onChange={handleInputChange} placeholder='AAAA/MM/DD' />
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
                    <select onChange={weekDaysInputChange}>
                        <option>Seleccionar</option>
                        {weeks.map((e, i) => {
                            return <option key={i} value={e}>{e}</option>
                        })}
                    </select>
                    <button className='button-event' onClick={weekDaysChange}>agregar</button>
                </div>

                {event.weekDays ?
                    <select onChange={deleteDay}>
                        <option>Días Seleccionados</option>
                        {event.weekDays.map((e, i) => {
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
                    <button className='EbtnCard' onClick={eChange}>agregar</button>
                </div>

                {event.eventType ?
                    <select onChange={deleteType}>
                        <option value='seleccionar'>Tipos Seleccionados</option>
                        {event.eventType.map((e, i) => {
                            return <option key={i}>{e}</option>
                        })}
                    </select>
                    : null}

                <label>Clasificación: </label>
                <select onChange={(e) => options(e)}>
                    <option value='seleccionar'>Seleccionar</option>
                    <option value='0+'>0+</option>
                    <option value='7+'>7+</option>
                    <option value='13+'>13+</option>
                    <option value='18++'>18+</option>
                </select>
                <label>Precios: </label>
                <input type='text' name='prices' value={event.prices} onChange={handleInputChange} placeholder='Ejemplo: $500' />

                <label>Limite de ingresos: </label>
                <input type='text' name='incomeLimit' value={event.incomeLimit} onChange={handleInputChange} placeholder='Ejemplo: 500' />

                <input className='button-event' type='submit' />
            </div>
        </form>
    )
}
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