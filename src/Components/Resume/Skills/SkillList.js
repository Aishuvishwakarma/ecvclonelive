import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from '../../../Utillity/axios'
import { loadUser,successSignin,loadskills } from "../../../Store/Actions/AuthActions";
function SkillList(props) {
    useEffect(() => {
        loadUser();
        loadskills();
          return null
    }, [props])
    const deleteHandler = (id)=>{
        axios.delete(`/userinfo/Skill/deleteSkill/${id}`)
        .then(data => {
              props.successSignin(data.data)
              props.loadskills();      
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <div className='mt-2'>
            <b className='text-dark'>{props.skills.SkillTitle}</b>&nbsp;
            <button onClick={()=>deleteHandler(props.skills._id)} style={{outline:'none',border:'none',marginBottom:'20px'}}><span class="badge badge-pill badge-danger">Remove</span>
             </button>&nbsp;,
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
export default connect(null, mapDispatchToProps)(SkillList)
