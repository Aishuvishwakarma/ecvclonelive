import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from '../../../Utillity/axios'
import PropTypes from 'prop-types';
import { loadUser, successSignin,loadexperience } from "../../../Store/Actions/AuthActions";
function WorkExpList(props) {
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
          <div className='shadow mt-2 p-2'>
          <b className='text-dark' style={{display:'flex',justifyContent:'space-between'}}>{props.exp.Organization},{props.exp.City} &nbsp;{props.exp.State} <button onClick={()=>deleteHandler(props.exp._id)} style={{outline:'none',border:'none',marginBottom:'20px'}}><span class="badge badge-pill badge-danger">Remove</span>
             </button></b>
           
           <h5><p className='text-secondary' >{props.exp.StartDate} &nbsp;{props.exp.EndDate}</p></h5>
          
          </div>
           
        </>
    )
}
WorkExpList.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(WorkExpList)
