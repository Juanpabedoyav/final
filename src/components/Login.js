import { Formik, Form, Field } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginAsyc, loginFacebook, loginGoogle } from '../redux/actions/loginAction'

const Login = () => {
  const dispatch= useDispatch()
 
  const googleLog =()=>{
    dispatch(loginGoogle())

 }
 const facebookLog =()=>{
    dispatch(loginFacebook())
}
    return (
        <div>
            <Formik
            initialValues={
                {
                    email:'',
                    password: '',
                }
                }
            onSubmit={
               (val)=>{
                console.log(val)
                dispatch(loginAsyc(val.email, val.password))
               } 
            }    
            >
        
          {()=>(  
            <Form >
            {/* <div>
                <label htmlFor="name"></label>
                <input name='name' type="text" placeholder='Nombre del Comensal' />
            </div> */}
            <div>
                <label htmlFor="email"></label>
                <Field name='email' type="text" placeholder='Correo Electronico' />
            </div>
            <div>
                <label htmlFor="password"></label>
                <Field name='password' type="password" placeholder='Contraseña' />
            </div>

                <button type='submit'>Iniciar Sesion</button>
            </Form>
            )}
            </Formik>
            <button onClick={googleLog} type='button'>Iniciar Con Google</button>
            <button onClick={facebookLog} type='button'>Iniciar Con Facebook</button>
            <Link to='/registro'> Registrarme</Link>
        </div>
    )
}

export default Login
