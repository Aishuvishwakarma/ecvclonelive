import React, { useState, useEffect } from 'react'
import csc from 'country-state-city';
import { Country, State, City }  from 'country-state-city';
import DatePicker from 'react-date-picker';
import { withRouter } from "react-router";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import axios from '../../../Utillity/axios'
import { Link, NavLink } from "react-router-dom";
function EditExperience(props) {
    const [state, setstate] = useState({ Organization: '', Jobtitle: '',City : '',State : '',StartDate : '',EndDate : ''})
    const [start, setstartDate] = useState(new Date());
    const [End, setEndtDate] = useState(new Date());
 let Countries = Country.getAllCountries()
 let Countriesarry =Countries
    console.log(Countries)
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        const obj = {}
        obj.Organization = state.Organization
        obj.Jobtitle = state.Jobtitle
        obj.City = state.City
        obj.State = state.State
        obj.StartDate = start
        obj.EndDate = End
        console.log(obj) 
       
        if (obj.Organization || obj.Jobtitle || obj.City || obj.State || obj.StartDate || obj.EndDate) 
        {
            axios.post('/userinfo/experience/AddExperience', obj)
                .then(data => {
                    console.log(data.data);
                    props.history.goBack();
                })
                .catch(err => console.log(err))
        }
    }

    const onFormChange = (e) => {
        // educationEditlist
        e.persist();
        setstate(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    return (
<>
    <div>

<section className="pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-9">
                <div className="row">
                    <div className="col-12">
                        <div className="heading_bg mb-5">
                            <h4>
                                <strong>Experience</strong>
                            </h4>
                            <p>List your work experience, from the most recent to the oldest. Feel free to use our pre-written examples.</p>
                        </div>
                    </div>
                </div>
                <form className="form_main" onSubmit={onSubmitForm}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>Organization</p>
                            <input type="text" name='Organization' onChange={onFormChange} placeholder="e.g. IBM" />

                        </div>
                        <div className="col-12 col-md-6">
                            <p>Job title</p>
                            <input type="text" name='Jobtitle' onChange={onFormChange}  placeholder="Je.g. Engineer" />
                        </div>

                        <div className="col-12 col-md-6">
                        
                            <p>City</p>
                            <input type="text" name='City' onChange={onFormChange}  placeholder="e.g. San Franciso" />
                        </div>

                        <div className="col-12 col-md-6">
                            <p>State</p>
                            <input type="text" name='State' onChange={onFormChange}  placeholder="Je.g. California" />
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-6">
                                    <p>Start date</p>
                                    <DatePicker
                                    name='StartDate' onChange={onFormChange} 
                                        onChange={setstartDate}
                                        value={start}
                                    />
                                    
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-6">


                                    <p>End date</p>
                                    <DatePicker
                                    name='StartDate'
                                    onChange={onFormChange} 
                                        onChange={setEndtDate}
                                        value={End}
                                    />
                                    
                                </div>
                                
                            </div>
                        </div>


                    </div>
                    <div className="form_main row p-0" style={{ boxShadow: 'none' }} action="">
            <div className="col-6 col-md-6">
                <Link to="experiences_tips.html" type="button" className="btn back_btn">
                    Back
                </Link>
            </div>
            <div className="col-6 col-md-6">
                <button  type="submit" className="btn text-right">
                    Save &amp; Next
                </button>
            </div>
        </div>

                </form>


            </div>

        </div>

      

    </div>
</section>

    </div>
</>
    )
}

export default EditExperience
