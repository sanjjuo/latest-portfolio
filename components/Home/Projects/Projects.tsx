import AppButton from "@/components/common/AppButton/AppButton";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "./data";

const Projects = () => {
  return (
    <div className="bg-app-projectBg rounded-2xl p-10 space-y-10">
      <h1 className="text-white text-2xl capitalize font-medium font-heading">
        Featured work
      </h1>
      <div className="flex items-center justify-between">
        <div className="max-h-[600px] overflow-y-auto scrollbar-hide">
          <ul className="">
            {projectsData.map((data) => (
              <Link href="" key={data.id}>
                <li className="text-white text-7xl flex items-center gap-2 font-bold hover:transition-all transform hover:translate-x-5 duration-200 ease-in mb-10">
                  <span>{data.title}</span>
                  <span className="text-base font-light">
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
              <img
                src={data.image}
                alt={data.title}
                className="object-cover rounded-2xl w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <AppButton name="Explore my works" href="" style="normal-btn" />
    </div>
  );
};

export default Projects;
