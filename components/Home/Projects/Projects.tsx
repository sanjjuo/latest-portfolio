import React from "react";
import { projectsData } from "./data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="bg-app-projectBg rounded-2xl p-10 space-y-10">
      <h1 className="text-white text-2xl capitalize font-bold">
        Featured work
      </h1>
      <div className="flex items-center justify-between">
        <div className="max-h-[600px] overflow-y-auto scrollbar-hide">
          <ul className="">
            {projectsData.map((data) => (
              <Link href="" key={data.id}>
                <li className="text-white text-7xl flex items-center gap-2 font-bold hover:transition-all transform hover:translate-x-5 duration-200 ease-in mb-5">
                  <span>{data.title}</span>
                  <span className="text-lg font-normal">
                    [{data.timeframe}]
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="max-h-[1000px] overflow-y-auto scrollbar-hide space-y-5 cursor-pointer">
          {projectsData.map((data) => (
            <div key={data.id} className="relative w-[700px] h-96">
              <Image
                src={data.image}
                fill
                priority
                quality={100}
                alt={data.title}
                className="object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
      <Link href="">
        <Button className="bg-white text-app-text rounded-full w-auto h-12 text-[16px] capitalize hover:bg-white gap-1 hover:rounded-xl transition-transform ease-in duration-700">
          Explore more work <ArrowRight className="-rotate-45 !w-4 !h-4" />
        </Button>
      </Link>
    </div>
  );
};

export default Projects;
