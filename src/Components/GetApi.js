import {useEffect,useState} from 'react'
function GetApi() {
  
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch("https://632c652f5568d3cad884c4bc.mockapi.io/Crud-Youtube")
        .then((result)=>{
            result.json()
            .then((resp)=>{
               console.log(result,resp)
                setData(resp)

        })
    })
    },[])
    console.log(data);
    return (
    <div>
 <h1>Get api call</h1>

</div>
    );
}
  export default GetApi;