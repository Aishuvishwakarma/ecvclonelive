import React, { useState, useEffect } from 'react'
import axios from '../../Utillity/axios'
import { connect } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import Dilogcss from './Dilog.Module.css' 
import { loadUser ,successSignin,loadworksample} from "../../Store/Actions/AuthActions";
import { withRouter, Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
function AddLinkBx(props) {
    const [state, setstate] = useState({ SampleLink: '',username:'' })
    useEffect( () => { 
        setstate({
            username : props.user.username
        })
        return null
     }, [props.user])
    const onSubmitForm = (e) => {
        e.preventDefault();
        const obj = {}
        obj.SampleLink = state.SampleLink
        obj.username = state.username
        console.log(obj)
        if (obj.SampleLink && obj.username) {
            axios.post('/userinfo/worksample/AddWorkSample', obj)
                .then(data => {
                    if(props.history.location.pathname === '/EditResume/personalinfo'){
                        if(localStorage.active_prfl){
                            localStorage.removeItem('active_prfl')
                            localStorage.setItem('active_prfl',6)
                        }else{
                            localStorage.setItem('active_prfl',6)
                        }
                       
                    }
                    props.successSignin(data.data)
                    props.loadworksample();   
                    RedirectHandler();
                })
                .catch(err => console.log(err))
        }else  return   notify();
    }
    const RedirectHandler = ()=>{
        document.querySelector(".close").click();
    }
    const onFormChange = (e) => {
        e.persist();
        setstate(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const notify = () => {
        if(!state.SampleLink){
            toast.error("Please Give Your sample Links",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
       
        }

    return (
        <>
        { props.history.location.pathname === '/EditResume/personalinfo' ?<><br/>
             <button type="button" style={{ border: 'none',marginTop:'20px' }} data-toggle="modal" data-target="#AddLink">
                <b style={{ fontSize: '15px', color: '#DA2461', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <i style={{ fontSize: '12px', marginRight: '10px' }} class='fas fa-plus-circle'></i>Add Your Work sample Links
                </b>
                <ToastContainer  />
            </button>
             </> :<>
             <button type="button" style={{ border: 'none' }} data-toggle="modal" data-target="#AddLink">
                <i style={{ color: '#DA2461', fontSize: '20px' }} class="fas fa-pen"></i>
                <ToastContainer />
            </button>

             </>}

          

            <div className="modal fade" id="AddLink" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Add Work Sample</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={onSubmitForm} >
                        <div className="modal-body">
                            <section className="pb-5">
                               
                                    <div className="container">
                                        <p>Add Your Work Sample Links</p>
                                        <div className="row">
                                            <div className="col-12 col-md-12">
                                                <input style={{height:'100px'}} className={Dilogcss.DilogInput}  type="url" name='SampleLink' onChange={onFormChange} />
                                            </div>
                                        </div>
                                    </div>
                              
                            </section>

                        </div>
                      
                        <div className="modal-footer">
                            <button type="submit" className={Dilogcss.btn}>Save changes</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
AddLinkBx.propTypes = {
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddLinkBx));
