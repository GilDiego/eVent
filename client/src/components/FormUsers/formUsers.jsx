import React, {  useState } from "react";

export function Validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = '*';
    }
    if (!input.lastname) {
        errors.lastname = '*';
    }
    if (!input.username) {
        errors.username = '*';
    }
    if (!input.country) {
        errors.country = '*';
    }
    if (!input.email) {
        errors.email = '*';
    }
    if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = 'Correo invalido';
    }
    if (!input.password) {
        errors.password = '*';
    }
    if (!/(?=.*[0-9])/.test(input.password)) {
        errors.password = 'Contraseña invalida';
    }
    if (!/^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(input.dateOfBirth)) {
        errors.dateOfBirth = 'Formato fecha incorrecto. Ejemplo : 12/02/2000'  //'Formato fecha incorrecto *'
    }

    return errors;
}

export default function FormUsers() {
    const [errors, setErrors] = useState({})
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        username: '',
        password: '',
        dateOfBirth: '',
        photo: '',
        country: '',
        provStateDepart: '',
        city: '',
        email: '',
        phone: '',
    })

    const handleInputChange = function (e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        // setErrors(Validate({
        //     ...errors,
        //     [e.target.name]: e.target.value
        // }));
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            setErrors(Validate({
                ...errors,
                [e.target.name]: e.target.value
            }))
            setUser({
                name: '',
                lastname: '',
                username: '',
                password: '',
                dateOfBirth: '',
                photo: '',
                country: '',
                provStateDepart: '',
                city: '',
                email: '',
                phone: '',
            })
        }}>
            <div style={{ display: 'flex', flexDirection:'column', width: '30%' }} >
                <label>Nombre: </label>
                <input className={errors.name && 'danger'} type='text' name='name' value={user.name} onChange={handleInputChange}></input>
                {errors.name && (<span className="danger">{errors.name}</span>)}
                <label>Apellido: </label>
                <input className={errors.lastname && 'danger'} type='text' name='lastname' value={user.lastname} onChange={handleInputChange}></input>
                <label>Nombre Usuario: </label>
                <input className={errors.username && 'danger'} type='text' name='username' value={user.username} onChange={handleInputChange}></input>
                <label>Contraseña: </label>
                <input className={errors.password && 'danger'} type='password' name='password' value={user.password} onChange={handleInputChange}></input>
                <label>Fecha de Nacimiento: </label>
                <input className={errors.dateOfBirth && 'danger'} name='dateOfBirth' value={user.dateOfBirth} onChange={handleInputChange}></input>
                <label>Foto: </label>
                <input type='file' name='photo' value={user.photo} onChange={handleInputChange}></input>
                <label>País: </label>
                <input type='text' name='country' value={user.country} onChange={handleInputChange}></input>
                <label>Provincia/Estado/Departamento: </label>
                <input type='text' name='provStateDepart' value={user.provStateDepart} onChange={handleInputChange}></input>
                <label>Ciudad: </label>
                <input type='text' name='city' value={user.city} onChange={handleInputChange}></input>
                <label>Correo: </label>
                <input className={errors.email && 'danger'} type='email' name='email' value={user.email} onChange={handleInputChange}></input>
                {errors.email && (<span className="danger">{errors.email}</span>)}
                <label>Teléfono: </label>
                <input type='text' name='phone' value={user.phone} onChange={handleInputChange}></input>
                <input type='submit' />
            </div>
        </form>
    )
}