import React,{useState} from 'react'
import {Button} from 'react-bootstrap';

function Inputbox(){
   
        const [data,setData] = useState(" ")
        const [print,setprint] = useState(" false")
      
        function getdata(val){
        console.log(val.target.value)
        setData(val.target.value)
        setprint(false)
    }
return(
    <div>{
        print?
    <h1>{data}</h1>
    :null
    }
    
    <input type="text" onChange={getdata} />
    {/* <button onClick={()=>setprint(true)}></button> */}
    <Button variant="warning" onClick={()=>setprint(true)}>Print me</Button>
    </div>
);
}
export default Inputbox;