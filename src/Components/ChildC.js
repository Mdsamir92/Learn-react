import React, { useContext } from 'react'
import { Biodata } from './ChildA';
import {data,data1,data2} from './Context'

function ChildC() {
  const name=  useContext(data);
  const gender=  useContext(data1);
  const Color=  useContext(data2);

  const biodata=useContext(Biodata);
  
  return (
    <div>
    <h1>child C</h1>
        <h1>Hi my name is {name} and my gender is {gender} </h1>
        <h3 style={{color:Color}} >context</h3>
        <h4>hello child A {biodata}</h4>
 
    </div>
  )
}

export default ChildC;