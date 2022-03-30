import React from 'react'
import ProfileCss from "../Profile/profile.module.css";
import EmployPersonalDetailBx from "../DiologBx/EmployPersonalDetailBx";
import EmployOrganizationBx from "../DiologBx/EmployOrganizationBx";
function Employer() {
    return (
        <div className="slider-area   bg-light" >
          
          <div style={{width:'100%',minHeight:'50vh',marginTop:'150px'}} className='container'>
             <div className="container pb-5 row d-flex justify-content-center align-itmes-center ">
                <div className="col-6  d-flex flex-column align-itmes-center">
                  
                   <div style={{ marginTop: '20px' }}>
                      <h2 className={ProfileCss.section_tittle}>Personal Detail &nbsp;<EmployPersonalDetailBx /></h2><br />
                      
                   </div>
                  
                </div>
                <div style={{ paddingLeft: '60px' }} className="col-6 d-flex flex-column align-itmes-end">

                   <div>
                      <h2 className={ProfileCss.section_tittle}>Organization details &nbsp;<EmployOrganizationBx/></h2><br />
                      
            
                   </div>
                </div>
             </div>
          </div> 
        </div>
    )
}

export default Employer
