import React, { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import LogoImg from '../../assets/img/logo/logo.png'
import { connect } from 'react-redux'
import { loadUser, logoutUser } from "../../Store/Actions/AuthActions";
import { profileLoadingfalse} from "../../Store/Actions/ProfileAction";
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
function Header(props) {
    // const [state, setstate] = useState(null)
    // useEffect(async () => {
    //     loadUser();
    //     return null
    // }, [props])
    // const loadUser = () => {
    //     setstate(props.SigninReducer.errors)

    // }

    const loggingout = () => {
        props.logoutUser();
        props.profileLoadingfalse();
        props.history.push('/');
    };
    return (
        <>

            <header  className="fixed-top bg-light" id='header'>
                <div className="header-area header-transparrent shadow">
                    <div className="headder-top header-sticky">
                        <div style={{padding:'10px 10px'}} className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-3">

                                    <div className="logo">
                                        <Link to="/"><img src={LogoImg} style={{width:'200px'}} alt="" />Logo</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="menu-wrapper">

                                        <div style={{ width: '100%' }} className="main-menu">
                                            <nav style={{ width: '90%' }} className="d-none d-lg-block">
                                                <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }} id="navigation">
                                               
                                                            <>
                                                                <li><NavLink to="/">Home</NavLink></li>
                                                                <li><NavLink to="/About">About</NavLink></li>
                                                                <li><NavLink to="/FindJob">Find a Jobs </NavLink></li>

                                                                <li><NavLink to="/blogdetail">Blog</NavLink>
                                                                </li>
                                                               
                                                            </>
                                                            <li><NavLink to="/Contact">Contact</NavLink></li>
                                                            {/* <>
                                                                <li><NavLink to="/page">profile</NavLink>
                                                                    <ul className="submenu">
                                                                        <li><NavLink to="/blog">edit profile</NavLink></li>
                                                                        <li><NavLink to="/blogdetail">Create Your Resume</NavLink></li>
                                                                    </ul>
                                                                </li>
                                                            </> */}
                                                   

                                                </ul>
                                            </nav>
                                        </div>

                                       
                                    </div>
                                    
                                </div>
                                <div className="col-lg-3 col-md-3 d-flex justify-content-between align-items-center">
                                            {
                                                !props.SigninReducer.isAuthenticated ? (
                                                    <>
                                                        <div className="btn_sign_right">
                                                            <Link to="/register" className="btn">SignUp</Link>
                                                        </div>
                                                        <div className="btn_sign_right btn_right">
                                                            <Link to="/login" className="btn">Sign</Link>
                                                        </div>
                                                    </>
                                                ) : <>
                                                    <div className="btn_sign_right">
                                                        <Link to="/resume" className="btn">Resume</Link>
                                                    </div>
                                                    <div style={{ width:'100px' }} className="btn_sign_right btn_right">
                                                        <button onClick={loggingout} className="btn" style={{ border: 'none', outline: 'none'}} >Logout</button>
                                                    </div>
                                                </>
                                            }

                                        </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>

    )
}


Header.propTypes = {
    SigninReducer: PropTypes.object.isRequired,
    ProfileReducer: PropTypes.object.isRequired,
}

const mapDispatchToProps = ({
    loadUser: loadUser,
    logoutUser: logoutUser,
    profileLoadingfalse : profileLoadingfalse
});

const mapStateToProps = (state) => ({
    SigninReducer: { ...state.SigninReducer },
    ProfileReducer: { ...state.ProfileReducer }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
