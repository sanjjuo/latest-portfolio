"use client";
import AppButton from "@/components/common/AppButton/AppButton";
import Link from "next/link";
import { projectsData } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Projects = () => {
  useGSAP(() => {
    gsap.to("#project-section", {
      scrollTrigger: {
        trigger: "#project-section",
        start: " top 80%",
        end: "top 30%",
        scrub: true,
        pin: true,
        markers: true,
      },
    });
  }, []);
  return (
    <section id="project-section" className="space-y-5">
      <div className="bg-app-projectBg rounded-2xl px-10 py-0 space-y-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-10 lg:space-y-0">
          <div className="space-y-10">
            <h1 className="text-white text-2xl capitalize font-medium font-heading">
              Featured work
            </h1>
            <div className="relative max-h-[500px] overflow-y-auto scrollbar-hide">
              <div className="sticky top-0 h-20 bg-gradient-to-b from-app-projectBg to-transparent pointer-events-none z-10"></div>
              <ul className="relative z-0">
                {projectsData.map((data) => (
                  <Link href="" key={data.id}>
                    <li className="text-white text-5xl lg:text-[75px] flex flex-col lg:flex-row items-start lg:items-center gap-2 font-bold hover:transition-all transform hover:translate-x-5 duration-200 ease-in mb-5">
                      <span>{data.title}</span>
                      <span className="text-base font-light">
                        [{data.timeframe}]
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
              <div className="sticky bottom-0 h-20 bg-gradient-to-t from-app-projectBg to-transparent pointer-events-none z-10"></div>
            </div>
          </div>

          <div
            id="project-images"
            className="max-h-[700px] overflow-y-auto scrollbar-hide space-y-5 cursor-default py-20"
          >
            {projectsData.map((data) => (
              <div
                key={data.id}
                className="relative lg:w-[760px] h-[570px] group overflow-hidden rounded-2xl"
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="object-cover rounded-2xl w-full h-full transition-all duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute -bottom-1/2 right-1/2 translate-x-1/2 rounded-full backdrop-blur-xl bg-white/10 w-8 h-8 group-hover:w-[1200px] group-hover:h-[1200px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-90 flex items-center justify-center">
                  <Link
                    href=""
                    className="text-app-text font-medium text-2xl capitalize font-heading bg-white rounded-full w-24 h-24 flex items-center justify-center transition-all transform ease-in-out duration-200 hover:text-3xl"
                  >
                    view
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <AppButton name="Explore my works" href="" style="project-btn" />
      </div>
    </section>
  );
};

export default Projects;
