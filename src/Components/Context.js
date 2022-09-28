import React,{createContext,useState} from 'react'
import ChildA from './ChildA';


const data=createContext();
const data1 =createContext();
const data2 =createContext();
function Context() {
    const[color]=useState("blue")
    const name="md samir"
    const gender="male"
  return (
    <div>
    
    <data.Provider value={name}>
    <data1.Provider value={gender}>
    <data2.Provider value={color}>
    <ChildA/>
    </data2.Provider>
    </data1.Provider>
    </data.Provider>

    </div>
    
  )
  }

export default Context;
export {data,data1,data2};