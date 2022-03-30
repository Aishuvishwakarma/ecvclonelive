import React from 'react'
import { Link, NavLink } from "react-router-dom";
function ExperiencesNew() {
    return (
        <>
       
    <section className="pt-5 pb-5" style={{marginTop:'150px'}}>
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
                    <form className="form_main" action="">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p>Employer</p>
                                <input type="text" placeholder="e.g. IBM" />

                            </div>
                            <div className="col-12 col-md-6">
                                <p>Job title</p>
                                <input type="text" placeholder="Je.g. Engineer" />
                            </div>

                            <div className="col-12 col-md-6">
                                <p>City</p>
                                <input type="text" placeholder="e.g. San Franciso" />
                            </div>

                            <div className="col-12 col-md-6">
                                <p>State</p>
                                <input type="text" placeholder="Je.g. California" />
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <div className="col-6">
                                        <p>Start date</p>
                                        <select>
                                            <option>Month</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <p style={{opacity: '0'}} >demo</p>
                                        <select>
                                            <option>Year</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <div className="col-6">
                                        <p>End date</p>
                                        <select>
                                            <option>Month</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <p  style={{opacity: '0'}} >demo</p>
                                        <select>
                                            <option>Year</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </form>


                </div>
                <div className="col-12 col-md-3">

                </div>
            </div>



        </div>
    </section>

    <section className="pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <textarea>s</textarea>
                </div>
                <div className="col-12 col-md-6">
                    <div className="inner_choose">
                        <div className="choose_inner">
                            <h4>Choose your career field and sub-field to find relevant pre-written examples.</h4>
                            <div className="form_main select_field">
                                <div className="row">
                                    <div className="col-6">
                                        <p>Career field</p>
                                        <select>
                                            <option>Please select</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <p>Career subfield</p>
                                        <select>
                                            <option>Please select</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="add_field">
                                    <div className="add_inner">
                                        Research, document, rate, or select alternatives for web architecture or technologies.
                                    </div>
                                    <div className="add_inner">

                                        Identify case issues and evidence needed, based on analysis of charges, complaints, or allegations of law violations.
                                    </div>

                                    <div className="add_inner">

                                        Plan budgets and arrange for purchase of animals, feed, </div>

                                    <div className="add_inner">
                                        Research, document, rate, or select alternatives for web architecture or technologies.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="form_main row p-0"  style={{boxShadow:'none'}}  action="">
                <div className="col-6 col-md-6">
                    <Link to="experiences_tips.html" type="button" className="btn back_btn">
                        Back
                    </Link>
                </div>
                <div className="col-6 col-md-6">
                    <Link to="/EditResume/educationTips" type="button" className="btn text-right">
                        Save &amp; Next
                    </Link>
                </div>
            </div>

        </div>
    </section>
  
        </>
    )
}

export default ExperiencesNew
