import React from 'react'

function Arraylist() {

    const list =[
        {name:"samir",email:"mdsamir92@gmail.com"},
        {name:"sam",email:"mdsamir92@gmail.com"},
        ]
  return (
    <div>
<h1>Array list </h1>
<table>
<tbody>
{
    list.map((item,i)=>
    <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
   </tr>
    )
}
</tbody>

</table>

    </div>
  )
}

export default Arraylist;