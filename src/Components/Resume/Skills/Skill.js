import React from 'react'
import { Link, NavLink } from "react-router-dom";
function Skill() {
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
                                            Tips for your
                                            <strong>Skills section</strong>
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
                                                <p>List your top skills. The more relevant they are to the job you are applying for, the better.</p>
                                            </div>

                                            <div>
                                                <i className="fas fa-check"></i>
                                                <p>Use one or two keywords, not complete sentences. For example: "Project Management", "Online Marketing", "HTML", "SEO", etc.</p>
                                            </div>



                                            <div>
                                                <i className="fas fa-check"></i>
                                                <p>Make sure to include all important skills for the job you are applying for, even if you are not proficient on some of them.</p>
                                            </div>

                                            <div>
                                                <i className="fas fa-check"></i>
                                                <p>Keep it short. Try to showcase no more than 8 skills.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-6 col-md-6">
                                        <a href="experiences_new_list.html" type="button" className="btn back_btn">
                                            Back
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <Link to="/EditResume/skilledit" type="button" className="btn text-right">
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

export default Skill
