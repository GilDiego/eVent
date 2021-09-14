import React, { useState } from 'react';

export default function FormEvent() {
    const [event, setEvent] = useState({
        name:'',
        description:'',
        cast_participants:'',
        location:'',
        startDate:'',
        endDate:'',
        
    })
    return (
        <form>
            <div>
                <label>Nombre del Evnto*: </label>
                <input></input>
                <label>Descripción*: </label>
                <input></input>
                <label>Elenco/Participantes: </label>
                <input></input>
                <label>Ubicación*: </label>
                <input></input>
                <label>Fecha de Inicio*: </label>
                <input></input>
                <label>Fecha de finalización: </label>
                <input></input>
                <label>Horarios*: </label>
                <input></input>
                <label>Tipo de Evento*: </label>
                <input></input>
                <label>Clasificación*: </label>
                    <select>Selección</select>
                        <option>Todos</option>
                        <option>Niños</option>
                        <option>Adultos</option>
                <label>Precios*: </label>
                <input></input>
                <label>Limite de ingresos*: </label>
                <input></input>
                <input type='submit' />
            </div>
        </form>
    )
}