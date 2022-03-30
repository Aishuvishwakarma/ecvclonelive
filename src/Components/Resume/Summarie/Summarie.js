import React from 'react'
import { Link, NavLink } from "react-router-dom";

function Summarie() {
    return (
        <>
            
    <section  style={{marginTop:'100px'}} className="body_content_resume pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-9">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading_bg mb-5">
                                <h3>
                                    Tips for your
                                    <strong>Summary section</strong>
                                </h3>

                            </div>
                        </div>
                    </div>



                    <form className="form_main bg_none" >
                        <div className="row mb-5">
                            <div className="col-12">

                                <div className="check_text">
                                    <div>
                                        <i className="fas fa-check"></i>
                                        <p>Keep your summary short and straight to the point. You can always elaborate during the interview. The optimal length for a professional summary is between 50 and 100 words.</p>
                                    </div>

                                    <div>
                                        <i className="fas fa-check"></i>
                                        <p>Tailor the summary to the job you are applying for. Show the employer exactly why you’re the best fit for this position.</p>
                                    </div>



                                    <div>
                                        <i className="fas fa-check"></i>
                                        <p>Be specific about your background, skills and goals.</p>
                                    </div>

                                    <div>
                                        <i className="fas fa-check"></i>
                                        <p>Remember, the best resume summary should quickly grab recruiters’ attention by shouting out: “Hey, I’m who you are looking for!”</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-6 col-md-6">
                                <a href="skills_edit.html" type="button" className="btn back_btn">
                                    Back
                                </a>
                            </div>
                            <div className="col-6 col-md-6">
                            <Link to="/EditResume/summarieEdit" type="button" className="btn text-right">
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

export default Summarie
