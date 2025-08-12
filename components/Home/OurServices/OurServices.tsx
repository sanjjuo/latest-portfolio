import AppButton from "@/components/common/AppButton/AppButton";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { servicesData } from "./data";
import { ArrowRight } from "lucide-react";

const OurServices = () => {
  return (
    <section className="app-padding space-y-10">
      {/* header part */}
      <div className="flex items-center justify-between">
        <h1 className="heading-text">my services</h1>
        <AppButton name="view all services" href="" style="normal-btn" />
      </div>
      <Separator orientation="horizontal" className="w-full h-px bg-app-text" />
      {/* service items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
        {servicesData.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-full w-full h-32 cursor-pointer select-none"
          >
            <img
              src={item.image}
              alt={item.service}
              className="scale-0 group-hover:scale-100 w-full h-full object-cover rounded-full"
            />

            <div className="bg-black/70 absolute inset-0 scale-0 group-hover:scale-100"></div>
            <div className="absolute inset-0 flex items-center justify-between">
              <span className="pl-5 lg:p-0 text-3xl lg:text-[50px] text-app-text font-semibold transition-all duration-300 ease-in-out group-hover:translate-x-5 group-hover:text-white">
                {item.service}
              </span>
              <span className="w-20 h-20 transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100 group-hover:block">
                <ArrowRight className="w-full h-full -rotate-45 stroke-app-text group-hover:stroke-white transition-colors duration-300" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
