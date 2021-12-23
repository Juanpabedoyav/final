import { types } from "../types/types";

export const getData =(data)=>{

    return {
        type:types.getData,
        payload: data

    }

 } 

export const getDataAction = (url)=>{
return async(dispatch)=>{
     try{
    const resp = await fetch(url);
    const data = await resp.json();
    // console.log(data);
    dispatch(getData(data))
}catch(error){
 console.log(error);
}


}



}