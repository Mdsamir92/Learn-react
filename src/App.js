import React,{useState} from 'react';
import './App.css';
import Man from './Components/Man';
import Demo from './Components/Demo';
import User from './Components/User';
import State from './Components/State';
import Hooks from './Components/Hooks';
import UseEffectHooks from './Components/UseEffectHooks';
import Student from './Components/Student';
import Inputbox from './Components/Inputbox';
import Toggle from './Components/Toggle';
import Form from './Components/Form';
import './Style.css';
import  Style from './Custom.module.css';
import Array from './Components/Array';
import Arraylist from './Components/Arraylist';
import "bootstrap/dist/css/bootstrap.min.css";
import Ref from './Components/Ref';
import Controlled from './Components/Controlled';
import Uncontrolled from './Components/Uncontrolled';
import Ruser from './Components/Rtr';
import {BrowserRouter as Router} from 'react-router-dom'
import DynamicRouting from './Components/DynamicRouting';
import GetApi from './Components/GetApi';
import Axios from './Components/Axios';
import Context from './Components/Context';
import UseMemo from './Components/UseMemo';
import Registration from './Components/Registration';
import UseRef from './Components/UseRef'; 
import ComponentDidMount from './Components/ComponentDidMount';




function App(){
  const [data,setData]=useState("samir")
  return(
 
    <div className="App">
    <h1>Types of css</h1>
     <h2 className="primary">Style 1</h2>
     <h2 style={{color:"yellow",backgroundColor: "blue"}}>Style 2</h2>
     <h2 className={Style.last}>Style 3</h2>
    
<h1>hello world</h1>

<div className='man'>
<Man />
<User />
<Demo  name ={"sam khan"}email="mdsam92@gmail.com"  address="Delhi"/>
<Demo  name ={"sahilkhan"}email="mdsahil92@gmail.com" address="Dubai" number="786"/>

<Student name={data}/>
<button onClick={()=>{setData("sam")}} >click</button>
<State/>
<Hooks />
<UseEffectHooks/>
<Inputbox/>
<Toggle/>
<Form/>
<Array/>
<Arraylist/>
<Ref/>
<Controlled/>
<ComponentDidMount/>
<Uncontrolled/>
<Router><Ruser/></Router>
<DynamicRouting/>
<GetApi/>
<Axios/>
<Context/>
<UseMemo/>
<UseRef/>
<Registration/>


</div>   
</div>
  );

}
export default App;