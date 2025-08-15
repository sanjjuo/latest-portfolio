"use client";
import AnimatedList from "@/components/React-bits/AnimatedList/AnimatedList";
import React from "react";
import { projectsData } from "./data";

const ProjectNameList = () => {
  return (
    <AnimatedList
      items={projectsData.map((project) => project.title)}
      onItemSelect={(item, index) => console.log(item, index)}
      showGradients={true}
      enableArrowNavigation={true}
      displayScrollbar={false}
      className="text-5xl"
    />
  );
};

export default ProjectNameList;
