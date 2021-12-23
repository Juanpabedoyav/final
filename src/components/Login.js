import React from 'react'

const Login = () => {
    return (
        <div>
            <form >
            {/* <div>
                <label htmlFor="name"></label>
                <input name='name' type="text" placeholder='Nombre del Comensal' />
            </div> */}
            <div>
                <label htmlFor="email"></label>
                <input name='email' type="text" placeholder='Correo Electronico' />
            </div>
            <div>
                <label htmlFor="password"></label>
                <input name='password' type="text" placeholder='Contraseña' />
            </div>

                <button type='submit'>Iniciar Sesion</button>
            </form>
            <button type='button'>Iniciar Con Google</button>
            <button type='button'>Iniciar Con Facebook</button>

        </div>
    )
}

export default Login
