
import React,{useState} from 'react';

 
function Controlled() {
    const [data,setData]= useState("");
   
    
        return (
        <div>
        <h1>Controlled Component</h1>


    <input type="text" value={data} onChange={(e)=>setData(e.target.value)}></input>
    <h3>{data}</h3>

        </div>
        );
}
export default Controlled;