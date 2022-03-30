import React,{useEffect} from 'react'
import LandingCss from './Landing.module.css'
import JobPeocess from "./JobPeocess";
import OnlineCv from "./OnlineCv";
import SupportImg from "../../assets/img/service/support-img.jpg";
function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [null])
    return (
        <>
             <div className="slider-area">
            <div id={LandingCss.aboutbg} className="single-slider section-overly slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center"> 
                                <h2>About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        <div class="mb-5 support-company-area support-padding fix">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-6">
                        <div class="right-caption">
                            
                            <div class="section-tittle section-tittle2">
                                <span>What we are doing</span>
                                <h2>24k Talented people are getting Jobs</h2>
                            </div>
                            <div class="support-caption">
                                <p class="pera-top">Mollit anim laborum duis au dolor in voluptate velit ess cillum dolore eu lore dsu quality mollit anim laborumuis au dolor in voluptate velit cillum.</p>
                                <p>Mollit anim laborum.Duis aute irufg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur signjnt occa cupidatat non inulpadeserunt mollit aboru. temnthp incididbnt ut labore mollit anim laborum suis aute.</p>
                                <a href="about.html" class="btn post-btn">Post a job</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="support-location-img">
                            <img src={SupportImg} alt="" />
                            <div class="support-img-cap text-center">
                                <p>Since</p>
                                <span>1994</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <OnlineCv />
        <JobPeocess />
        </>
    )
}

export default About
