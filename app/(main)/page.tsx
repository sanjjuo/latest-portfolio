import AboutMe from "@/components/Home/AboutMe/AboutMe";
import ContactMe from "@/components/Home/ContactMe/ContactMe";
import Hero from "@/components/Home/Hero/Hero";
import OurServices from "@/components/Home/OurServices/OurServices";
import Projects from "@/components/Home/Projects/Projects";
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
      </div>
    </>
  );
};

export default HomePage;
