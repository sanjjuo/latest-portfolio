import React from "react";
import TestimonialCards from "./TestimonialCards";

const Testimonials = () => {
  return (
    <div className="app-padding">
      <h1 className="heading-text text-center">what client says</h1>
      <div className="flex items-center justify-center mt-10">
        <TestimonialCards />
      </div>
    </div>
  );
};

export default Testimonials;
