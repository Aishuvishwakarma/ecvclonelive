import React from 'react'
import Dilogcss from '../DiologBx/Dilog.Module.css' 
function AllStates(props) {
    return (
        <>
           <option style={{color:'#FB276A',backgroundColor:'#f2f2f2'}} className={Dilogcss.DilogInput}  value={props.allstate.isoCode}> {props.allstate.name}</option>  
        </>
    )
}

export default AllStates
