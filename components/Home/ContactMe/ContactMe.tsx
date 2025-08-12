"use client";
import ScrollVelocity from "@/components/React-bits/ScrollVelocity/ScrollVelocity";
import Link from "next/link";
import React from "react";

const ContactMe = () => {
  return (
    <ScrollVelocity
      damping={100}
      texts={[
        <Link href="" className="flex items-center gap-1 ">
          <span
            key="contact-line"
            className="text-6xl lg:text-[200px] text-app-text"
          >
            Contact Me
          </span>
          <img
            src="/images/contact.jpg"
            alt="star"
            className="w-20 h-20 lg:w-60 lg:h-60 rounded-full object-cover mx-10 lg:mx-20"
          />
        </Link>,
      ]}
      velocity={-100}
      className="custom-scroll-text"
    />
  );
};

export default ContactMe;
