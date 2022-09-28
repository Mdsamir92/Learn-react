import React from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'

function DynamicRouting() {
    let users=[
        {id:1, name:"samir",email:"mdsamir92@gmail.com"},
        {id:2, name:"sam",email:"mdsamir92@gmail.com"},
        {id:3, name:"sahil",email:"mdsamir92@gmail.com"},
    ]
  return (
    <div>
    <Router>
    <h1>Dynamic Routing</h1>
    {
        users.map((item,i)=>
        <div key={i}><Link to={"/user/"+item.id}><h3>{item.name}</h3></Link></div>
        )
    }
    </Router>
    </div>
  )
}

export default DynamicRouting;