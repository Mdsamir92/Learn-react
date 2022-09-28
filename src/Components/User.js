//state class component
import React, { Component } from 'react'

 class User extends Component {
   constructor(){
     super();
     this.state={
    data:0//"classs component"
     }
   }
   apple(){
     this.setState({data:this.state.data+1})
   } 
  render() {
    return (
      <div> 
      <h2>State class component {this.state.data}</h2>
      <button onClick={()=>this.apple()}>update Data</button>
      </div>
    );
  }
}
export default User;
