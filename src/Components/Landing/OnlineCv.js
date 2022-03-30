import React from 'react'

import LandingCss from './Landing.module.css'
function OnlineCv() {
    return (
        <>
            <div id={LandingCss.cvbg} class="online-cv cv-bg section-overly pt-90 pb-120" >
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="cv-caption text-center">
                                <p class="pera1">FEATURED TOURS Packages</p>
                                <p class="pera2"> Make a Difference with Your Online Resume!</p>
                                <a href="#" class="border-btn2 border-btn4">Upload your cv</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnlineCv
