import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from '../../../Utillity/axios'
import PropTypes from 'prop-types';
import ResumeCss from "../Resume.module.css";
import { loadUser, successSignin,loadexperience } from "../../../Store/Actions/AuthActions";
function WorkExpListpdf(props) {
  useEffect( async () => {
await    props.loadexperience();
      return null
}, [props.SigninReducer.user])

const deleteHandler = (id)=>{
    axios.delete(`/userinfo/experience/deleteExp/${id}`)
    .then(data => {
      props.successSignin(data.data)  
      props.loadexperience(); 
          console.log(data.data)         
    })
    .catch(err => console.log(err))
}
    return (
        <>
         <div class="col">
                            </div>
                            <div class="col">
                                <h6 className={ResumeCss.heading2}>{props.exp.Organization} </h6>
                                {props.exp.City} &nbsp;{props.exp.State}
                            </div>
                            <div class="col">
                                <h6 className={ResumeCss.heading2}>full stack devloper</h6>
                                <p>({props.exp.StartDate} &nbsp;{props.exp.EndDate})</p>
                            </div>
                            <div class="col">
                            </div>
        
           
        </>
    )
}
WorkExpListpdf.propTypes = {
  SigninReducer: PropTypes.object.isRequired,
  ProfileReducer: PropTypes.object.isRequired,

}

const mapStateToProps = (state) => ({
  SigninReducer: { ...state.SigninReducer },
  ProfileReducer: { ...state.ProfileReducer }
})
const mapDispatchToProps = ({
  loadUser: loadUser,
  successSignin:successSignin,
  loadexperience : loadexperience,
});
export default connect(mapStateToProps, mapDispatchToProps)(WorkExpListpdf)
