import React, { useState } from 'react';
import Upload from './Upload.jsx'
import './formEvent.css'

export function Validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = '*'
    }
    if (!input.description) {
        errors.description = '*'
    }
    if (!input.address) {
        errors.address = '*'
    }
    if (!input.location) {
        errors.location = '*'
    }
    if (!input.startDate) {
        errors.startDate = '*'
    }
    if (!input.schedule) {
        errors.schedule = '*'
    }
    if (!input.eventType) {
        errors.eventType = '*'
    }
    if (!input.classification) {
        errors.classification = '*'
    }
    if (!input.prices) {
        errors.prices = '*'
    }
    if (!input.incomeLimit) {
        errors.incomeLimit = '*'
    }
    if (!input.img) {
        errors.img = '*'
    }
    if (input.img.length === 5) {
        errors.img = 'limite 5'
    }
    // if (input.finishDate !== '') {
    //     errors.finishDate = '*'
    // }
}

export default function FormEvent() {
    // const [errors, setErrors] = useState({})
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
    const scheduleInputChange = function (e) {
        // setHour(e.target.value)
        if (e.target.name === 'hours') {
            setHour(e.target.value)
            console.log(e.target.value, 'soy hours', e.target.name)
        }
        if (e.target.name === 'mins') {
            setMins(e.target.value)
            console.log('soy mins', e.target.name)
        }
    }
    const scheduleChange = function (e) {
        e.preventDefault()
        if (hour !== '' && mins !== '') {
            if(mins <= 9){
                const hours = hour+':'+'0'+mins
                console.log(hours,'¿¿')
                if(event.schedule.includes(hours)){
                    alert('No es posible volver a agregar el mismo horario')
                }else{
                  setEvent({
                    ...event,
                    schedule: [hours, ...event.schedule]
                })  
                }
            }else{
                const hours = hour+':'+mins
                console.log(hours,'¿¿')
                if(event.schedule.includes(hours)){
                    alert('No es posible volver a agregar el mismo horario')
                }else{
                  setEvent({
                    ...event,
                    schedule: [hours, ...event.schedule]
                })  
                }
            }
        }
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
            console.log('event.img', event.img, '¿')
            // setErrors(Validate({
            //     ...errors,
            //     [e.target.name]: e.target.value
            // }))

        }}>
            <div className='container-event'>
                <label>Nombre del Evento: </label>
                <input type='text' name='name' value={event.name} onChange={handleInputChange} />

                <label>Imagenes: </label>
                <Upload/>{/* componente de carga de imagen */}

                {/* <span style={{ fontFamily: 'serif', fontSize: 'smaller' }}>para agregar más imagenes vuelva a elegir otro archivo</span>
                <input type='file' name='files' value={event.img[0]} onChange={uploadFiles} multiple />
                {event.img ?
                    <select>
                        <option>Archivos seleccionados</option>
                        {event.img.map((e, i) => {
                            return <option key={i}>{e}</option>
                        })}
                    </select>
                    : null} */}

                <label>Descripción: </label>
                <textarea style={{width:'50%', height:'50px'}}  name='description' value={event.description} onChange={handleInputChange}></textarea>{/* maxlength='300' */}

                <label>Elenco/Participantes: </label>
                <input type='text' name='starring' value={event.starring} onChange={handleInputChange} />

                <label>Ubicación: </label>
                <input type='text' name='location' value={event.location} onChange={handleInputChange} placeholder='pais/provincia(estado,departamento)/ciudad' />

                <label>Dirección: </label>
                <input type='text' name='address' value={event.address} onChange={handleInputChange} />

                <label>Fecha de Inicio: </label>
                <input type='text' name='startDate' value={event.startDate} onChange={handleInputChange} placeholder='AAAA/MM/DD' />

                <label>Recurrente</label>
                <div>
                    <span>Si</span>
                <input style={{ position: 'relative',width:'10%' }} type='radio' name='isRecurrent' value={true} onChange={handleInputChange} />
                <span>No</span>
                <input style={{ position: 'relative',width:'10%' }} type='radio' name='isRecurrent' value={false} onChange={handleInputChange} />
                </div>
                
                <label>Fecha de finalización: </label>
                <input type='text' name='finishDate' value={event.finishDate} onChange={handleInputChange} />
                
                <label>Horarios: </label>
                <div>
                    <input style={{ width: '10%' }} type='number' min='0' max='23' name='hours' value={hour} onChange={scheduleInputChange} placeholder='horas' />
                    :
                    <input style={{ width: '10%' }} type='number' min='0' max='59' name='mins' value={mins} onChange={scheduleInputChange} placeholder='minutos' />
                <button className='button-event' onClick={scheduleChange}>agregar</button>
                </div>

                {event.schedule ?
                    <select>
                        <option>Horarios Disponibles</option>
                        {event.schedule.map((e, i) => {
                            return <option key={i}>{e}</option>
                        })}
                    </select>
                    : null}

                <label>Días: </label>
                <select onChange={weekDaysInputChange}>
                    <option>Seleccionar</option>
                    {weeks.map((e, i) => {
                        return <option key={i} value={e}>{e}</option>
                    })}
                </select>
                <button className='button-event' onClick={weekDaysChange}>agregar</button>
                {event.weekDays ?
                    <select onChange={deleteDay}>
                        <option>Días Seleccionados</option>
                        {event.weekDays.map((e, i) => {
                            return <option key={i}>{e}</option>
                        })}
                    </select>
                    : null}
                <label>Tipo de Evento: </label>
                <select>
                    <option>Seleccionar</option>
                    {tags.map((e, i) => {
                        return <option key={i} value={e}>{e}</option>
                    })}
                </select>

                <label>Clasificación: </label>
                <select onChange={(e) => options(e)}>
                    <option value='seleccionar'>Seleccionar</option>
                    <option value='0+'>0+</option>
                    <option value='7+'>7+</option>
                    <option value='13+'>13+</option>
                    <option value='18++'>18+</option>
                </select>
                <label>Precios: </label>
                <input type='text' name='prices' value={event.prices} onChange={handleInputChange} />

                <label>Limite de ingresos: </label>
                <input type='text' name='incomeLimit' value={event.incomeLimit} onChange={handleInputChange} />

                <input className='button-event' type='submit' />
            </div>
        </form>
    )
}
// - virtual: boolean (default: false)
// - Tipo del evento (etiquetas) * (enum) / tags
//               "Outdoors", "Indoors", "Live", "Concert", "Play", "Movie", "Disco", "Sports" 
// - Precio* / price (string)
// - Limite de ingresos  / ticket_limit 
// - Sistema de asignacion de sillas / seat_booking