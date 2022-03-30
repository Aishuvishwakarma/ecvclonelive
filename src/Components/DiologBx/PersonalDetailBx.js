import React, { useState, useEffect } from 'react'
import {  State, City } from 'country-state-city';
import AllStates from "../Options/AllStates";
import AllCity from "../Options/City";
import { ToastContainer, toast } from "react-toastify";
import axios from '../../Utillity/axios'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import Dilogcss from './Dilog.Module.css' 
import { successSignin } from "../../Store/Actions/AuthActions";
function PersonalDetailBx(props) {
    const [state, setstate] = useState({name:'',LastName:'',email:'',MobileNo:'',Gender:'',City:'',State:''})
    useEffect( () => { 
        setstate({
            username : props.user.username,
            name : props.user.name,
            LastName : props.user.LastName,
            email : props.user.email,
            MobileNo : props.user.MobileNo,
            Gender : props.user.Gender ?  props.user.Gender : '',
            City :  props.user.City ? props.user.City : '',
            State : props.user.State ? props.user.State : '',
            Country : props.user.Country ? props.user.Country : ''
        })
        return null
     }, [props.user])
    const onSubmitForm = (e) => {
        e.preventDefault();
        const obj = {}
        obj.name = state.name
        obj.username = state.username
        obj.LastName = state.LastName
        obj.email = state.email
        obj.MobileNo = state.MobileNo
        obj.Gender = state.Gender
        obj.City = state.City
        obj.State = state.State
        console.log(obj)
        notify();
        if (obj.name && obj.username && obj.City && obj.LastName && obj.email && obj.MobileNo && obj.Gender  && obj.State) {
            axios.post('/user/updateUser', obj)
                .then(data => {
                    if(props.history.location.pathname === '/EditResume/personalinfo'){
                        if(localStorage.active_prfl){
                            localStorage.removeItem('active_prfl')
                            localStorage.setItem('active_prfl',2)
                        }else{
                            localStorage.setItem('active_prfl',2)
                        }
                       
                    }
                    props.successSignin(data.data)
                    RedirectHandler();
                })
                .catch(err => console.log(err))
        }
    }
  
    const RedirectHandler = ()=>{
        document.querySelector(".close").click();
    }
    const onFormChange = (e) => {
        // educationEditlist
        e.persist();
        setstate(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
        console.log(e)
    }

    const notify = () => {
        if(!state.username){
            toast.error("username Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.name){
            toast.error("Name Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.LastName){
            toast.error("LastName Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.email){
            toast.error("email Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.MobileNo){
            toast.error("MobileNo Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.Gender){
            toast.error("Gender Feild must have not Empty",{
                progress: undefined,
                hideProgressBar: true,
            })
        }
        if(!state.City){
            toast.error("City Feild must have not Empty",{
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


    };
    let StateList =  State.getStatesOfCountry("IN")
    let StateListArry = StateList.map(s =>  <AllStates  key={s.isoCode} allstate={s} />  )
    let CityList =  City.getCitiesOfState("IN",`${state.State}`)
    let CityListArry = CityList.map(c =>  <AllCity  key={c.isoCode} allcity={c} />  )

    return (
        <>
 { props.history.location.pathname === '/EditResume/personalinfo' ?<><br/>
             <button type="button" style={{ border: 'none',marginTop:'20px' }} data-toggle="modal" data-target="#personaldetail">
                <b style={{ fontSize: '15px', color: '#DA2461', display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <i style={{ fontSize: '12px', marginRight: '10px' }} class='fas fa-plus-circle'></i>Give your more details
                </b>
                <ToastContainer  />
            </button>
             </> :<>
             <button type="button" style={{ border: 'none' }} data-toggle="modal" data-target="#personaldetail">
                <i style={{ color: '#DA2461', fontSize: '20px' }} class="fas fa-pen"></i>
            </button>
             </>}
           
            <ToastContainer />
            <div className="modal fade" id="personaldetail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Update And Add More Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={onSubmitForm} >
                            <div className="modal-body">
                                <div className="row">

                                    

                                    <div className="col-12 d-flex mb-2 justify-content-center align-items-center">
                                        <input className={Dilogcss.DilogInput}  onChange={onFormChange} 
                                        value={state.name} name="name" type="text" placeholder="Enter your name" />
                                    </div>

                                    <div className="col-12 d-flex mb-2 justify-content-center align-items-center">
                                        <input className={Dilogcss.DilogInput}  onChange={onFormChange} 
                                          value={state.LastName}  name="LastName" type="text" placeholder="Enter your last name" />
                                    </div>
                                    <div className="col-12">
                                                <select  className={Dilogcss.DilogInput}  style={{marginBottom:'10px'}} name='Gender' onChange={onFormChange}>
                                                    <option className={Dilogcss.DilogInput} value='Gender'>Gender</option>
                                                    <option className={Dilogcss.DilogInput} value='male'>male</option>
                                                    <option className={Dilogcss.DilogInput} value='Female'>Female</option>
                                                    <option className={Dilogcss.DilogInput}  value='Other'>Other</option>
                                                </select>
                                        </div>
                                    <div className="col-12 d-flex mb-2 justify-content-center align-items-center">
                                        <input className={Dilogcss.DilogInput} onChange={onFormChange}
                                         value={state.email} name='email' type="email" placeholder="Enter your Email" />
                                    </div>
                                    <div className="col-12 d-flex mb-2 justify-content-center align-items-center">
                                        <input className={Dilogcss.DilogInput}  onChange={onFormChange}
                                         value={state.MobileNo}  name="MobileNo" type="number" placeholder="Enter your Number" />
                                    </div>
                                    <div className="col-12">
                                    <div className="row">
                                   
                                    <div className="col-6">
                                    <select  className={Dilogcss.DilogInput}  style={{marginBottom:'10px'}} name='State' onChange={onFormChange}>
                                                    <option className={Dilogcss.DilogInput} value='state'>Select state</option>
                                                    {StateListArry}
                                                </select>
                                    </div>
                                    <div className="col-6">
                                    <select  className={Dilogcss.DilogInput}  style={{marginBottom:'10px'}} name='City' onChange={onFormChange}>
                                                    <option className={Dilogcss.DilogInput} value='City'>Select City</option>
                                                    {CityListArry}
                                                </select>
                                    </div>
                                    </div>
                                       
                                    </div>
                                </div>
                                
                            </div>

                            <div className="modal-footer">
                                <button type="submit" className={Dilogcss.btn} >Save & Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    SigninReducer : {...state.SigninReducer}
})

const mapDispatchToProps = (
    {
        successSignin: successSignin,
    }
    
)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PersonalDetailBx));
