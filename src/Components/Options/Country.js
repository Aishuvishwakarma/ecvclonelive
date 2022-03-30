import React from 'react'

import Dilogcss from '../DiologBx/Dilog.Module.css' 
function Countries(props) {
    return (
        <>
            
            <option style={{color:'#FB276A',backgroundColor:'#f2f2f2'}}  className={Dilogcss.DilogInput}  value={props.Country.isoCode}> { props.Country.name}</option> 

        </>
    )
}

export default Countries
