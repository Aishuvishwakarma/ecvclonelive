import React from 'react'
import LandingCss from './Landing.module.css' 
function Slider() {
    return (
        <>
            <div className="slider-area mt-5">
                <div className="slider-active">
                    <div id={LandingCss.SliderImg} className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-9 col-md-10">
                                    <div className="hero__caption">
                                        <h1>Find the most exciting startup jobs</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-8">

                                    <form action="" className="search-box">
                                        <div className="input-form">
                                            <input id='SearchJob' type="text" placeholder="Job Tittle or keyword" />
                                        </div>
                                        <div className="search-form">
                                            <a href="#">Find job</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider
