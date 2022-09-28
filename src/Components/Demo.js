import React  from 'react'

 const Demo = (props) => {

   
  return (
    <div style={{backgroundColor: "skyblue"}}>
        <h2>{props.number}</h2>
        <h3>Hello {props.name}</h3>
        <h4>Email:{props.email}</h4>
        <h5>{props.address}</h5>
        
     
    </div>
        
  )
}
export default Demo;
