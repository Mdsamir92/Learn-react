import React, { Component } from 'react'

class ComponentDidMount extends Component {
    constructor(){
        super();
        this.state={
            name: "samir"
        }
    }
    componentDidMount()
    {

    }
  render() {
    return (
      <div><h1>ComponentDidMount  {this.state.name}</h1>
     
      <button onClick={()=>{this.setState({name: "sam"})} } >update name</button>
      </div>
    )
  }
}
export default  ComponentDidMount;