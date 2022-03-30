import React from 'react'
import { Link, NavLink } from "react-router-dom";
function ExperiencesNewList() {
    return (
        <>
          
    <section style={{marginTop:'150px'}} className="pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading_bg mb-4">
                                <h4>
                                    <strong>Experience</strong>
                                </h4>
                                <p>LList your work experience, from the most recent to the oldest. Feel free to use our pre-written examples. </p>
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

            <div className="form_main row p-0"  style={{boxShadow:'none'}}  action="">
                <div className="col-12 col-md-4 order-1 order-md-0">
                    <a href="experiences_new.html" type="button" className="btn back_btn">
                        Back
                    </a>
                </div>
                <div className="col-12 col-md-4">
                    <a className="btn back_btn add_btn" href="#">
                        <i className="fa fa-plus-circle"></i>Add another position
                    </a>
                </div>


                <div className="col-12 col-md-4">
                    <a href="educations_tips.html" type="button" className="btn text-right">
                        Save &amp; Next
                    </a>
                </div>


            </div>

        </div>
    </section> 
        </>
    )
}

export default ExperiencesNewList
