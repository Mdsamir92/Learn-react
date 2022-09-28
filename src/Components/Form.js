import React,{useState}from 'react';
import{Button} from 'react-bootstrap'

function Form(){
    const data ={name:"",email:"",password:""};
    const[inputData,setInputData]=useState(data)
function handleData(e){
    setInputData({...inputData, [e.target.name]:e.target.value})
    console.log(inputData)
}
function handleSubmit(e){
    e.preventDefault();
    if(!inputData.name || !inputData.email|| !inputData.password){

        alert("all fileds are required")
    }

}
    return(
        <div>
            <h1>Registration form</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Name" name="name" value={inputData.name} onChange={handleData} /><br></br>
           <div>
            <input type="email" placeholder="Enter Your Email" name="email" value={inputData.email}  onChange={handleData} />
            </div>
            <div>
            <input type="password" placeholder="Enter Your Password" name="password" value={inputData.password}  onChange={handleData}/>
            </div>
            {/* <input type="checkbox"  onChange={ (event)=>setName(event.target.checked)}/><span>Accept terms and condition</span> */}
            <Button variant='warning' name="submit" type="submit">submit</Button>
            </form>
        </div>
    );
}
export default Form;