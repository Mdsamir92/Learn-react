import React,{useRef} from 'react'

function Uncontrolled() {
    let inputRef=useRef(null)
    function submitform(e){
        e.preventDefault();
      console.log("input filed 1 value:" ,inputRef.current.value)
    }
  return (
    <div>
    <h1>Uncontrolled component </h1>
    <form onSubmit={submitform}>
        <input ref={inputRef} type="text" /><br></br>
        <input type="text"/><br></br>
        <button>Submit</button>
    </form>
    </div>
  );
}

export default Uncontrolled;