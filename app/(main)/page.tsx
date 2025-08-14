import AboutMe from "@/components/Home/AboutMe/AboutMe";
import Blog from "@/components/Home/Blog/Blog";
import ContactMe from "@/components/Home/ContactMe/ContactMe";
import Hero from "@/components/Home/Hero/Hero";
import OurServices from "@/components/Home/OurServices/OurServices";
import Projects from "@/components/Home/Projects/Projects";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import WorkSlider from "@/components/Home/WorkSlider/WorkSlider";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="app-width">
        <WorkSlider />
        <AboutMe />
        <Projects />
        <OurServices />
        <ContactMe />
        <Testimonials />
        <Blog />
      </div>
    </>
  );
};

export default HomePage;
