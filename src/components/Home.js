import { Field, Form, Formik } from "formik"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { getDataAction } from "../redux/actions/getDataAction"
import { logout } from "../redux/actions/loginAction"

const Home = () => {
 const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getDataAction('https://recipe-rissoto.vercel.app/recipe'))
    }, [dispatch])
    
    const data = useSelector(state => state.data)
    // const {name, ingredients, currency}= {data}
    const [cantidad, setCantidad] = useState(1)
    
    const [tocado, setTocado] = useState({
        name:'',
        price: ''
    })
    


const handleCheck = ()=>{
        setTocado({
            ...tocado,
            name:data.data.ingredients.product,
            price:data.data.ingredients.price,

        })
}

const selectAll =()=>{
const boton = document.querySelectorAll('#check')
boton.forEach(el =>{
    if(!el.checked){
        el.checked = true;

        // console.log(el.value)
    }
})  

}
const disabledAll =()=>{
        const boton2 = document.querySelectorAll('#check')
        boton2.forEach(el =>{
            if(el.checked){
                el.checked = false;
            }
        })
    }

    return (
        <div>
            <button onClick={()=>dispatch(logout())}>cerrar sesion</button>
        <div>
            <h6>ingredientes</h6>
            <h1>{data.data?.name}</h1>
        </div>
        <div>
            <button type="button" onClick={()=>selectAll()}>Selecionar Todo</button>            
            <button type="button" onClick={()=>disabledAll()}>Deseleccionar Todo</button>
        </div>
       <Formik
       initialValues={{
        checked: [],
       }}
       onSubmit={(valores)=>{
           console.log(valores)
           Swal.fire({
            icon: 'success',
            title: 'Pago realizado',
            showConfirmButton: false,
            timer: 1500
          })
       }}
       >
{()=>(
    

        <Form >
    
            {
              data.data?.ingredients.map(el=>{
                  return(
        <div>
            <Field id='check' name='checked' type="checkbox" onClick={handleCheck} />
            <Field name='cant' type="text" defaultValue={cantidad} />
        <div>
                <h1>{el.product}</h1>
                <h3>{el.brand}</h3>
                <h2>{el.quantity}</h2>
            </div>

             <h1>{el.price} {data.data?.currency} </h1>
             </div>

                  )
                })

            }

        <p>Items : cantidad de items</p>
        <p>Subtotal  :precio</p>
        <p>Gastos de envio  {data.data?.["shipping-cost"]}</p>
        <p>Total</p>
<button type="submit">Comprar ingredientes por total</button>
        </Form>
)}
        </Formik>

      

        </div>
    )

}

export default Home
