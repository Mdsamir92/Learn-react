//Hooks state functional component
import React,{useEffect,useState} from 'react';

 
function  UseEffectHooks(){
    const [data,setData]= useState(10);
    const [count,setCount]= useState(100);
    useEffect(()=>{
        console.log("use effect");
    },[count])
    
        return (
        <div>
    <h1>Use Effect  count:{count}</h1>
    <h1>data:{data}</h1>

    <button onClick={()=>setCount(count+1)}>update count</button>
    <button onClick={()=>setData(data+1)}>update Data</button>
        </div>
        );
}
export default UseEffectHooks;