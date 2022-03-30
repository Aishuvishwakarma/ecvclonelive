import React,{ useState, useEffect } from 'react'
import ProfileCss from "../../Profile/profile.module.css";
import { connect } from 'react-redux'
import axios from '../../../Utillity/axios'
import PropTypes from 'prop-types';
import { loadUser, successSignin,loadeducation,DeleteEdu} from "../../../Store/Actions/AuthActions";
function EducationList(props) {
    useEffect( async () => {
     await   props.loadeducation();
          return null
    }, [props.SigninReducer.user])
    let InstituteName =  props.education.Graduation ? props.education.CollegeName : props.education.SchoolName
    let branch = props.education.Stream
    const deleteHandler = (id)=>{
        axios.delete(`/userinfo/edu/deleteEdu/${id}`)
        .then(data => {
            
            props.successSignin(data.data)   
            console.log(data.data)
            props.loadeducation();   
            // props.successSignin(data.data)     
        })
        .catch(err => console.log(err))
    }

    return (
        <>
        {
            props.education.Graduation ? <>
            <h5 className={ProfileCss.Heading_tittle}>College : {props.education.Graduation}&nbsp;{branch}</h5>
            </> : 
            <><h5 className={ProfileCss.Heading_tittle}>School :  {props.education.SeniorSecondary}({props.education.Board})</h5></>
        }
      
       <h5>{InstituteName},{props.education.City},{props.education.State}</h5>
             <h5><p className='text-secondary' >Completion :{props.education.Completion}</p>
             </h5>
             <button onClick={()=>deleteHandler(props.education._id)} style={{outline:'none',border:'none',marginBottom:'20px'}}><span class="badge badge-pill badge-danger">Remove</span>
             </button><br/>
             
        </>
    )
}
EducationList.propTypes = {
    SigninReducer: PropTypes.object.isRequired,
    ProfileReducer: PropTypes.object.isRequired,

 }

const mapStateToProps = (state) => ({
    SigninReducer: { ...state.SigninReducer },
    ProfileReducer: { ...state.ProfileReducer }
 })
const mapDispatchToProps = ({
    loadUser: loadUser,
    loadeducation : loadeducation,
    DeleteEdu : DeleteEdu,
    successSignin:successSignin,
 });
export default connect(mapStateToProps, mapDispatchToProps)(EducationList);
