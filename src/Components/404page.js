import React from 'react'
import {Link,Route,Routes} from 'react-router-dom'

function Page() {
  return (
    <div>

    <Link to="/home">Home page</Link> <br></br>
   
    <Link to="/about">About page</Link>

    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="*" element={<PageNotFound/>} ></Route>
      </Routes>
     
    </div>
  )
}
function Home(){
    return(
        <div>
        <h1>Home page</h1>
  
        </div>
    );
}
function About(){
    return(
        <div>
        <h1>About page</h1>
   
        </div>
    );
}
function PageNotFound(){
    return(
        <div>
        <h1>page not found</h1>
   
        </div>
    );
}

export default Page;