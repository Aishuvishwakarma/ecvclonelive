import React from 'react'
import { Link, NavLink } from "react-router-dom";

function SummarieEdit() {
    return (
        <>
          
    <section style={{marginTop:'100px'}}  className="pt-5 pb-3">
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-9">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading_bg mb-5">
                                <h4>
                                    Professional
                                    <strong> Summary</strong>
                                </h4>
                                <p>Write a short summary telling more about yourself, your strengths and experience. Feel free to use our pre-written examples.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-3">

                </div>
            </div>



        </div>
    </section>

    <section className="pb-5">
        <div className="container">
            <p>Summary</p>
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

            <div className="form_main row p-0" style={{boxShadow:'none'}} action="">
                <div className="col-6 col-md-6">
                    <a href="summaries.html" type="button" className="btn back_btn">
                        Back
                    </a>
                </div>
                <div className="col-6 col-md-6">
                <Link to="/profile" type="button" className="btn text-right">
                                Save &amp; Next
                            </Link>
                   
                </div>
            </div>

        </div>
    </section> 
        </>
    )
}

export default SummarieEdit
