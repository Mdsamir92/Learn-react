import React from 'react'
import {Table} from 'react-bootstrap';


function array() {

    // const student =['sam','samir','sahil'];
    const student1 =[
    {name:"samir",email:"mdsamir92@gmail.com"},
    {name:"sam",email:"mdsamir92@gmail.com"},
    ];
  return (
    <div>
        <h5>Array with bootstrap</h5>
        <Table striped border="1" >
        <tbody>
        <tr>
            <td>Name</td>
            <td>Email</td>
        </tr>

        {
            student1.map((data,s)=>
            <tr key={s} >
                <td>{data.name}</td>
                <td>{data.email}</td>
            </tr>
            
            )
        }
        </tbody>
        </Table>

    </div>
  )
    }
export default array;