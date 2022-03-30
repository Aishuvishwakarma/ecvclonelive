import React, { Component } from 'react'
import ResumeHeader from "../Resume/ResumeHeader";
import PersonalInfos from "../Resume/PersonalInfos";
import ExperiencesTips from "../Resume/Experience/ExperiencesTips";
import ExperiencesNew from "..//Resume/Experience/ExperiencesNew";
import ExperiencesNewList from "../Resume/Experience/ExperiencesNewList";
import ExperienceEdit from "../Resume/Experience/EditExperience";
import Education from "../Resume/Education/Education";
import EducationTips from "../Resume/Education/EducationTips";
import EducationEdit from "../Resume/Education/EducationEdit";
import Skill from "../Resume/Skills/Skill";
import SkillEdit from "../Resume/Skills/SkillEdit";
import Summarie from "../Resume/Summarie/Summarie";
import SummarieEdit from "../Resume/Summarie/SummarieEdit";
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from "react-router-dom";
import axios from "../../Utillity/axios";
import { loadUser } from "../../Store/Actions/AuthActions";

class componentName extends Component {
    state ={
        token : '',
        isloggedin : '',
        user : ''
      }
    
      sessionLogin(){
        
        if(localStorage.ecv_token){
          // String token = localStorage.token
          axios.defaults.headers.common["auth-token"] = localStorage.token;
          this.props.loadUser(localStorage.ecv_token);
        } else{
            delete axios.defaults.headers.common['auth-token'];
        }
    }
    componentDidMount(){
      this.sessionLogin();
    }
    render() {
        return (
            <>
         <ResumeHeader />
        {/* <Route exact path='/EditResume/personalinfo' component={PersonalInfos}  /> */}
        <Route exact path='/EditResume/experiencestips' component={ExperiencesTips}  />
        <Route exact path='/EditResume/experiencesNew' component={ExperiencesNew} />
        <Route exact path='/EditResume/experiencesNewList' component={ExperiencesNewList} />
        <Route exact path='/EditResume/Editexperience'component={ExperienceEdit}/>
        <Route exact path='/EditResume/educationEdit' component={Education} />
        <Route exact path='/EditResume/educationTips' component={EducationTips}  />
        <Route exact path='/EditResume/educationEditlist' component={EducationEdit} />
        {/* <Route exact path='/AddSchool' render={()=> <EducationSchool />} />
        <Route exact path='/AddCollege' render={()=> <EducationClg />} /> */}
        <Route exact path='/EditResume/skill' component={Skill}  />
        <Route exact path='/EditResume/skilledit' component={SkillEdit}  />
        <Route exact path='/EditResume/summarie' component={Summarie} />
        <Route exact path='/EditResume/summarieEdit'  component={SummarieEdit} />
        {/* <Route exact path='/ProfileSummary' render={()=> <ProfileSummary />} /> */}
      
        {/* < Switch>
        {
         !this.state.isloggedin ?
         <>
         <Route exact path='/resume' render={()=> <Resume/>} />
         <Route exact path='/resume' component={Resume}/>
        <Route exact path='/register' component={SignUp}/>
        <Route exact path='/login' component={SignIn}/>
         </>: <Redirect to='/profile' />
        }
      
       
        </Switch> */}
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    AuthReducer : {...state}
  })
  
  const mapDispatchToProps = ({
    loadUser: loadUser
  });
export default  connect(mapStateToProps, mapDispatchToProps)(componentName);