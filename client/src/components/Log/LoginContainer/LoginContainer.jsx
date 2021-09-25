import React, { useState } from 'react';
import styles from './LoginContainer.module.css';
import LoginPromoter from '../LoginPromoter/LoginPromoter';
import LoginUser from '../LoginUser/LoginUser';

const LoginContainer = () => {
    const [Switch, setSwitch] = useState(true)

    //functions
    const setUser = () => {
        setSwitch(true)
    }
    const setPromoter = () => {
        setSwitch(false)
    }
    return (
        <div className={ styles.container }>
            <div>
            <button onClick={ setUser }>Usuario</button>
            <button onClick={ setPromoter }>Promoter</button>
            </div>
            
            {Switch
            ?
            <LoginUser
            nameComponent='Log in Usuario'
                nameComponentOne='Ingresando usuario'
                nameComponentTwo='Usuario no encontrado'
                messageFalse='El usuario no se encuentra registrado'
                messageTwoFalse='o el password no es correcto'
            />
            :
            <LoginPromoter 
            nameComponent='Log in Promoter'
                nameComponentOne='Ingresando Promoter'
                nameComponentTwo='Promoter no encontrado'
                messageFalse='El Promoter no se encuentra registrado'
                messageTwoFalse='o el password no es correcto'
            />
        }
        </div>
    )
}

export default LoginContainer
