import React, { useState, useEffect } from 'react'
import axios from '../../Utillity/axios'
import Dilogcss from './Dilog.Module.css'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { ToastContainer, toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';
import { successSignin,loadUser ,activehandler} from "../../Store/Actions/AuthActions";
// import { Strategy } from 'passport-local';
import {  updateSummary,profileLoadingTrue, loadsummary} from "../../Store/Actions/ProfileAction";
function AbouteYouBx(props) {
    const [state, setstate] = useState({ AboutYou: '',id:'' })
    const [Summary, setSummary] = useState(null);
   
    useEffect(async () => {
       const {about} = await  props && props.about[0] ? props.about[0].props: 'loading....'
      await  setstate({ AboutYou: about ? about.AboutYou : state.AboutYou,id: about ? about._id : state.id, active: 1}) 
        return null
     }, [props])
    const onSubmitForm = (e) => { 
        e.preventDefault();
        const obj = {}
        obj.AboutYou = state.AboutYou
        obj.id = state.id
        obj.username = props.user
        notify();
        if(!props.SigninReducer.user.Summary.length >0){
            if (obj.AboutYou) {
                axios.post('/userinfo/summary/AddSummary', obj) 
                    .then(data => {

                        if(props.history.location.pathname === '/EditResume/personalinfo'){
                            if(localStorage.active_prfl){
                                localStorage.removeItem('active_prfl')
                                localStorage.setItem('active_prfl',1)
                            }else{
                                localStorage.setItem('active_prfl',1)
                            }
                           
                        }
                        props.successSignin(data.data)  
                        // localStorage.removeItem('ecv_token')
                     
                        setstate(prevstate => ({...prevstate,AboutYou: '',id:''}))
                        props.loadUser(localStorage.ecv_token);
                        props.loadsummary();
                    })
                    .catch(err => console.log(err))

            } 
        }else{
            if (obj.AboutYou && obj.id) {
              
                axios.post('/userinfo/summary/updateSummary', obj)
                    .then(data => {
                    props.updateSummary(data.data.s)
                       props.successSignin(data.data)
                       let active = state.active+1
                        props.activehandler(active); 
                        RedirectHandler();
                        
                    })
                    .catch(err => console.log(err))
            }
        }
        RedirectHandler(); 
        
    }
const RedirectHandler = ()=>{
    document.querySelector(".close").click();
}
    const onFormChange = (e) => {
        // educationEditlist
        e.persist();
        setstate(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const notify = () => {
        if(!state.AboutYou){
            toast.error("Summary Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
    };
    console.log(props)
    return (
        <>
             { props.history.location.pathname === '/EditResume/personalinfo' ?<><br/>
             <button type="button" style={{ border: 'none',marginTop:'20px' }} data-toggle="modal" data-target="#exampleModalLong">
                <b style={{ fontSize: '15px', color: '#DA2461', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <i style={{ fontSize: '12px', marginRight: '10px' }} class='fas fa-plus-circle'></i>Add Suumary /About Yourself
                </b>
                <ToastContainer  />
            </button>
             </> :<>
             <button type="button" style={{ border: 'none' }} data-toggle="modal" data-target="#exampleModalLong">
                <i style={{ color: '#DA2461', fontSize: '20px' }} class="fas fa-pen"></i>
            </button>
             </>}
            
            <ToastContainer />
            <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Add/Edit About yourself</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        
                        <form onSubmit={onSubmitForm} > 
                        <div className="modal-body">
                            <section className="pb-5">
                               
                                    <div className="container">
                                        <p>Summary</p>
                                        <div className="row">
                                            <div className="col-12 col-md-12">
                                                <textarea value={state.AboutYou}
                                                style={{minHeight:'100px'}}
                                                className={Dilogcss.DilogInput}
                                                 name='AboutYou' onChange={onFormChange} />
                                            </div>
                                        </div>
                                    </div>
                              
                            </section>

                        </div>
                      
                        <div className="modal-footer">
                            <button id='btnclick'  type="submit" className={Dilogcss.btn}>Save changes</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

AbouteYouBx.propTypes = {
    SigninReducer: PropTypes.object.isRequired,
    ProfileReducer: PropTypes.object.isRequired,

 }

const mapStateToProps = (state) => ({
    SigninReducer: { ...state.SigninReducer },
    ProfileReducer: { ...state.ProfileReducer }
})

const mapDispatchToProps = ({
    successSignin:successSignin,
    loadUser: loadUser,
    profileLoadingTrue : profileLoadingTrue,
    updateSummary : updateSummary,
    loadsummary : loadsummary,
    activehandler:activehandler,
 });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AbouteYouBx));
