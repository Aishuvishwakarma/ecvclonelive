import React from 'react'
import { Link, NavLink } from "react-router-dom";
function EducationTips() {
    return (
        <>
           
            <section style={{marginTop:'150px'}}  className="body_content_resume pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading_bg mb-5">
                                        <h3>
                                            Tips for your
                                            <strong>Education section</strong>
                                        </h3>

                                    </div>
                                </div>
                            </div>



                            <form className="form_main bg_none" action="">
                                <div className="row mb-5">
                                    <div className="col-12">

                                        <div className="check_text">
                                            <div>
                                                <i className="fas fa-check"></i>
                                                <p>Start off by listing your degrees from most recent to oldest.</p>
                                            </div>

                                            <div>
                                                <i className="fas fa-check"></i>
                                                <p>If you have still not graduated, list the date you expect to graduate.</p>
                                            </div>



                                            <div>
                                                <i className="fas fa-check"></i>
                                                <p>High school graduation shouldn’t be mentioned on your resume unless you haven’t gone to college.</p>
                                            </div>

                                            <div>
                                                <i className="fas fa-check"></i>
                                                <p>Mention any scholarships, honors, awards, and professional certifications you have earned.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-6 col-md-6">
                                        <a href="educations.html" type="button" className="btn back_btn">
                                            Back
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <Link to="/EditResume/educationEdit" type="button" className="btn text-right">
                                            Save &amp; Next
                                        </Link>

                                    </div>
                                </div>

                            </form>


                        </div>
                        
                    </div>

                </div>
            </section>

        </>
    )
}

export default EducationTips
