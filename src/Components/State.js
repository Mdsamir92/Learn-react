//state functional component
import React,{useState} from 'react';

 
function  State(){
    const [data,setData]= useState(0)
    // function  sam(){
    //     setData(data+1)
// }
        return (
        <div>
    <h1> USE State {data}</h1>
    <button onClick={()=>setData(data+1)}>update Data</button>

        </div>
        );
}
export default State;