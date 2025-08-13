import AppButton from "@/components/common/AppButton/AppButton";
import Link from "next/link";
import { projectsData } from "./data";

const Projects = () => {
  return (
    <div className="bg-app-projectBg rounded-2xl p-10 space-y-10">
      <h1 className="text-white text-2xl capitalize font-medium font-heading">
        Featured work
      </h1>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-10 lg:space-y-0">
        <div className="max-h-[700px] overflow-y-auto scrollbar-hide">
          <ul className="">
            {projectsData.map((data) => (
              <Link href="" key={data.id}>
                <li className="text-white text-5xl lg:text-7xl flex flex-col lg:flex-row items-start lg:items-center gap-2 font-bold hover:transition-all transform hover:translate-x-5 duration-200 ease-in mb-10">
                  <span>{data.title}</span>
                  <span className="text-base font-light">
                    [{data.timeframe}]
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="max-h-[900px] overflow-y-auto scrollbar-hide space-y-5 cursor-pointer">
          {projectsData.map((data) => (
            <div key={data.id} className="relative lg:w-[700px] h-96">
              <img
                src={data.image}
                alt={data.title}
                className="object-cover rounded-2xl w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <AppButton name="Explore my works" href="" style="project-btn" />
    </div>
  );
};

export default Projects;
