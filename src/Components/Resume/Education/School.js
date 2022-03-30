import React from 'react'
import ResumeCss from "../Resume.module.css";
function School(props) {
    
    return (
        <>
            <div class="col">
                <h6 className={ResumeCss.heading2}>School({props.scl.SeniorSecondary}-{props.scl.Board}) </h6>
                {props.scl.SchoolName},{props.scl.City}, {props.scl.tate}
            </div>
            
        </>
    )
}

export default School
