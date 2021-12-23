


export const getDataAction = async(url)=>{
 try{
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
}catch(error){
 console.log(error);
}
}