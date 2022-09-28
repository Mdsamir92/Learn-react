import React, { Component } from 'react'

 class Registration extends Component {
     constructor(props) {
       super(props);
     
       this.state = {
           name:null,
           country:null,
       };
     }

    submitHandler =(event) =>{
        event.preventDefault();
        console.log(this.state);
        const name = event.target.name.value;
        const country = event.target.country.value;
        this.setState({name,country},() =>{
            console.log(this.state);
            event.target.name.value="";
            event.target.name.country="";
          
        });
    };
  render() {
    return (
      <div>
          <form onSubmit={this.submitHandler} >
          <label htmlFor="">Name</label>
              <input type="text" name="name" />
              <div>
              <label htmlFor="">Country</label>
              <select >
                  <option value = "1">1</option>
                  <option value = "2">2</option>
                  <option value = "3">3</option>
              </select>
              </div>
              <button type="submit" >submit</button>
          </form>
      </div>
    )
  }
}

export default Registration;