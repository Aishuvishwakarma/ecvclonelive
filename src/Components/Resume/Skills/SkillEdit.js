import React from 'react'
import { Link, NavLink } from "react-router-dom";
function SkillEdit() {
    return (
        <>
     
            <section style={{marginTop:'100px'}}  className="body_content_resume pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading_bg mb-5">
                                        <h3>
                                            <strong>Skills</strong>
                                        </h3>
                                        <p>Add information about your educational background.</p>
                                    </div>
                                </div>
                            </div>
                            <form className="form_main" action="">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <p>Skills</p>
                                        <input type="text" placeholder="e.g. Project Management" />

                                    </div>
                                    <div className="col-12 col-md-6">
                                        <p>Level</p>
                                        <select>
                                            <option>Select your skill level</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <p>Skills</p>
                                        <input type="text" placeholder="e.g. Online Marketing" />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <p>Level</p>
                                        <select>
                                            <option>Select your skill level</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>


                                    <div className="col-12 col-md-6">
                                        <p>Skills</p>
                                        <input type="text" placeholder="e.g. Engineering" />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <p>level</p>
                                        <select>
                                            <option>Select your skill level</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
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

                    <div className="form_main row p-0" style={{ boxShadow: 'none' }}>
                        <div className="col-12 col-md-4 order-1 order-md-0">
                            <a href="skills.html" type="button" className="btn back_btn">
                                Back
                            </a>
                        </div>
                        <div className="col-12 col-md-4 ">
                            <a className="btn back_btn add_btn" href="#">
                                <i className="fa fa-plus-circle"></i>Add another position
                            </a>
                        </div>


                        <div className="col-12 col-md-4">
                            <Link to="/EditResume/summarie" type="button" className="btn text-right">
                                Save &amp; Next
                            </Link>

                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}

export default SkillEdit
