import React, { useState, useEffect }  from 'react'
// import ReactToPdf from "react-to-pdf";
import SkillBx from '../DiologBx/SkillBx';
import ResumeCss from "./Resume.module.css";
import ProfileCss from "../Profile/profile.module.css";
import SkillList from "../Resume/Skills/SkillListPdf";
import WorkExpList from "../Resume/Experience/WorkExpListpdf";
// import { loadUser } from "../../Store/Actions/AuthActions";
// import { loadeducation, loadexperience, loadskills, loadsummary, loadworksample, profileLoadingTrue } from "../../Store/Actions/ProfileAction";
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import AbouteYou from "../Profile/AbouteYou";
import School from "../Resume/Education/School";
import College from "../Resume/Education/college";
import Doc from './DocService';
import PdfContainer from './PdfContainer';
const ref = React.createRef();
function Downloadresume(props) {
    const [state, setstate] = useState({
        education: null,
        Summary:null,
        userSkill : null,
        userWork: null,
        EXP : null,
        School:null,
     });
    
    const [user, setuser] = useState(null);
    const [education, seteducation] = useState({school:[],college:[],certificate:[]});
    const [summary, setesummary] = useState({s:[]});
    useEffect(async() => {
       window.scrollTo(0, 0)
       if(localStorage.ecv_token){ 
        await   setstate({
           user: props.SigninReducer.user,
           education: props.ProfileReducer.education ? props.ProfileReducer.education : props.SigninReducer.user.Education,
           Summary:props.SigninReducer.user.Summary,
           userSkill : props.SigninReducer.user.Skills,
           userWork: props.SigninReducer.user.Work,
           EXP :   props.SigninReducer.user.Experience,
           School: props.SigninReducer.School
        })
    }
       if(props.user.SigninReducer.user){
        if(props.user.SigninReducer.user.Education){

    //    let scl =  props.user.SigninReducer.user.Education.filter(s => s.SeniorSecondary)
    //    let clg =  props.user.SigninReducer.user.Education.filter(c => c.Graduation)
     setuser(prevState=>({...prevState,...props.user.SigninReducer.user}))
    // seteducation(prevState=>({...prevState,school:scl,college:clg}))
    // setesummary(prevState=>({...prevState,s:props.SigninReducer.user.Summary}))
        }
    }else return props.history.goBack();
       return null
    }, [props.SigninReducer.user])
// console.log(props.SigninReducer.user.Summary)
let schoollist =  props.SigninReducer.user ?  props.SigninReducer.user.School.map(s => <School key={s._id} scl={s} />) : ''
// let Collegelist = education.college.length > 0 ? education.college.map(c => <College key={c._id} clg={c} />) : ''

   let listskill = props.SigninReducer.user ? props.SigninReducer.user.Skills.map(skill => <SkillList key={skill._id} skills={skill} />) : ''
   let workExperience = props.SigninReducer.user ? props.SigninReducer.user.Experience.map(e => <WorkExpList key={e._id} exp={e} />) : ''
   let Aboutyourself = props.SigninReducer.user ? props.SigninReducer.user.Summary.map(s => <AbouteYou key={s._id} about={s} />) : ''
    let prflimgurl = process.env.REACT_APP_BASE_URL || 'http://localhost:3080';
    return (
        <div style={{ marginTop: '150px' }} >
          
          
            
            <div  style={{ width: '100%', minHeight: '100vh',display:'flex',justifyContent:'center',alignItems:'center' }} ref={ref}>
            <PdfContainer  createPdf={(html) => Doc.createPdf(html)}> 
                <div className="container col-12 p-5">
                    <div className={ResumeCss.pfrlsctn}>
                        <div className={ResumeCss.pfrlimg}>
                        <img id={ProfileCss.pfrlimg} src={`${prflimgurl}/images/Uploads/${user ? user.profile : ''}`} alt="" />
                        </div>
                        {/* <h5 className={ResumeCss.name}>john doe</h5> */}
                    </div>
                    <div className={ResumeCss.pfrlsctn}>
                        <p style={{ fontSize: '25px', textTransform: 'uppercase',marginTop:"25px" }}>Hi ! there</p>
                        <h5 className={ResumeCss.name2}> i'm {props.user ? props.user.SigninReducer.user.name : ''} {props.user ? props.user.SigninReducer.user.LastName : ''}</h5>
                        <p style={{ textAlign: 'center', fontSize: '12px', textTransform: 'uppercase', width: '500px', textJustify: 'auto' }}>
                          {Aboutyourself}</p>

                    </div>
                    <hr />
                   
                    <div className={ResumeCss.section}>
                        <b className={ResumeCss.heading}>My Education</b>
                        <div class="row mt-2">
                            <div class="col-3">
                            </div>
                            {schoollist}
                            
                        </div>
                        <div class="row mt-2">
                            <div class="col-3">
                            </div>
                            {/* {Collegelist} */}
                            
                        </div>
                       
                    </div>
                    <hr />
                    <div className={ResumeCss.section}>
                        <b className={ResumeCss.heading}>My Experience</b>
                        <div class="row mt-2">
                       { workExperience}
                           
                        </div>
                       
                       
                    </div>
                    <hr />
                    <div className={ResumeCss.section}>
                        <b className={ResumeCss.heading}>My Services</b>
                        <div class="row mt-2">
                            <div className="col-3"></div>
                            <div className="col">
                                <div className="row">
                                {listskill}
                                </div>
                            </div>
                     
                          
                         
                           
                        </div>
                        
                       
                    </div>
                    <hr />
                    <div className={ResumeCss.section}>
                        <b className={ResumeCss.heading}>Personal Detail</b>
                        <div class="row mt-2">
                        <div class="col">
                            </div>
                            <div class="col">
                                <h6 className={ResumeCss.heading2}>Name</h6>
                                {props.user ? props.user.SigninReducer.user.name : ''} {props.user ? props.user.SigninReducer.user.LastName : ''}
                            </div>
                            <div class="col">
                                <h6 className={ResumeCss.heading2}>Gender</h6>
                                {props.user ? props.user.SigninReducer.user.Gender : ''} 
                            </div>
                            <div class="col">
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col">
                            </div>
                            <div class="col">
                                <h6 className={ResumeCss.heading2}>MobileNo</h6>
                                {props.user ? props.user.SigninReducer.user.MobileNo : ''}
                            </div>
                            <div class="col">
                                <h6 className={ResumeCss.heading2}>Email</h6>
                                {props.user ? props.user.SigninReducer.user.email : ''}
                            </div>
                            <div class="col">
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col">
                            </div>

                            <div class="col">
                                <h6 className={ResumeCss.heading2}>Address</h6>
                                {props.user && props.user.SigninReducer.user.City ? props.user.SigninReducer.user.City : ''}
                                &nbsp; {props.user && props.user.SigninReducer.user.State ? props.user.SigninReducer.user.State : ''}
                                &nbsp; {props.user && props.user.SigninReducer.user.Country ? props.user.SigninReducer.user.Country : ''}
                            </div>
                            <div class="col">
                               
                            </div>
                            <div class="col">
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                </PdfContainer>
                </div>
        </div>
    )
}
Downloadresume.propTypes = {
    SigninReducer: PropTypes.object.isRequired,
    ProfileReducer: PropTypes.object.isRequired,

 }

//  const mapDispatchToProps = ({
//     loadUser: loadUser,
//     // loadeducation : loadeducation,
//     // loadExperience : loadexperience,
//     // loadskills : loadskills,
//     // loadsummary : loadsummary,
//     // loadWork : loadworksample,
//     profileLoadingTrue: profileLoadingTrue,
//  });

 const mapStateToProps = (state) => ({
    SigninReducer: { ...state.SigninReducer },
    ProfileReducer: { ...state.ProfileReducer }
 })
 export default withRouter(connect(mapStateToProps, null)(Downloadresume))
