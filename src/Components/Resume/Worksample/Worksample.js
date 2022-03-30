import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from '../../../Utillity/axios'
import { loadUser ,successSignin,loadworksample} from "../../../Store/Actions/AuthActions";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
function Worksample(props) {
    useEffect(() => {
        loadUser();
        loadworksample();
          return null
    }, [props])
    const deleteHandler = (id)=>{
        axios.delete(`/userinfo/worksample/deleteSample/${id}`)
        .then(data => {
            console.log(data.data)
            props.successSignin(data.data)
            props.loadworksample();       
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='card bg-light shadow mt-2 d-flex flex-row'>
            <Link 
            style={{color:'blue'}}
            to={{ pathname: `${props.work.SampleLink}` }} target="_blank" 
            >{props.work.SampleLink}</Link>&nbsp;
            <button onClick={()=>deleteHandler(props.work._id)} style={{outline:'none',border:'none',marginBottom:'20px'}}><span class="badge badge-pill badge-danger">Remove</span>
             </button>
        </div>
    )
}
Worksample.propTypes = {
    SigninReducer: PropTypes.object.isRequired,
    ProfileReducer: PropTypes.object.isRequired,

 }

const mapDispatchToProps = ({
    loadworksample : loadworksample,
    loadUser: loadUser,
    successSignin:successSignin,
 });

 const mapStateToProps = (state) => ({
    SigninReducer: { ...state.SigninReducer },
    ProfileReducer: { ...state.ProfileReducer }
 })
export default connect(mapStateToProps, mapDispatchToProps)(Worksample)
