import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getDataAction } from "../redux/actions/getDataAction"

const Home = () => {
 const dispatch = useDispatch()
    
    
    useEffect(() => {
        dispatch(getDataAction('https://recipe-rissoto.vercel.app/recipe'))
    }, [dispatch])
    
    
    
    const selectAll =()=>{

    }
    const disabledAll =()=>{

    }

    return (
        <>
        <div>
            <h6>ingredientes</h6>
            <h1>Nombre Completo</h1>
        </div>
        <form action="">
        <div>
            <button>Selecionar Todo</button>            
            <button>Deseleccionar Todo</button>
        </div>
        <div>
            <input type="checkbox" />
            <article>contardor</article>
            <div>
                <h1>Articulo</h1>
                <h3>Marca</h3>
                <h2>x kg</h2>
            </div>
            <h1>xxx, E</h1>
        </div>

        <p>Items : cantidad de items</p>
        <p>Subtotal  :precio</p>
        <p>Gastos de envio</p>
        <p>Total</p>
<button type="submit">Comprar ingredientes por total</button>
        </form>
        </>
    )

}

export default Home
