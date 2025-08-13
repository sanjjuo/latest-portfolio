import React from "react";
import TestimonialCards from "./TestimonialCards";

const Testimonials = () => {
  return (
    <div className="app-padding">
      <h1 className="text-center font-heading text-5xl capitalize">
        what client says
      </h1>
      <div className="flex items-center justify-center mt-10">
        <TestimonialCards />
      </div>
    </div>
  );
};

export default Testimonials;
