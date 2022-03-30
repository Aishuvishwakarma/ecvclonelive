import React,{useState,useEffect} from 'react'
import Authcss from "./Auth.module.css";
import { withRouter } from "react-router";
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux'
import { Link ,NavLink} from "react-router-dom";
import {registerUser,registerLoadingTrue } from "../../Store/Actions/RegisterAction";
import PropTypes from 'prop-types';
import RegisterCss from "./Register.module.css";
function SignUp(props) {
    
const [state, setstate] = useState({name:'',username:'',LastName:'',email:'',MobileNo:'',password:'',employe:true,jobseeker:false})
const [error, seterror] = useState(null)
useEffect(() => {
    window.scrollTo(0,0)
    seterror(props.register.errors)
 }, [null])
console.log(error)
const onSubmitForm =(e)=>{
e.preventDefault();
const obj ={}
obj.name = state.name
obj.username = state.username 
obj.LastName = state.LastName
obj.email = state.email
obj.MobileNo = state.MobileNo
obj.password = state.password
if(obj.username && obj.name && obj.LastName && obj.password && obj.email && obj.MobileNo){
    props.registerLoadingTrue();
    props.registerUser(obj);
    props.history.push('/login')
  }
} 
const onFormChange =(e)=>{
    e.persist();
    setstate(prevState=>({...prevState,[e.target.name]: e.target.value}))
}
const onSuccess = (response) => {
    console.log(response);
  }
  const onFailure = (response) => {
    console.log(response);
  }
    return (
        <> 
    <div  id={RegisterCss.register}>
   
                <div className="row mt-5">
                <div className={RegisterCss.overlay}></div>
                    <div className="col-md-3 register-left" id={RegisterCss.registerleft}>
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3 className='text-light'>Welcome</h3>
                        <p className='text-light'>You are 30 seconds away from earning your own money!</p>
                        <GoogleLogin
                                            clientId="107598727249325563821"
                                            buttonText="Login With Google"
                                            onSuccess={onSuccess}
                                            onFailure={onFailure}
                                            
                                            isSignedIn={true}
                                        />
                      <br/>
                    </div>
                    <div className="col-md-9" id={RegisterCss.registerright}> 
                        <div  style={{backgroundColor:'#fff',float:'right',marginTop:'20px',width:'200px'}} className="d-flex justify-content-between" id="myTab" role="tablist">
                          
                               {
                                   state.employe ? (
                                    <NavLink to="#home" >
                                    <button onClick={()=>setstate({employe:true,jobseeker:false})} className={RegisterCss.activebtn}>Employee</button>
                                </NavLink>
                                   ) : (
                                    <NavLink id={RegisterCss.navlink} activeStyle={{color:'blue'}} to="#home" >
                                    <button onClick={()=>setstate({employe:true,jobseeker:false})} className={RegisterCss.nonbtn}>Employee</button>
                                </NavLink>
                                   )
                               }
                            
                            {
                                   state.jobseeker ? (
                                    <NavLink activeStyle={{color:'blue'}} to="#profile" >
                                    <button onClick={()=>setstate({employe:false,jobseeker:true})} className={RegisterCss.activebtn}>Jobseeker</button>
                                </NavLink>
                                   ) : (
                                    <NavLink id={RegisterCss.navlink} activeStyle={{color:'blue'}} to="#profile" >
                                    <button onClick={()=>setstate({employe:false,jobseeker:true})} className={RegisterCss.nonbtn}>Jobseeker</button>
                                </NavLink>
                                   )
                               }
                                
                            
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            {
                               state.employe ? (
                                <form  onSubmit={onSubmitForm}>
                                <h3  className="text-center mt-5">Apply as a Employer</h3><br/>
                                <div id={RegisterCss.registerform} className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <input id={Authcss.input} onChange={onFormChange} className="form-control"   name="username" type="text" placeholder="Enter Your office/company name" />
                                        </div>
                                        <div className="form-group">
                                        <input id={Authcss.input}  onChange={onFormChange} className="form-control" name="name"  type="text" placeholder="Enter your name" />
                                        </div>
                                        <div className="form-group">
                                        <input id={Authcss.input}  onChange={onFormChange} className="form-control" name="LastName"  type="text" placeholder="Enter your last name" />
                                        </div>
                                        {/* <div className="form-group">
                                        <select id={Authcss.input} className="form-control">
                                                <option className="hidden"  selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div> */}
                                        
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <input id={Authcss.input}  onChange={onFormChange} name='email' type="email" placeholder="Enter your Email" />
                                        </div>
                                       
                                        <div className="form-group">
                                        <input  id={Authcss.input}  onChange={onFormChange} name="MobileNo"  type="number" placeholder="Enter your Number" />

                                        </div>
                                        <div className="form-group">
                                        <input id={Authcss.input}  onChange={onFormChange} name="password" type="password" placeholder="enter password" />
                                        </div>
                                        <button type="submit" id={RegisterCss.btnRegister} >Register</button>
                                    </div>
                                </div>
                                </form> 
                               ) : (
<form  onSubmit={onSubmitForm}>
                                <h3   className="text-center mt-5">Apply as a Jobseeker</h3><br/>
                                <div id={RegisterCss.registerform} className="row register-form">
                               
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <input id={Authcss.input} onChange={onFormChange} className="form-control"   name="username" type="text" placeholder="Enter Your username" />
                                        </div>
                                        <div className="form-group">
                                        <input id={Authcss.input}  onChange={onFormChange} className="form-control" name="name"  type="text" placeholder="Enter your name" />
                                        </div>
                                        <div className="form-group">
                                        <input id={Authcss.input}  onChange={onFormChange} className="form-control" name="LastName"  type="text" placeholder="Enter your last name" />
                                        </div>
                                        {/* <div className="form-group">
                                        <select id={Authcss.input} className="form-control">
                                                <option className="hidden"  selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div> */}
                                        <div className="form-group">
                                    
                                           
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <input id={Authcss.input}  onChange={onFormChange} name='email' type="email" placeholder="Enter your Email" />
                                        </div>
                                       
                                        <div className="form-group">
                                        <input  id={Authcss.input}  onChange={onFormChange} name="MobileNo"  type="number" placeholder="Enter your Number" />

                                        </div>
                                        <div className="form-group">
                                        <input id={Authcss.input}  onChange={onFormChange} name="password" type="password" placeholder="enter password" />
                                        </div>
                                        <button type="submit" id={RegisterCss.btnRegister} >Register</button>
                                    </div>
                                </div>
                                </form>
                               )
                           }
                                
                            </div>
                            
                            <div className="tab-pane fade show " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                               
                             
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>	
           
        </>
    )
}

SignUp.propTypes = {
    register: PropTypes.object,
    registerUser: PropTypes.func.isRequired,
    registerLoadingTrue: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({
        register: {...state.register}
  });
  
  const mapDispatchToProps = ({
    registerUser: registerUser,
    registerLoadingTrue: registerLoadingTrue
  });
  
export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
