import React, { useState } from 'react';
import './formEvent.css'

export function Validate(input){
    let errors = {};
    if(!input.name){
        errors.name = '*'
    }
    if(!input.description){
        errors.description = '*'
    }
    if(!input.location){
        errors.location = '*'
    }
    if(!input.startDate){
        errors.startDate = '*'
    }
    if(!input.hours){
        errors.hours = '*'
    }
    if(!input.eventType){
        errors.eventType = '*'
    }
    if(!input.classification){
        errors.classification = '*'
    }
    if(!input.prices){
        errors.prices = '*'
    }
    if(!input.incomeLimit){
        errors.incomeLimit = '*'
    }
}

export default function FormEvent() {
    // const [errors, setErrors] = useState({})
    const [event, setEvent] = useState({
        name: '',
        img:[],
        description: '',
        cast_participants: '',
        location: '',
        startDate: '',
        endDate: '',
        schedules: '',
        eventType: '',
        classification: '',
        prices: '',
        incomeLimit: ''
    })
    //const [files, setFiles] = useState('')
    const uploadFiles = function (e){
        if(e.target.value !== ''){
            setEvent({
                ...event,
                img:[e.target.value,...event.img]
        })}
        
    }

    const options = function (e){
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
            console.log(event,'¿')
            console.log('event.img',event.img,'¿')
            // setErrors(Validate({
            //     ...errors,
            //     [e.target.name]: e.target.value
            // }))
            
        }}>
            <div className='container-event'>
                <label>Nombre del Evento: </label>
                <input type='text' name='name' value={event.name} onChange={handleInputChange}/>
                
                <label>Imagenes: </label>
                <span style={{fontFamily:'serif', fontSize:'smaller' }}>para agregar más imagenes vuelva a elegir otro archivo</span>
                <input type='file' name='files' value={event.img[0]} onChange={uploadFiles} multiple/>
                {event.img?
                <select>
                    <option>Archivos seleccionados</option>
                    {event.img.map((e,i)=>{
                       return <option key={i}>{e}</option>
                    })}
                    </select>
                :null}

                <label>Descripción: </label>
                <input type='text'name='description' value={event.description} onChange={handleInputChange}/>

                <label>Elenco/Participantes: </label>
                <input type='text'name='cast_participants' value={event.cast_participants} onChange={handleInputChange}/>

                <label>Ubicación: </label>
                <input type='text'name='location' value={event.location} onChange={handleInputChange}/>

                <label>Fecha de Inicio: </label>
                <input type='text'name='startDate' value={event.startDate} onChange={handleInputChange}/>

                <label>Fecha de finalización: </label>
                <input type='text'name='endDate' value={event.endDate} onChange={handleInputChange}/>

                <label>Horarios: </label>
                <input type='text'name='hours' value={event.hours} onChange={handleInputChange}/>

                <label>Tipo de Evento: </label>
                <input type='text'name='eventType' value={event.eventType} onChange={handleInputChange}/>

                <label>Clasificación: </label>
                <select onChange={(e) => options(e)}>
                <option value='seleccionar'>Seleccionar</option>
                <option value='all'>Todos</option>
                <option value='childrens'>Niños</option>
                <option value='adults'>Adultos</option>
                </select>
                <label>Precios: </label>
                <input type='text'name='prices' value={event.prices} onChange={handleInputChange}/>

                <label>Limite de ingresos: </label>
                <input type='text' name='incomeLimit' value={event.incomeLimit} onChange={handleInputChange}/>

                <input className='button-event' type='submit' />
            </div>
        </form>
    )
}