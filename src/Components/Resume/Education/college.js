import React from 'react'
import ResumeCss from "../Resume.module.css";
function college(props) {
    console.log(props)
    return (
        <>
            <div class="col mt-2">
                <h6 className={ResumeCss.heading2}>College({props.clg.Graduation}) </h6>
                {props.clg.Stream},{props.clg.CollegeName},{props.clg.City}, {props.clg.State}
                
            </div> 
        </>
    )
}

export default college
