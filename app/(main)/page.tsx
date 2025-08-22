"use client";
import React from "react";
import AboutMe from "@/components/Home/AboutMe/AboutMe";
import Blog from "@/components/Home/Blog/Blog";
import ContactMe from "@/components/Home/ContactMe/ContactMe";
import Hero from "@/components/Home/Hero/Hero";
import OurServices from "@/components/Home/OurServices/OurServices";
// import Projects from "@/components/Home/Projects/Projects";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import WorkSlider from "@/components/Home/WorkSlider/WorkSlider";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Works from "@/components/Home/Projects/Works";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="app-width">
        <WorkSlider />
        <AboutMe />
        {/* <Projects /> */}
        <Works />
        <OurServices />
        <ContactMe />
        <Testimonials />
        <Blog />
      </div>
    </>
  );
};

export default HomePage;
