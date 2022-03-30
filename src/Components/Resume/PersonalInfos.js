import React from 'react'
import { Link, NavLink } from "react-router-dom";

function PersonalInfos() {
    return (
        <>
    <section className="body_content_resume mt-5 pt-5 pb-5">
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 col-md-9">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading_bg mb-5">
                                <h4>
                                    COMPLETE YOUR
                                    <strong>RESUME HEADING</strong>
                                </h4>
                                <p>Employers will use this information to contact you.</p>
                            </div>
                        </div>
                    </div>
                    <form className="form_main" action="">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p>First name</p>
                                <input type="text" placeholder="e.g.john" />

                            </div>
                            <div className="col-12 col-md-6">
                                <p>Last name</p>
                                <input type="text" placeholder="e.g. Williams" />
                            </div>
                            <div className="col-12">
                                <p>Address</p>
                                <input type="text" placeholder="e.g. 60, Collins st." />
                            </div>
                            <div className="col-12 col-md-6">
                                <p>City</p>
                                <input type="text" placeholder="e.g. San Franciso" />
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <div className="col-6">
                                        <p>Zip Codr</p>
                                        <input type="text" placeholder="e.g. 60185" />
                                    </div>
                                    <div className="col-6">
                                        <p>Country</p>
                                        <select>
                                            <option>India</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <p>Email Address</p>
                                <input type="text" placeholder="e.g. john_williams@example.com" />
                            </div>
                            <div className="col-12 col-md-6">
                                <p>Phone</p>
                                <input type="text" placeholder="e.g. 202-555-0145" />
                            </div>


                            <div className="col-6 col-md-6">
                                <a href="index.html" type="button" className="btn back_btn">
                                    Back
                                </a>
                            </div>
                            <div className="col-6 col-md-6">
                          
                                <Link to="/EditResume/experiencestips" type="button" className="btn text-right">
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

export default PersonalInfos
