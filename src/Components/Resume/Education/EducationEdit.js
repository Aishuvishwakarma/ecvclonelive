import React from 'react'
import { Link, NavLink } from "react-router-dom";
function EducationEdit() {
    return (
        <>

          
            <section style={{marginTop:'150px'}}  className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading_bg mb-4">
                                        <h4>
                                            <strong>Education</strong>
                                        </h4>
                                        <p>Add information about your educational background.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="box_addrass d-flex">
                                        <div className="inner_ad">
                                            <h4>Aarif dewas desing</h4>
                                            <p>Jan. 2009 – Jan. 2020</p>
                                        </div>

                                        <div className="copy_right_icon">
                                            <a href="#"><i className="fa fa-edit"></i></a>
                                            <a href="#"><i className="fa fa-trash"></i></a>
                                        </div>
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

                    <div className="form_main row p-0" style={{ boxShadow: 'none' }} >
                        <div className="col-12 col-md-4 order-1 order-md-0">
                            <a href="educations_tips.html" type="button" className="btn back_btn">
                                Back
                            </a>
                        </div>
                        <div className="col-12 col-md-4 ">
                            <a className="btn back_btn add_btn" href="#">
                                <i className="fa fa-plus-circle"></i>Add another position
                            </a>
                        </div>


                        <div className="col-12 col-md-4 ">
                            <Link to="/EditResume/skill" type="button" className="btn text-right">
                                Save &amp; Next
                            </Link>
                        </div>


                    </div>

                </div>
            </section>

        </>
    )
}

export default EducationEdit
