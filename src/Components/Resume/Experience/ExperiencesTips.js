import React from 'react'
import { Link, NavLink } from "react-router-dom";
function ExperiencesTips() {
    return (
        <>
         
    <section className="body_content_resume pt-5 pb-5 mt-5">
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-9">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading_bg mb-5">
                                <h3>
                                    Tips for your
                                    <strong>Experience section</strong>
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
                                        <p>Your most recent or current job should be listed first. Then, work in reverse chronological order, from your newest to your oldest jobs.</p>
                                    </div>

                                    <div>
                                        <i className="fas fa-check"></i>
                                        <p>When describing your job duties, avoid using personal pronouns like “I, ” “me”, "my" etc. </p>
                                    </div>



                                    <div>
                                        <i className="fas fa-check"></i>
                                        <p>Showcase your skills by using strong action verbs (“led,” “organized”, "coordinated"). Use figures to add value when possible. For example: "decreased production costs by 20%".</p>
                                    </div>

                                    <div>
                                        <i className="fas fa-check"></i>
                                        <p>Use bullet points to list your job responsibilities in short, direct sentences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-6 col-md-6">
                                <Link href="personal_infos.html" type="button" className="btn back_btn">
                                    Back
                                </Link>
                            </div>
                            <div className="col-6 col-md-6">
                                <Link to='/EditResume/experiencesNew' type="button" className="btn text-right">
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

export default ExperiencesTips
