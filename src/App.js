import React, { Component } from 'react'
import Header from "./Components/Partials/Header";
import EditResume from "./Components/Resume/EditResume";
import Footer from "./Components/Partials/Footer";
import Home from "./Components/Landing/Home";
import FindJob from "./Components/FindJob.js/FindJob";
import JobDetail from "./Components/FindJob.js/JobDetails";
import BlogDetail from "./Components/Landing/BlogDetail";
import About from "./Components/Landing/About";
import Contact from "./Components/Landing/Contact";
import Profile from "./Components/Profile/Profile";
import Employer from "./Components/Employer/Employer";
import Resume from "./Components/Resume/Resume";
import SignUp from "./Components/Partials/SignUp";
import SignIn from "./Components/Partials/SignIn";
import Downloadresume from "./Components/Resume/Downloadresume";
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from "react-router-dom";
import axios from "./Utillity/axios";
import { 
  loadUser, loadeducation,loadexperience,
  loadskills,loadsummary,loadworksample,
  profileLoadingTrue } from "./Store/Actions/AuthActions";
// import { loadeducation,loadexperience,loadskills,loadsummary,loadworksample,profileLoadingTrue } from "./Store/Actions/ProfileAction";
class App extends Component {
  state ={
    token : '',
    isloggedin : false,
    user : ''
  }

  sessionLogin(){
    
    if(localStorage.ecv_token){ 
      // String token = localStorage.token
    this.setState({isloggedin:true})
      axios.defaults.headers.common["auth-token"] = localStorage.ecv_token;
      this.props.loadUser(localStorage.ecv_token);
      this.props.loadeducation();
      this.props.loadsummary();
      this.props.loadExperience();
      this.props.loadskills();
      this.props.loadWork();
    } else{
      
        delete axios.defaults.headers.common['auth-token'];
        this.setState({isloggedin:false})
    }
}
componentDidMount(){
  this.sessionLogin();
  window.scrollTo(0, 0);
  // this.setState({token : this.props.AuthReducer.AuthReducer.token,isloggedin: this.props.AuthReducer.AuthReducer.IsLoggedin})
}


// componentDidUpdate() {
//   this.sessionLogin();
// }
  render() {
    return ( 
      <>
        <Header />
        <Route exact path='/FindJob' render={()=> <FindJob />} />
        <Route exact path='/JobDetail' render={()=> <JobDetail />} />
        <Route exact path='/BlogDetail' render={()=> <BlogDetail />} />
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/employer' component={Employer}/>
        <Route exact path='/resume' render={()=> <Resume/>} />
        <Route exact path='/EditResume/:edit' render={()=> <EditResume/>} />
        <Route exact path='/download' render={()=> <Downloadresume user={this.props.AuthReducer}/>} />
  
        <Route exact path='/' component={Home}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Contact' component={Contact}/>
        < Switch>
        {
         !this.state.isloggedin ?
         <>
        <Route exact path='/register' component={SignUp}/>
        <Route exact path='/login' component={SignIn}/>
      
         </>: <Redirect to='/profile' />
        }
      
      
        </Switch>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  AuthReducer : {...state},
  ProfileReducer: { ...state.ProfileReducer }
})

const mapDispatchToProps = ({
  loadUser: loadUser,
  loadeducation : loadeducation,
  loadExperience : loadexperience,
  loadskills : loadskills,
  loadsummary : loadsummary,
  loadWork : loadworksample,
  profileLoadingTrue  : profileLoadingTrue
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
