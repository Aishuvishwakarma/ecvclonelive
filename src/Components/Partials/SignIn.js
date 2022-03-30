import React, { useEffect, useState } from 'react'
import Authcss from "./Auth.module.css";
import RegisterCss from "./Register.module.css";
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { signUser, signinLoadingTrue } from "../../Store/Actions/AuthActions";
import { loadeducation, loadexperience, loadskills, loadsummary, loadworksample, profileLoadingTrue } from "../../Store/Actions/ProfileAction";

import { withRouter } from "react-router";
function SignIn(props) {
    const [state, setstate] = useState({ username: '', password: '', message: '' })
    const [error, seterror] = useState(null)
    useEffect(async () => {
        window.scrollTo(0, 0)
        loadUser();
        return null
    }, [props])
    const loadUser = () => {
        seterror(props.SigninReducer.errors)

    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        const obj = {}
        obj.username = state.username
        obj.password = state.password
        if (obj.username && obj.password) {
            props.signinLoadingTrue();
            props.signUser(obj, props.history);
            props.profileLoadingTrue();
            props.loadeducation();
            props.loadExperience();
            props.loadskills();
            props.loadsummary();
            props.loadWork();
        }
    }
    const onFormChange = (e) => {
        e.persist();
        setstate(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const onSuccess = (response) => {
        console.log(response);
    }
    const onFailure = (response) => {
        console.log(response);
    }
    return (
        <>
             <div id={RegisterCss.register}>

                <div className="row mt-5">
                    <div className={RegisterCss.overlay}></div>
                    <div className="col-md-3 register-left" id={RegisterCss.registerleft}>
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3 className='text-light'>Welcome</h3>
                        <p className='text-light'>You are 30 seconds away from earning your own money!</p>
                        <GoogleLogin
                            clientId="107598727249325563821"
                            buttonText="Login With Google"
                            onSuccess={onSuccess}
                            onFailure={onFailure}

                            isSignedIn={true}
                        />
                        <br />
                    </div>
                    <div className="col-md-9" id={RegisterCss.registerright}>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                               
                                    <h3 className="text-center mt-5">Login as a Employee/Hirer</h3><br />
                                    <div id={RegisterCss.registerform} className="row register-form">
                                    <form className="form-contact contact_form d-flex justify-content-center align-items-center" onSubmit={onSubmitForm}>
                                <div style={{width:'500px'}} className="row">
                                    <div  className="col-12 d-flex mb-2 justify-content-center align-items-center">
                                        <input id={Authcss.input} onChange={onFormChange} name="username" type="text" placeholder="Enter Your username" />
                                    </div>

                                    <div className="col-12  mb-2  d-flex justify-content-center align-items-center">
                                        <input id={Authcss.input} onChange={onFormChange} name='password' type="password" placeholder="Set your password" />
                                    </div>


                                    <div className="col-12 d-flex mb-2 justify-content-center align-items-center">
                                    
                                    <button type="submit" style={{width:'200px',marginTop:'3px'}} id={RegisterCss.btnRegister} >Login</button>
                                    
                                    </div>

                                    <div className="col-12 text-center mt-2 d-flex justify-content-center align-items-center">
                                        <Link className="text-primary" to="/">I forgot my password</Link>
                                    </div>
                                    <div className="col-12 text-center mb-2 text-dark  d-flex justify-content-center align-items-center">
                                        Don't have an account?
                                        <Link className="text-primary" to='/register'> Create one</Link>
                                        <h4>{state.message}</h4>

                                    </div>
                                   

                                </div>

                            </form>

                                    </div>
                            
                            </div>



                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

const mapStateToProps = (state) => ({
    SigninReducer: { ...state.SigninReducer }
})

const mapDispatchToProps = (
    {
        signUser: signUser,
        signinLoadingTrue: signinLoadingTrue,
        profileLoadingTrue: profileLoadingTrue,
        loadeducation: loadeducation,
        loadExperience: loadexperience,
        loadskills: loadskills,
        loadsummary: loadsummary,
        loadWork: loadworksample,
    }

)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
