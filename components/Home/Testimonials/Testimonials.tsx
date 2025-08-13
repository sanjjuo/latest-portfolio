import React from "react";
import TestimonialCards from "./TestimonialCards";

const Testimonials = () => {
  return (
    <div className="app-padding">
      <h1 className="text-center font-heading text-5xl capitalize">
        what client says
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-20">
        <TestimonialCards />
      </div>
    </div>
  );
};

export default Testimonials;
