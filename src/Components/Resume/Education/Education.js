import React from 'react'
import { Link, NavLink } from "react-router-dom";
function Education() {
    return (
        <>
          
    <section style={{marginTop:'150px'}} className="body_content_resume pt-5 pb-5"> 
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-9">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading_bg mb-5">
                                <h3>
                                    <strong>Education</strong>
                                </h3>
                                <p>Add information about your educational background.</p>
                            </div>
                        </div>
                    </div>
                    <form className="form_main" action="">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p>School name</p>
                                <input type="text" placeholder="e.g. Harvard University" />

                            </div>
                            <div className="col-12 col-md-6">
                                <p>City</p>
                                <input type="text" placeholder="e.g. San Franciso" />
                            </div>

                            <div className="col-12 col-md-6">
                                <p>State</p>
                                <input type="text" placeholder="e.g. California" />
                            </div>

                            <div className="col-6">
                                <p>Select a degree</p>
                                <select>
                                    <option>Select a degree</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>


                            <div className="col-12 col-md-6">
                                <p>Field of study</p>
                                <input type="text" placeholder="e.g. Engineering" />
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <div className="col-6">
                                        <p>Graduation date</p>
                                        <select>
                                            <option>Month</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <p style={{opacity:'0'}}>demo</p>
                                        <select>
                                            <option>Year</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className="col-6 col-md-6">
                                <a href="summaries_edit.html" type="button" className="btn back_btn">
                                    Back
                                </a>
                            </div>
                            <div className="col-6 col-md-6">
                            <Link to="/EditResume/educationEditlist" type="button" className="btn text-right">
                                Save &amp; Next
                            </Link>
                               
                            </div>
                        </div>

                    </form>

                </div>
                <div className="col-12 col-md-3">

                </div>
            </div>

        </div>
    </section> 
        </>
    )
}

export default Education
