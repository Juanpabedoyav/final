import styled from 'styled-components'

export const RegistroStyle = styled.div`
    
/* border: 1px solid red; */
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
height: 100vh;
/* width: 100%; */
.formulario{
    /* border: 1px solid red; */
    width: 40%;
    margin-bottom: 10px;
    text-align:center;
    button{
        margin-top: 5px;
    }
}
.input{
    margin: 5px 0;
    /* border-radius: 5px; */
}

label{
    display:block;
    /* text-align:left; */
   

}

.input:focus{
    
    border:none;
}
button{
    width: 180px;
    margin: 2px 0;
    background-color: black;
    color : white;
    font-weight: 800;
    border-radius: 8px;

}
button:hover{
    width: 180px;
    background-color: white;
    color : black;
    font-weight: 800;
}
a{
    text-decoration:none;
    font-size:.8rem;  
    margin-top: 5px;
    color:black; 
    font-weight: 800;

}
a:hover{
    text-decoration:underline;

}
`