import React,{createRef}  from 'react';

function UseRef() {
  const inputRef= createRef("");

    // const [name,setName]=useState(""); 
    //  console.log(inputRef);

    function getvalue(){
        inputRef.current.style.color="blue";
        inputRef.current.value="sam";
        console.log(inputRef.current.value)
    }
  return (
    <div>Useref
    <input ref={inputRef} type="text" >
     {/* value={name}  onChange={(e)=> setName(e.target.value)} */}

    </input>
    <button onClick={getvalue} >click me</button>

    </div>
  )
}

export default UseRef;