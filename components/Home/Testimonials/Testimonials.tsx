import React from "react";
import TestimonialCards from "./TestimonialCards";
import AppButton from "@/components/common/AppButton/AppButton";

const Testimonials = () => {
  return (
    <div className="app-padding">
      <h1 className="heading-text text-center">what client says</h1>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          <TestimonialCards />
        </div>
        <AppButton name="View more" href="" style="testimonial-btn" />
      </div>
    </div>
  );
};

export default Testimonials;
