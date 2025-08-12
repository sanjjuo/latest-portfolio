import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-10 lg:py-20">
      <p className="text-app-text w-full text-lg lg:text-xl font-light max-w-sm mt-5 lg:m-0">
        I make designs and develop websites for people and help them to grow
        their business.
      </p>
      <div className="space-y-5 max-w-3xl">
        <h1 className="text-5xl lg:text-7xl capitalize font-bold">
          frontend development & web development
        </h1>
        <div className="flex items-center gap-2">
          <Link href="">
            <Button className="bg-white text-app-text rounded-full w-36 h-12 text-[16px] capitalize hover:bg-white hover:rounded-xl transition transform ease-in-out duration-1000 gap-1 shadow-none">
              my story <ArrowRight className="-rotate-45 !w-4 !h-4" />
            </Button>
          </Link>
          <Link href="">
            <Button className="bg-transparent text-app-text rounded-full w-36 h-12 text-[16px] capitalize hover:bg-transparent gap-1 hover:text-app-text hover:rounded-xl transition transform ease-in-out duration-500 shadow-none">
              my services <ArrowRight className="-rotate-45 !w-4 !h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
