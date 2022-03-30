import React, { Component } from 'react'
import Stepper from 'react-stepper-horizontal';
import AbouteYouBx from "../DiologBx/AbouteYouBx";
// import EducationBx from "../DiologBx/EducationBx";
import ExperienceBx from "../DiologBx/ExperienceBx";
import SkillBx from "../DiologBx/SkillBx";
import AddLinkBx from "../DiologBx/AddLinkBx";
import AddSchoolBx from "../DiologBx/AddSchoolBx";
import AddClgBx from "../DiologBx/AddClgBx";
import AdddiplomaBx from "../DiologBx/AdddiplomaBx";
import AddPHDBx from "../DiologBx/AddPHDBx";
import PersonalDetailBx from "../DiologBx/PersonalDetailBx";
import { connect } from 'react-redux'
import axios from "../../Utillity/axios";
import { loadUser,uploadImage } from "../../Store/Actions/AuthActions";
import { loadeducation, loadexperience, loadskills, loadsummary, loadworksample, profileLoadingTrue } from "../../Store/Actions/ProfileAction";
import ProfileCss from "../Profile/profile.module.css";
import { Link,withRouter } from "react-router-dom";
// import ReactToPdf from "react-to-pdf";
import PropTypes from 'prop-types';
import EducationList from "../Resume/Education/EducationList";
import WorkExpList from "../Resume/Experience/WorkExpList";
import SkillList from "../Resume/Skills/SkillList";
import Worksample from "../Resume/Worksample/Worksample";

import signinReducer from '../../Store/Reducers/signinReducer';
import jwt_decode from 'jwt-decode';
 class ResumeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active:0,
            user:null
        }
    
         
      }

      async componentDidMount() {
        window.scrollTo(0, 0)
        if(localStorage.ecv_token && localStorage.active_prfl ){ 
           let user = {...jwt_decode(localStorage.ecv_token).user}
            await   this.setState({
              user:user,
              active: JSON.parse(localStorage.active_prfl)
            })
    
      }else return this.props.history.goBack();
    }
  
    render() {
    console.log(this.state)
        return (
            <>
          <div className="slider-area  bg-light" > 
          
          <div style={{width:'100%',height:'200px',marginTop:'130px'}}>
          {/* <Stepper 
          steps={ [{title: 'Step One'},
           {title: 'Step Two'}, {title: 'Step Three'}, 
           {title: 'Step Four'}, {title: 'Step Three'},
            {title: 'Step Four'}] }
            completeColor='#DA2461'
            activeStep={this.state.active} 
            completeColor='#DA2461'
            /> */}
          </div>

          <div style={{width:'100%',minHeight:'30vh'}} className='container'>
             <div className="container pb-5 row d-flex justify-content-center align-itmes-center ">
                <div className="col-6  d-flex flex-column align-itmes-center">
                   <div>
                      <h2 className={ProfileCss.section_tittle}>About Yourself&nbsp;<AbouteYouBx /> </h2>
                    
                   </div>
                   <div style={{ marginTop: '20px' }}>
                      <h2 className={ProfileCss.section_tittle}>Personal Detail &nbsp; <PersonalDetailBx user={this.state.user ? this.state.user : ''} /></h2><br />
                      
                   </div>
                   <div style={{ marginTop: '20px' }}>
                      <h2 className={ProfileCss.section_tittle}>Education</h2><br />
                      <AddSchoolBx /><br />
                      <AddClgBx /><br />
                      <AdddiplomaBx /><br />
                      <AddPHDBx /><br />
                   </div>


                </div>
                <div style={{ paddingLeft: '60px' }} className="col-6 d-flex flex-column align-itmes-end">

                   <div>
                      <h2 className={ProfileCss.section_tittle}>JOB/Internship-Experience &nbsp;<ExperienceBx /></h2><br />
                      <div style={{ marginTop: '20px' }}>
                         <h2 className={ProfileCss.section_tittle}>Skills &nbsp;<SkillBx /></h2>
                      </div>
                      <div style={{ marginTop: '20px' }}>
                         <h2 className={ProfileCss.section_tittle}>Add your work sample &nbsp;<AddLinkBx user={this.state.user ? this.state.user : ''} /></h2><br />
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
       </div> 
            </>
        )
    }
}

ResumeHeader.propTypes = {
    SigninReducer: PropTypes.object.isRequired,
    ProfileReducer: PropTypes.object.isRequired,

 }

 const mapDispatchToProps = ({
    loadUser: loadUser,
    loadeducation : loadeducation,
    loadExperience : loadexperience,
    loadskills : loadskills,
    loadsummary : loadsummary,
    loadWork : loadworksample,
    profileLoadingTrue: profileLoadingTrue,
    uploadImage: uploadImage
 });

 const mapStateToProps = (state) => ({
    SigninReducer: { ...state.SigninReducer },
    ProfileReducer: { ...state.ProfileReducer }
 })
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResumeHeader));