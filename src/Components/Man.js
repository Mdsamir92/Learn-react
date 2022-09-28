//functional component
import React from 'react';

function Man(){
    let data ="samir";

    //alert("hello sam");
        return (
        <div>
    <h1>{data}  functional component.</h1>
    <button onClick={() =>{alert("hello")}}>click me</button>
        </div>
        );
}
export default Man;