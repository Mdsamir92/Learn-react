import React, { useState} from 'react';
function Toggle() {
    const  [status,setstatus]=useState(true)

    return (  
        <div>
        {
            status?<h4>Hello samir..</h4>:null
        }
            <button onClick={()=>setstatus(false)} >Hide</button>
            <button  onClick={()=>setstatus(true)} >Show</button>
            {/* <button  onClick={()=>setstatus(!status)} >Toggle</button> */}
        </div>

    );
}

export default Toggle;