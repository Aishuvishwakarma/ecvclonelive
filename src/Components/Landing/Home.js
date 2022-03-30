import React,{useEffect} from 'react'
import SliderSection from "./Slider";
import ServicesSection from "./Services";
import OnlineCv from "./OnlineCv";
import JobsSection from "./JobsSection";
import JobPeocess from "./JobPeocess";
import Testimonial from "./Testimonial";
import BlogsSection from "./BlogsSection"; 
function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [null])
    return (
        <>
           <main>
        <SliderSection />
        <ServicesSection />
        <OnlineCv />
        <JobsSection />
        <JobPeocess />
        <Testimonial />    
        <BlogsSection />     
    </main>   
        </>
    )
}

export default Home

