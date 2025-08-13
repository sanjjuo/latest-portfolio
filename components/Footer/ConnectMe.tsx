import React from "react";
import { Input } from "../ui/input";
import { ArrowRight } from "lucide-react";
import SocialMediaIcons from "../common/SocialMediaIcons/SocialMediaIcons";

const ConnectMe = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-semibold text-white font-heading">
        Connect with me
      </h1>
      <div className="flex items-center justify-between rounded-full pl-5 py-2 pr-2 bg-app-inputBg h-16 lg:w-[600px]">
        <Input
          placeholder="Your Email Address"
          className="border-none shadow-none focus:!ring-0 placeholder:text-2xl placeholder:font-bold h-full flex items-center !text-2xl text-white"
        />
        <span className="bg-[#B2F6E3] p-3 rounded-full flex items-center justify-center cursor-pointer duration-200 transition ease-in-out">
          <ArrowRight
            strokeWidth={1.5}
            className="w-7 h-7 -rotate-45 hover:rotate-45"
          />
        </span>
      </div>
      <SocialMediaIcons />
    </div>
  );
};

export default ConnectMe;
