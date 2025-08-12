import AboutMe from "@/components/Home/AboutMe/AboutMe";
import Hero from "@/components/Home/Hero/Hero";
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
      </div>
    </>
  );
};

export default HomePage;
