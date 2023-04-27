import React from "react";
import B from './B';
import {useState} from 'react';
import contextData from './Contextt';
function A(){
    const[state, setState]=useState("Geeks");
    const {setDa}=useContext(contextData);
    return(<div>
        <h>A Component</h>
        <p style={{color:"blue"}}>Data Received from D : {state}: {setDa}</p>

        <hr/>
        <contextData.Provider value={{setState}}>
          <B/>
        </contextData.Provider>
        
    </div>)
}

export default A;
 