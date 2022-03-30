import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ResumeCss from "../Resume.module.css";
import axios from '../../../Utillity/axios'
import { loadUser,successSignin,loadskills } from "../../../Store/Actions/AuthActions";
function SkillListPdf(props) {
    useEffect(() => {
        loadUser();
        loadskills();
          return null
    }, [props])
  
    return (
        <>
              <div class="col-5">
              <h6 className={ResumeCss.heading3}>{props.skills.SkillTitle}</h6>
                            <div className={ResumeCss.SkillBx}></div>
                                {/* <p  style={{ textAlign: 'justify', fontSize: '11px', textTransform: 'uppercase', textJustify: 'auto' }}>reate user-friendly interfaces that enable
                                 users to understand how to use complex technical products</p> */}
              </div>
          
           
        </>
    )
}
const mapDispatchToProps = ({
    loadskills : loadskills,
    loadUser: loadUser,
    successSignin:successSignin,
  });
  const mapStateToProps = (state) => ({
    SigninReducer: { ...state.SigninReducer },
    ProfileReducer: { ...state.ProfileReducer }
 })
export default connect(null, mapDispatchToProps)(SkillListPdf)
