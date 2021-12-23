import { Field, Form, Formik } from "formik"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { registroAsyc } from '../redux/actions/registroAction'
import { RegistroStyle } from "../styles/Registro.style"

const Registro = () => {
    const dispatch = useDispatch()
   const navegar =  useNavigate()
    return (
        <RegistroStyle>
            <Formik
            initialValues={{
                email:'',
                password:''
            }}
            onSubmit={
                (val)=>{
                     console.log(val)   
                     dispatch(registroAsyc(val.email, val.password))
                    navegar('/login');
            }}  
            >
{()=>(
              <Form  className="formulario">
        
            <div className="bloque">
                <label htmlFor="email">Correo Electronico</label>
                <Field className='input' name='email' type="text" placeholder='Correo Electronico' />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <Field className='input' name='password' type="text" placeholder='Contraseña' />
            </div>

                <button type='submit'>Registrarme</button>
            </Form>
    )}
            </Formik>
            
        </RegistroStyle>
    )
}

export default Registro
