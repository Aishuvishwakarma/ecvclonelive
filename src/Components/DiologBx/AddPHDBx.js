import React, { useState, useEffect } from 'react'
import axios from '../../Utillity/axios'
import Dilogcss from './Dilog.Module.css' 
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import {  State, City } from 'country-state-city';
import AllStates from "../Options/AllStates";
import AllCity from "../Options/City";
import PropTypes from 'prop-types';
import { ToastContainer, toast } from "react-toastify";
import { loadUser } from "../../Store/Actions/AuthActions";
function AddPHDBx(props) {
    const [state, setstate] = useState({ Graduation: '', CollegeName: '', Stream: '', CLGYR: '', Performance: '', Completion: '', State: '', City: '', From: '', To: '' })
    const [user, setuser] = useState(null);
    useEffect(async () => {
        loadUser();
        return null
    }, [props])
    const loadUser = () => {
        setuser(props.SigninReducer.user)
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        const obj = {}
        obj.Graduation = state.Graduation
        obj.Performance = state.Performance
        obj.Completion = `${state.From}-${state.To}`
        obj.State = state.State
        obj.City = state.City
        obj.CollegeName = state.CollegeName
        obj.Stream = state.Stream
        console.log(obj)
        if (obj.Graduation && obj.Stream && obj.Performance && obj.Completion && obj.State && obj.City && obj.CollegeName) {
            axios.post('/userinfo/edu/AddEducation', obj)
                .then(data => {
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
        if(!state.Graduation){
            toast.error("Graduation Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.Performance){
            toast.error("Performance Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.From){
            toast.error("Please give started Yr..",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.To){
            toast.error("Please give Expacted Last Yr..",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.CollegeName){
            toast.error("CollegeName Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.Stream){
            toast.error("Please Give Your Branch/Stream.. name",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.Feild){
            toast.error("please give a Feild Of Graduation",{
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
            <button type="button" style={{ border: 'none' }} data-toggle="modal" data-target="#addPhD">
                <b style={{ fontSize: '15px', color: '#DA2461', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <i style={{ fontSize: '12px', marginRight: '10px' }} class='fas fa-plus-circle'></i>Add PHD
                </b>
                <ToastContainer />
            </button>


            <div className="modal fade" id="addPhD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading_bg">
                                        <h3>
                                            <strong>Education</strong>
                                        </h3>
                                        <p>Add PHD</p>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <form onSubmit={onSubmitForm} >
                            <div className="modal-body">
                                <div className='container'>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                        <p>PHD Course Name</p>
                                                <select className={Dilogcss.DilogInput} name='Graduation' onChange={onFormChange}>
                                                    <option value='Graduation'>Graduation</option>
                                                    <option value='Post Graduation'>Post Graduation</option>
                                                </select>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <p>College name</p>
                                            <input  className={Dilogcss.DilogInput}  style={{marginBottom:'8px'}} type="text" name='CollegeName' onChange={onFormChange} placeholder="e.g. College name" />

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
                                        <div className="col-12 col-md-6">
                                            <p>Stream</p>
                                            <input  className={Dilogcss.DilogInput}  style={{marginBottom:'8px'}} type="text" name='Stream' onChange={onFormChange} placeholder="e.g. Your stream/Branch name" />
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <p>Performance scale</p>
                                            <input  className={Dilogcss.DilogInput}  style={{marginBottom:'8px'}} type="text" name='Performance' onChange={onFormChange} placeholder="Percentage" />

                                        </div>
                                      
                                        <div className="col-12 col-md-6" >
                                                    <p>Completion-From</p>
                                                    <input  className={Dilogcss.DilogInput} style={{marginBottom:'8px'}}  type="text" name='From' onChange={onFormChange} placeholder="e.g. start yr " />

                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <p>Completion-To</p>
                                                    <input className={Dilogcss.DilogInput} style={{marginBottom:'8px'}}   type="text" name='To' onChange={onFormChange} placeholder="e.g. expected last yr" />

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
    loadUser: loadUser
});
const mapStateToProps = (state) => ({
    SigninReducer: { ...state.SigninReducer }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPHDBx));
