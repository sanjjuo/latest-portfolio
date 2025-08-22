"use client";
import ScrollVelocity from "@/components/React-bits/ScrollVelocity/ScrollVelocity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactMe = () => {
  return (
    <ScrollVelocity
      damping={100}
      texts={[
        // eslint-disable-next-line react/jsx-key
        <Link href="" className="flex items-center gap-5 mr-5">
          <span
            key="contact-line"
            className="text-6xl lg:text-[150px] text-app-text font-heading"
          >
            Contact Me
          </span>
          <div className="relative w-20 h-20 lg:w-40 lg:h-40">
            <Image
              src="/images/contact.jpg"
              alt="star"
              fill
              priority
              quality={100}
              unoptimized
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </Link>,
      ]}
      velocity={-100}
      className="custom-scroll-text"
    />
  );
};

export default ContactMe;
