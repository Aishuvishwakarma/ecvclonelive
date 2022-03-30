import React, { useState, useEffect } from 'react'
import axios from '../../Utillity/axios'
import { withRouter, Link, NavLink } from "react-router-dom";
import {  State, City } from 'country-state-city';
import AllStates from "../Options/AllStates";
import { ToastContainer, toast } from "react-toastify";
import AllCity from "../Options/City";
import { loadUser,setEducation ,successSignin,loadeducation} from "../../Store/Actions/AuthActions";
import Dilogcss from './Dilog.Module.css' 
import { connect } from 'react-redux'
function AddSchoolBx(props) {
    const [state, setstate] = useState({ SeniorSecondary: '', Stream: '', Board: '', Performance: '', Completion: '', State: '', City: '', SchoolName: '' })
    const [user, setuser] = useState(null);
    const loadUser = () => {
        setuser(props.SigninReducer.user)
    }
    useEffect(async () => {
        loadUser();
        return null
    }, [props])

 
    const onSubmitForm = (e) => {
        e.preventDefault();
     
        
            let obj = {}
            obj.SeniorSecondary = state.SeniorSecondary
            obj.Stream = state.Stream
            obj.Board = state.Board
            obj.Performance = state.Performance
            obj.Completion = state.Completion
            obj.State = state.State
            obj.City = state.City
            obj.SchoolName = state.SchoolName
             if (obj.SeniorSecondary && obj.Board && obj.Completion && obj.State && obj.City && obj.SchoolName) {
                axios.post('/userinfo/edu/AddSchool', obj)
                .then(data => {
                    if(props.history.location.pathname === '/EditResume/personalinfo'){
                        if(localStorage.active_prfl){
                            localStorage.removeItem('active_prfl')
                            localStorage.setItem('active_prfl',3)
                        }else{
                            localStorage.setItem('active_prfl',3)
                        }
                       
                    }
                props.successSignin(data.data)
                props.loadeducation();   
                    RedirectHandler();
                })
                .catch(err => console.log(err)) 
             }else return    notify();
       
       
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
   
        if(!state.SeniorSecondary){
            toast.error("SeniorSecondary Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.Completion){
            toast.error("Please give  your Started & Expacted Last Yr..",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
       
        if(!state.SchoolName){
            toast.error("SchoolName Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.Stream){
            toast.error("Please Give Your subject name If your are In 12th Class",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.Board){
            toast.error("please give a Feild Of Board",{
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

            <button type="button" style={{ border: 'none' }} data-toggle="modal" data-target="#Addschool">
                <b style={{ fontSize: '15px', color: '#DA2461', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <i style={{ fontSize: '12px', marginRight: '10px' }} class='fas fa-plus-circle'></i>Add secondary (X) / senior secondary (XII)
                </b>
                <ToastContainer />
            </button>
           
            <div className="modal fade" id="Addschool" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading_bg">
                                        <h3>
                                            <strong>Education</strong>
                                        </h3>
                                        <p>Senior Secondary or Equivalent (X/XII) details</p>
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={onSubmitForm} >
                            <div className="modal-body">
                               
                                    <div className="container">

                                        <div className="row">
                                        <div className="col-12 col-md-6">
                                                            <p>Senior Secondary</p>
                                                            <select className={Dilogcss.DilogInput} name='SeniorSecondary' onChange={onFormChange}>
                                                            <option  value=''>Choose X/XII</option>
                                                                <option value='x'>X</option>
                                                                <option value='xii'>XII</option>
                                                            </select>
                                                       
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <p>School name</p>
                                                        <input className={Dilogcss.DilogInput} style={{marginBottom:'8px'}} type="text" name='SchoolName' onChange={onFormChange} placeholder="e.g. School name" />

                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <p>State</p>
                                                        <select  className={Dilogcss.DilogInput}  style={{marginBottom:'10px'}} name='State' onChange={onFormChange}>
                                                    <option  className={Dilogcss.DilogInput} value=''>Select state</option>
                                                    {StateListArry}
                                                </select>
                                                        {/* <input className={Dilogcss.DilogInput} style={{marginBottom:'8px'}}  type="text" name='City' onChange={onFormChange} placeholder="e.g. San Franciso" /> */}
                                                    </div>

                                                    <div className="col-12 col-md-6">
                                                        <p>City</p>
                                                        <select  className={Dilogcss.DilogInput}  style={{marginBottom:'10px'}} name='City' onChange={onFormChange}>
                                                    <option  className={Dilogcss.DilogInput} value=''>Select City</option>
                                                    {CityListArry}
                                                </select>
                                                        {/* <input className={Dilogcss.DilogInput} style={{marginBottom:'8px'}}  type="text" name='State' onChange={onFormChange} placeholder="e.g. California" /> */}
                                                    </div>
                                                    {
                                                        state.SeniorSecondary !== 'x' ?
                                                            <>
                                                                <div className="col-12 col-md-6">
                                                                    <p>Stream of study</p>
                                                                    <input className={Dilogcss.DilogInput} style={{marginBottom:'8px'}}  type="text" name='Stream' onChange={onFormChange} placeholder="e.g. Your subject name" />
                                                                </div>
                                                            </> : ''
                                                    }


                                                    <div className="col-12 col-md-6">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p>Completion</p>
                                                                <select className={Dilogcss.DilogInput} name='Completion' onChange={onFormChange}>
                                                                <option  value=''>Is Completed ?</option>
                                                                    <option value='completed'>Completed</option>
                                                                    <option value='pursuing'>pursuing</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-6">
                                                                <p style={{ opacity: '0' }}>Board</p>
                                                                <select className={Dilogcss.DilogInput} name='Board' onChange={onFormChange}>
                                                                <option  value=''>BOARD</option>
                                                                    <option value='mp board'>MP BOARD</option>
                                                                    <option value='cbsc'>CBSC</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                           {
                                                  state.Completion !== 'pursuing' ? (
                                                    <div className="col-12 col-md-6">
                                                    <p>Performance scale</p>
                                                    <input className={Dilogcss.DilogInput}
                                                    type="text" name='Performance' onChange={onFormChange} placeholder="Percentage" />
                                                </div>
                                                  ) : ''
                                           }
                                                    
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
    loadeducation:loadeducation,
    successSignin:successSignin,
});
const mapStateToProps = (state) => ({
    SigninReducer: { ...state.SigninReducer }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddSchoolBx));
