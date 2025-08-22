import AppButton from "@/components/common/AppButton/AppButton";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import React from "react";
import { servicesData } from "./data";
import Image from "next/image";

const OurServices = () => {
  return (
    <section className="app-padding space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20 h-[500px]">
        {/* header part */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center lg:space-y-10">
          <h1 className="heading-text lg:text-[155px]">my services</h1>
          <div className="hidden lg:block">
            <AppButton name="view all services" href="" style="normal-btn" />
          </div>
        </div>
        {/* service items */}
        <div className="lg:col-span-3">
          {servicesData.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="group relative overflow-hidden rounded-md w-full transition-all transform ease-in-out duration-700 h-20 lg:h-28 hover:h-32 lg:hover:h-40 cursor-pointer select-none">
                <Image
                  src={item.image}
                  alt={item.service}
                  fill
                  quality={100}
                  priority
                  className="scale-0 group-hover:scale-100 w-full h-full object-cover rounded-md"
                />

                <div className="bg-black/70 absolute inset-0 scale-0 group-hover:scale-100"></div>
                <div className="absolute inset-0 flex items-center justify-between">
                  <span className="pl-5 lg:p-0 text-2xl lg:text-[50px] text-app-text font-semibold transition-all duration-300 ease-in-out group-hover:translate-x-5 group-hover:text-white">
                    {item.service}
                  </span>
                  <span className="w-20 h-20 transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100 group-hover:block">
                    <ArrowRight className="w-full h-full -rotate-45 stroke-app-text group-hover:stroke-white transition-colors duration-300" />
                  </span>
                </div>
              </div>
              {index < servicesData.length - 1 && (
                <Separator
                  orientation="horizontal"
                  className="w-full h-px bg-app-text"
                />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="lg:hidden flex items-center justify-center">
          <AppButton name="view all services" href="" style="normal-btn" />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
