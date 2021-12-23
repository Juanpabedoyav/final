import { Field, Form, Formik } from "formik"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { getDataAction } from "../redux/actions/getDataAction"
import { logoutAsyc } from "../redux/actions/loginAction"
import {HomeStyle} from '../styles/Home.style'
const Home = () => {
 const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getDataAction('https://recipe-rissoto.vercel.app/recipe'))
        total();
    }, [dispatch])
    
    const data = useSelector(state => state.data)
    // const {name, ingredients, currency}= {data}
    
    const [totales, setTotales] = useState()
    const [checkeados, setCheckeados] = useState()

    

const total = ()=>{
    let a=[]
    let suma= 0
    data.data?.ingredients.map(el => {
    a.push(el.price)
    a.forEach(el => {
        suma+= el} )
    // console.log(suma)
    setTotales(suma)

    })
    // console.log(totales)
}


const selectAll =()=>{
const boton = document.querySelectorAll('.check')
boton.forEach(el =>{
    if(!el.checked){
        el.checked = true;

        // console.log(el.value)
    }
})  

}
const disabledAll =()=>{
        const boton2 = document.querySelectorAll('.check')
        boton2.forEach(el =>{
            if(el.checked){
                el.checked = false;
            }
        })
    }
const handleCheck =({target})=>{
let a =[]
if(target?.checked === true){
setCheckeados([{
    ...checkeados,
    precio : target.value,
}])
}
}
const handleSubmit = (e)=>{
    e.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Pago realizado',
        showConfirmButton: false,
        timer: 1500
      })
}
    return (
        <HomeStyle>
    <div className="card">
            <button onClick={()=>dispatch(logoutAsyc())}>cerrar sesion</button>
        <div className="title">
            <h6>ingredientes</h6>
            <h1>{data.data?.name}</h1>
            <button className="select" type="button" onClick={()=>selectAll()}>Selecionar Todo</button>            
            <button className="select" type="button" onClick={()=>disabledAll()}>Deseleccionar Todo</button>
        </div>
      

        <form onSubmit={handleSubmit}>
    
            {
              data.data?.ingredients.map(el=>{
                  return(
        <div key={el.price} className="article">
            <input  className='check'type="checkbox" name={`${el.product}`} value={`${el.price}`} onClick={handleCheck}/>
            {/* <input name='cantidad' type="text" onChange={handleChange} /> */}
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
<button type="submit">Comprar ingredientes por total {totales}</button>
        </form>
      
        </div>
        </HomeStyle>
    )

}

export default Home
