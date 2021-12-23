import { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Home from '../components/Home'
import Login from "../components/Login";
import Registro from "../components/Registro";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login, logout} from "../redux/actions/loginAction";
import Politica from "../components/Politica";

const AppRouter = () => {
    const dispatch = useDispatch()
    useEffect(() => {
     const auth = getAuth()
     onAuthStateChanged(auth, (user)=>{
         if(user.uid){
            //  console.log('estas logueado')
             dispatch(login(user.uid , user.email))
         }else{
            dispatch(logout())
            console.log('no estas logueado')
         }
     })
    }, [])
    return (
        <BrowserRouter>
            

            <Routes>
                
                <Route path='/' element={
            <PrivateRoutes>
                <Home />
            </PrivateRoutes>
            }/>
            <Route path='/politica' element={
            <PrivateRoutes>
                <Politica />
            </PrivateRoutes>
            }/>
           
             
                <Route path='login' element={
             <PublicRoutes>
                 <Login />
             </PublicRoutes>
            }/>
                <Route path='registro' element={
                      <PublicRoutes>
                        <Registro />
                    </PublicRoutes>}/>
                  


            </Routes>
        </BrowserRouter>
    )
}


export default AppRouter
