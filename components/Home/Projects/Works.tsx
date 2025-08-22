"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "./data";
import { Button } from "@/components/ui/button";

const Works = () => {
  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".project-card");
    const distance = sections.length * sections[0].offsetWidth;

    gsap.to(sections, {
      xPercent: -78 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#project-section",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + distance,
      },
    });
  }, []);

  return (
    <section
      id="project-section"
      className="bg-app-projectBg rounded-2xl p-5 lg:p-10 space-y-10"
    >
      <h1 className="heading-text text-white text-center">Featured work</h1>
      <div className="flex items-center gap-5 overflow-hidden">
        {projectsData.slice(0, 4).map((data) => (
          <div
            key={data.id}
            className="project-card relative min-w-[1000px] h-[600px] group overflow-hidden rounded-2xl"
          >
            {data.image && (
              <Image
                src={data.image}
                alt={data.title}
                fill
                priority
                quality={100}
                unoptimized
                className="object-cover rounded-2xl min-w-full h-full transition-all duration-300 ease-in-out group-hover:scale-105"
              />
            )}
            <div className="absolute -bottom-1/2 right-1/2 translate-x-1/2 rounded-full backdrop-blur-xl bg-white/10 w-8 h-8 group-hover:w-[1200px] group-hover:h-[1200px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-90 flex flex-col items-center justify-center gap-5">
              <h1 className="heading-text text-[140px]">{data.title}</h1>
              <Link
                href=""
                className="transition-all transform ease-in-out duration-200 hover:text-2xl"
              >
                <Button className="capitalize font-heading">
                  view details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
