import React from 'react';
import Login from '../Login/Login'

const LoginContainer = () => {
    return (
        <div>
            <Login
                nameComponent='Log in 2'
            />
            <Login />
        </div>
    )
}

export default LoginContainer
