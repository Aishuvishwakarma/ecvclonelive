import React from 'react'
import Blog1 from "../../assets/img/blog/home-blog1.jpg";
import Blog2 from "../../assets/img/blog/home-blog2.jpg";
function BlogsSection() {
    return (
        <>
            <div class="home-blog-area blog-h-padding">
                <div class="container">

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-tittle text-center">
                                <span>Our latest blog</span>
                                <h2>Our recent news</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="home-blog-single mb-30">
                                <div class="blog-img-cap">
                                    <div class="blog-img">
                                        <img src={Blog1} alt="" />

                                        <div class="blog-date text-center">
                                            <span>24</span>
                                            <p>Now</p>
                                        </div>
                                    </div>
                                    <div class="blog-cap">
                                        <p>|   Properties</p>
                                        <h3><a href="single-blog.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                                        <a href="#" class="more-btn">Read more »</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <div class="home-blog-single mb-30">
                                <div class="blog-img-cap">
                                    <div class="blog-img">
                                        <img src={Blog2} alt="" />

                                        <div class="blog-date text-center">
                                            <span>24</span>
                                            <p>Now</p>
                                        </div>
                                    </div>
                                    <div class="blog-cap">
                                        <p>|   Properties</p>
                                        <h3><a href="single-blog.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                                        <a href="#" class="more-btn">Read more »</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogsSection
