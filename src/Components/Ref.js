import React, { createRef,Component } from 'react'
import {Button} from 'react-bootstrap';

class Ref extends Component {
constructor(){
    super();
    this.inputRef=createRef();
}
componentDidMount(){
    
}
getvalue(){
    console.log(this.inputRef.current.value)
    this.inputRef.current.style.color="red"

}
    render()
    {
  return (
    <div>
    <h1>Ref </h1>
    <input type="text" ref={this.inputRef}/>
    <Button variant="warning" onClick={()=>this.getvalue()} >click me</Button>
    </div>
  );
    }

}
export default Ref;