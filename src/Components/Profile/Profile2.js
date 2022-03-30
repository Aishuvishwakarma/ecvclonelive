import React, { Component } from 'react'
import AbouteYouBx from "../DiologBx/AbouteYouBx";
// import EducationBx from "../DiologBx/EducationBx";
import jwt_decode from 'jwt-decode';
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
import ProfileCss from "./profile.module.css";
import { Link,withRouter } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import PropTypes from 'prop-types';
import EducationList from "../Resume/Education/EducationList";
import AbouteYou from "./AbouteYou";
import WorkExpList from "../Resume/Experience/WorkExpList";
import SkillList from "../Resume/Skills/SkillList";
import Worksample from "../Resume/Worksample/Worksample";
import { UserRefreshClient } from 'google-auth-library';
 class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldavatar: '', profile: '',
            user :null,
            education:null,
            Summary:null,
            userSkill :null,
            userWork:null,
            EXP :null,
            School: {  ...jwt_decode(localStorage.getItem('ecv_token')).School}
    
        }
    
          this.onClickImage = this.onClickImage.bind(this);
      }

      async componentDidMount() {
        window.scrollTo(0, 0)
        if(localStorage.ecv_token){ 
            await this.props.profileLoadingTrue();
            // await props.loadUser(localStorage.ecv_token);
            this.setState({
               user: this.props.SigninReducer.user,
               education: this.props.SigninReducer.user.Education,
               Summary:this.props.SigninReducer.user.Summary,
               userSkill : this.props.SigninReducer.user.Skills,
               userWork: this.props.SigninReducer.user.Work,
               EXP :  this.props.SigninReducer.experience,
            })
    
      }else return this.props.history.goBack();
    }
      componentDidUpdate(prevProps) {
        window.scrollTo(0, 0)
       
        if(localStorage.ecv_token){ 
         axios.defaults.headers.common["auth-token"] = localStorage.ecv_token;
        }
     
      } 
       onClickImage = () => {
        document.querySelector('#fileClick').addEventListener('click', function () {
           document.querySelector('input[type="file"]').click();
        });

        document.querySelector('input[type="file"]').onchange = function (e) {
            this.setState(prevavtar => ({ ...prevavtar, [e.target.name]: e.target.value }));
           document.querySelector('input[type="submit"]').click();
        };
     };
      onChangeImage = (e) => {
        e.preventDefault();
        let oldavatar = this.state.user ? this.state.profile : ''
        const formData = new FormData(e.target);
        formData.append('oldavatar', oldavatar);
        
        for (const pair of formData.entries()) {
           console.log(pair[0], pair[1]);
        }
   
        this.props.uploadImage(formData);
        console.log(formData)

     };
     
    render() {
      console.log(this.state)
        const {user,education,Summary,userSkill,userWork,EXP,} = this.state
        let UsersEducation = user ? user.School.map(e => <EducationList key={e._id} education={e} />) : ''
        let Aboutyourself = user ? user.Summary.map(s => <AbouteYou key={s._id} about={s} />) : ''
        let workExperience = EXP ? EXP.map(e => <WorkExpList key={e._id} exp={e} />) : ''
        let listskill = user ? user.Skills.map(skill => <SkillList key={skill._id} skills={skill} />) : ''
        let listWork = user ? user.Work.map(w => <Worksample key={w._id} work={w} />) : ''
        let prflimgurl = process.env.REACT_APP_BASE_URL || 'http://localhost:3080';
        return (
            <>
                  <div className="slider-area mt-5" > 
          
          <div id={ProfileCss.profileBg}>
             <div id={ProfileCss.profiledesc} className="container">
                <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'end' }} >
                    <div id={ProfileCss.profile} >
                   <img id={ProfileCss.pfrlimg} src={`${prflimgurl}/images/Uploads/${this.state.user ? this.state.user.profile : ''}`} alt="" />
                </div>
                <button
                   style={{border:'none',outline:'none',color:'#000',marginTop:'10px'}}
                      id="fileClick"
                      onClick={this.onClickImage}
                      variant="contained">
                      Change Photo</button>
                   <form id="uploadForm" style={{ display: 'none' }} onSubmit={this.onChangeImage} encType="multipart/fomr-data">
                      <input type="file" name="profile" />
                      <input type="submit" />
                   </form>
                 

                </div>
                <div style={{ width: '350px', marginLeft: '20px' }}>
                   <div id={ProfileCss.section_Prfl} className={ProfileCss.section_tittle}>
                      <p style={{ fontSize: '22px' }}>{this.state.user ? this.state.user.name : ''}-{this.state.user ? this.state.user.LastName : ''} <Link  to='/download'><p className={ProfileCss.text_bold}>download&view Resume</p></Link></p>

                      <p className={ProfileCss.text_bold}>
                         Location&nbsp;{this.state.user && this.state.user.City ? this.state.user.City : ''}&nbsp; {this.state.user && this.state.user.State ? this.state.user.State : ''}&nbsp; {this.state.user && this.state.user.Country ? this.state.user.Country : ''}</p>
                      <div style={{ display: 'flex' }}>
                         <p className={ProfileCss.text_bold}>{this.state.user ? this.state.user.email : ''}</p>
                         <span style={{ margin: '0 10px' }}>|</span> <p className={ProfileCss.text_bold}>{this.state.user ? this.state.user.MobileNo : ''}</p>
                      </div>

                   </div>

                  
                </div>

             </div>
          </div>

          <div id={ProfileCss.profileBg}>
             <div className="container pb-5 row d-flex justify-content-center align-itmes-center">
                <div className="col-6  d-flex flex-column align-itmes-center">
                   <div>
                      <h2 className={ProfileCss.section_tittle}>About Yourself&nbsp;<AbouteYouBx about={Aboutyourself} /> </h2>
                      <p style={{ marginTop: '5px' }}>{Aboutyourself}</p>
                   
                   
                   </div>
                   <div style={{ marginTop: '20px' }}>
                      <h2 className={ProfileCss.section_tittle}>Personal Detail &nbsp; <PersonalDetailBx user={user ? user : ''} /></h2><br />
                      <b className='text-dark'>{user ? user.name : ''}-{user ? user.LastName : ''}</b>

                      <b style={{ fontSize: '15px', display: 'flex', alignItems: 'center' }} className='text-dark mt-2'>
                         <i style={{ fontSize: '12px', marginRight: '10px', color: '#DA2461' }} class="fas fa-map-marker-alt"></i>
                         Location&nbsp;{user && user.City ? user.City : ''}&nbsp; {user && user.State ? user.State : ''}&nbsp; {user && user.Country ? user.Country : ''}</b>
                      <b style={{ fontSize: '15px', display: 'flex', alignItems: 'center' }} className='text-dark mt-2'>
                         <i style={{ fontSize: '12px', marginRight: '10px', color: '#DA2461' }} class="fas fa-envelope"></i>{user ? user.email : ''}</b>
                      <b style={{ fontSize: '15px', display: 'flex', alignItems: 'center' }} className='text-dark mt-2'>
                         <i style={{ fontSize: '12px', marginRight: '10px', color: '#DA2461' }} class="fas fa-mobile-alt"></i>{user ? user.MobileNo : ''}</b>
                   </div>
                   <div style={{ marginTop: '20px' }}>
                      <h2 className={ProfileCss.section_tittle}>Education</h2><br />
                      {UsersEducation}
                      <AddSchoolBx /><br />
                      <AddClgBx /><br />
                      <AdddiplomaBx /><br />
                      <AddPHDBx /><br />


                   </div>


                </div>
                <div style={{ paddingLeft: '60px' }} className="col-6 d-flex flex-column align-itmes-end">

                   <div>
                      <h2 className={ProfileCss.section_tittle}>JOB/Internship-Experience &nbsp;<ExperienceBx /></h2><br />
                      {workExperience}
                      <div style={{ marginTop: '20px' }}>
                         <h2 className={ProfileCss.section_tittle}>Skills &nbsp;<SkillBx /></h2>
                         {listskill}

                      </div>
                      <div style={{ marginTop: '20px' }}>
                         <h2 className={ProfileCss.section_tittle}>Add your work sample &nbsp;<AddLinkBx user={this.state.user ? this.state.user : ''} /></h2><br />
                         {listWork}
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

Profile.propTypes = {
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
   //  ProfileReducer: { ...state.ProfileReducer }
 })
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));