// import React, { Component } from "react";

class Clock extends React.Component{
    constructor(){
        super();
        this.state={date:new date()};
    } 
    render(){
        return(
            <div>
                <h1>hello worlds</h1>
                <h2> it is {this.state.date.toLocalTimeString()}.</h2>
            </div>
        );
    }
}
const root=ReactDom.createRoot(document.getElementById('root'))
root.render(<Clock/>)