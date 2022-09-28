//Hooks usestate functional component
import React,{useState} from 'react';

 
function  Hooks(){
    const [data,setData]= useState("md")
    
        return (
        <div>
    <h1>{data}</h1>
    <button onClick={()=>setData("samir")}>update Data</button>
        </div>
        );
}
export default Hooks;