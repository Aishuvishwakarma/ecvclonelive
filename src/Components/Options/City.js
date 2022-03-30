import React from 'react'
import Dilogcss from '../DiologBx/Dilog.Module.css' 
function City(props) {
    return (
        <>
             <option style={{color:'#FB276A',backgroundColor:'#f2f2f2'}}  className={Dilogcss.DilogInput}  value={props.allcity.isoCode}> {props.allcity.name}</option> 
        </>
    )
}

export default City
