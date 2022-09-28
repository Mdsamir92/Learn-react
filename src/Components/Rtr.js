import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Page from "./Page";
import { Route,Routes} from "react-router-dom";



function Ruser() {
    return (
    <div>
    
    <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="*" element={<Page/>} ></Route>
    </Routes> 
    
      <Nav />
      </div>
    );
}

export default Ruser;
