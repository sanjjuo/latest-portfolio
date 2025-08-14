"use client";
import AppButton from "@/components/common/AppButton/AppButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutMe = () => {
  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-section",
        start: "top 100%",
        end: "0% 0%",
        scrub: true,
      },
    });

    scrollTimeline
      .fromTo(
        "#about-para",
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "+=2"
      )
      .fromTo(
        "#job-roles",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
  }, []);

  return (
    <section
      id="about-section"
      className="flex flex-col-reverse lg:flex-row items-center justify-between app-padding"
    >
      <p
        id="about-para"
        className="text-app-text w-full text-lg font-light max-w-lg mt-5 lg:m-0"
      >
        I create stunning designs and build powerful websites that help people
        and businesses stand out online. My work focuses on driving growth by
        making their brands more visible, engaging, and successful.
      </p>
      <div className="space-y-5 max-w-3xl">
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
