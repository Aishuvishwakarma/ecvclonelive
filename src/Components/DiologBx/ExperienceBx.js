import React, { useState, useEffect } from 'react'
import axios from '../../Utillity/axios'
import Dilogcss from './Dilog.Module.css' 
import {  State, City } from 'country-state-city';
import AllStates from "../Options/AllStates";
import AllCity from "../Options/City";
import { withRouter, Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-date-picker/dist/DatePicker.css";
import { connect } from 'react-redux'
import { loadUser,setEducation ,successSignin,loadexperience} from "../../Store/Actions/AuthActions";
import PropTypes from 'prop-types';
function ExperienceBx(props) {
    const [state, setstate] = useState({ Organization: '', Jobtitle: '', City: '', State: '', StartDate: '', EndDate: '' })
    const [start, setstartDate] = useState(new Date());
    const [End, setEndtDate] = useState(new Date());
  

    const onSubmitForm = (e) => {
        e.preventDefault();
        const obj = {}
        obj.Organization = state.Organization
        obj.Jobtitle = state.Jobtitle
        obj.City = state.City
        obj.State = state.State
        obj.StartDate = state.StartDate
        obj.EndDate = state.EndDate
        console.log(obj)

        if (obj.Organization && obj.Jobtitle && obj.City && obj.State && obj.StartDate && obj.EndDate) {
            axios.post('/userinfo/experience/AddExperience', obj)
                .then(data => {
                    if(props.history.location.pathname === '/EditResume/personalinfo'){
                        if(localStorage.active_prfl){
                            localStorage.removeItem('active_prfl')
                            localStorage.setItem('active_prfl',4)
                        }else{
                            localStorage.setItem('active_prfl',4)
                        }
                       
                    }
                    props.successSignin(data.data)
                    props.loadExperience();   
                    RedirectHandler();
                })
                .catch(err => console.log(err))
        }else return   notify();
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
        if(!state.Organization){
            toast.error("Organization Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.Jobtitle){
            toast.error("Jobtitle Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.StartDate){
            toast.error("Please give started Date..",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.EndDate){
            toast.error("Please give Expacted End Date..",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.State){
            toast.error("State Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.City){
            toast.error("Please Give a City name",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
       
        }
    let StateList =  State.getStatesOfCountry("IN")
    let StateListArry = StateList.map(s =>  <AllStates  key={s.isoCode} allstate={s} />  )
    let CityList =  City.getCitiesOfState("IN",`${state.State}`)
    let CityListArry = CityList.map(c =>  <AllCity  key={c.isoCode} allcity={c} />  )
    return (
        <>
 { props.history.location.pathname === '/EditResume/personalinfo' ?<><br/>
             <button type="button" style={{ border: 'none',marginTop:'20px' }} data-toggle="modal" data-target="#AddExperience">
                <b style={{ fontSize: '15px', color: '#DA2461', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <i style={{ fontSize: '12px', marginRight: '10px' }} class='fas fa-plus-circle'></i>Add Your work Experience
                </b>
                <ToastContainer  />
            </button>
             </> :<>
             <button type="button" style={{ border: 'none' }} data-toggle="modal" data-target="#AddExperience">
                <i style={{ color: '#DA2461', fontSize: '20px' }} class="fas fa-pen"></i>
                <ToastContainer />
            </button>
             </>}
           
          
            <div className="modal fade" id="AddExperience" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Add JOB/Internship-Experience</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={onSubmitForm} >
                            <div className="modal-body position-relative">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <p>Organization</p>
                                            <input className={Dilogcss.DilogInput}  style={{ width: '100%', marginBottom: '8px', fontSize: '15px' }} type="text" name='Organization' onChange={onFormChange} placeholder="e.g. IBM" />

                                        </div>
                                        <div className="col-12 col-md-6">
                                            <p>Job title</p>
                                            <input className={Dilogcss.DilogInput}  style={{ width: '100%', marginBottom: '8px', fontSize: '15px' }} type="text" name='Jobtitle' onChange={onFormChange} placeholder="Je.g. Engineer" />
                                        </div>

                                      
                                        <div className="col-12 col-md-6">
                                        <p>State</p>
                                                        <select  className={Dilogcss.DilogInput}  style={{marginBottom:'10px'}} name='State' onChange={onFormChange}>
                                                    <option  disabledclassName={Dilogcss.DilogInput} value=''>Select state</option>
                                                    {StateListArry}
                                                </select>
                                        </div>

                                        <div className="col-12 col-md-6">
                                        <p>City</p>
                                                        <select  className={Dilogcss.DilogInput}  style={{marginBottom:'10px'}} name='City' onChange={onFormChange}>
                                                    <option disabled className={Dilogcss.DilogInput} value=''>Select City</option>
                                                    {CityListArry}
                                                </select>
                                        </div>
                                        <div className="col-6">
                                            <p>Start date</p>
                                            <input type="date" 
                                            onChange={onFormChange}
                                            className={Dilogcss.DilogInput}  style={{ width: '100%', marginBottom: '8px', fontSize: '15px' }} 
                                                name='StartDate'  />
                                        </div>
                                        <div className="col-6">
                                            <p>End date</p>
                                            <input type="date" name='EndDate'
                                              className={Dilogcss.DilogInput}  style={{ width: '100%', marginBottom: '8px', fontSize: '15px' }} 
                                                onChange={onFormChange}
                                              />
                                            

                                        </div>

                                    </div>

                                </div>

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
const mapDispatchToProps = ({
    loadUser: loadUser,
    setEducation :setEducation,
    loadExperience:loadexperience,
    successSignin:successSignin,
});
const mapStateToProps = (state) => ({
    SigninReducer: { ...state.SigninReducer }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExperienceBx))
