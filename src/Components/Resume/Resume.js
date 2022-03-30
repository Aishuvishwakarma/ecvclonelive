import React,{useEffect} from 'react'
import { Link, NavLink } from "react-router-dom";

function Resume() {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [null])
    return (
        <>
       
        <section className="body_content_resume pt-5 pb-5">
        <div className="container">
            <h2 className="heading_bg text-center mb-10"><strong>BUILDING A PERFECT RESUME HAS NEVER BEEN THIS EASY!</strong></h2>
            <div className="row pn_line">
                <div className="col-12 col-md-4 col-sm-6 mb-4">
                    <div  className="circle_resume">
                        <i  class="far fa-clipboard"></i>
                        <span>1</span>
                    </div>
                    <p className="text-center mt-4">Choose a professional<br/>resume template</p>
                </div>

                <div className="col-12 col-md-4 col-sm-6 mb-4">
                    <div className="circle_resume">
                       <i className="fas fa-edit"></i>
                        <span>2</span>
                    </div>
                    <p className="text-center mt-4">Build your resume using our pre-written<br/> examples
                    </p>
                </div>

                <div className="col-12 col-md-4 col-sm-6">
                    <div className="circle_resume">
                       <i className="fas fa-download"></i>
                        <span>3</span>
                    </div>
                    <p className="text-center mt-4">Download your resume and start<br/> impressing employers
                    </p>
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="cv-caption text-center">
                           
                                <Link to="/EditResume/personalinfo" style={{backgroundColor:'#DA2461'}} className="border-btn2 " type="button">Build My Resume</Link>
                              
                            </div>
                            <div className="btn_build_inner text-center">

                            <p>By clicking "build my resume", you agree to our <Link to=''>Terms of Use</Link> and <Link to=''>Privacy Policy.</Link></p>

                        </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </section>
  
        </>
    )
}

export default Resume
