"use client";
import AppButton from "@/components/common/AppButton/AppButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-section",
        start: "top bottom", // start when top of section enters viewport bottom
        end: "top 20%", // finish when top reaches 20% from top
        scrub: true,
      },
    });

    scrollTimeline
      .fromTo(
        "#about-para",
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, duration: 1, ease: "expo.inOut" },
        "-=0.2"
      )
      .fromTo(
        "#job-roles",
        { opacity: 0, y: 500 },
        { opacity: 1, y: 0, duration: 2, ease: "expo.inOut" }
      );
  }, []);

  return (
    <section
      id="about-section"
      className="flex flex-col-reverse lg:flex-row items-center justify-between app-padding"
    >
      <p
        id="about-para"
        className="text-app-text w-full text-lg font-medium max-w-lg mt-5 lg:m-0 leading-tight"
      >
        I create stunning designs and build powerful websites that help people
        and businesses stand out online. My work focuses on driving growth by
        making their brands more visible, engaging, and successful.
      </p>
      <div className="space-y-10 max-w-3xl">
        <h1 id="job-roles" className="heading-text">
          frontend development & web development
        </h1>
        <div className="flex items-center gap-2">
          <AppButton name="My story" href="" style="normal-btn" />
          <AppButton name="My services" href="" style="services-btn" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
