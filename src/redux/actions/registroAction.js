import { types } from "../types/types"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const registro = (email) =>{
    return {
        type: types.registro,
        payload:{
            email,
        }
    }
    
    }
export const registroAsyc = (email, password)=>{
return(dispatch)=>{
const auth = getAuth()
createUserWithEmailAndPassword(auth, email, password)
.then(({user})=>{
    dispatch(registro(user.email))
}).catch(error=>console.log(error))
}

}