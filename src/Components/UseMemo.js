import React,{useMemo, useState} from 'react'

function UseMemo() {
    const [add,setAdd]= useState(0);
    const [minus,setMinus]= useState(100);
    const mul=useMemo(()=>{
        console.log("use memo");
       return add*10;
    },[add])
  return (
    <div>
     UseMemo
     <h1>minus:{minus}</h1>
    <h1>add:{add}</h1>
    <h2>{mul}</h2>

    <button onClick={()=>setAdd(add+1)}>Add</button>
    <button onClick={()=>setMinus(minus-1)}>Minus</button>


    </div>
  )
}

export default UseMemo;