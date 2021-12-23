import { Field, Form, Formik } from "formik"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { registroAsyc } from '../redux/actions/registroAction'

const Registro = () => {
    const dispatch = useDispatch()
   const navegar =  useNavigate()
    return (
        <div>
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
              <Form >
        
            <div>
                <label htmlFor="email"></label>
                <Field name='email' type="text" placeholder='Correo Electronico' />
            </div>
            <div>
                <label htmlFor="password"></label>
                <Field name='password' type="text" placeholder='Contraseña' />
            </div>

                <button type='submit'>Registrarme</button>
            </Form>
    )}
            </Formik>
            
        </div>
    )
}

export default Registro
