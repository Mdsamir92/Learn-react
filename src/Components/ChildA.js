import React, { createContext } from 'react'
import ChildB from './ChildB';

const Biodata = createContext();


function ChildA() {

  return (
    <div> 
    <Biodata.Provider  value={"samir"}>
    <ChildB/>
    </Biodata.Provider>

    </div>
  )
}

export default ChildA;
export {Biodata};