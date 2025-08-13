"use client";
import SocialMediaIcons from "@/components/common/SocialMediaIcons/SocialMediaIcons";
import LargeText from "./LargeText";
import Location from "./Location";
import SmallText from "./SmallText";
import React from "react";

const Hero = () => {
  const [time, setTime] = React.useState("");

  React.useEffect(() => {
    const updateTime = () => {
      const dubaiTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(dubaiTime);
    };

    updateTime(); // set initial time
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <div className="relative flex flex-col items-center justify-center h-[calc(100vh-10rem)] lg:h-[calc(100vh-2rem)] overflow-hidden rounded-2xl">
      <div className="mb-20 lg:m-0">
        <div className="flex items-end gap-5">
          <div className="hidden lg:block max-w-[150px] text-right">
            <SmallText text="I am Indian frontend developer based in Dubai, UAE" />
          </div>
          <div className="h-28 lg:h-[280px] max-w-full">
            <LargeText text="FRONTEND" />
          </div>
        </div>
        <div className="flex items-end gap-5">
          <div className="h-24 lg:h-[300px] max-w-full">
            <LargeText text="DEVELOPER" />
          </div>
          <div className="hidden lg:block max-w-[170px] text-left">
            <SmallText text="I create designs and build web experiences that bring ideas to life." />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-end justify-between w-full mt-20">
          <p className="font-heading">Dubai, UAE {time}</p>
          <p className="text-5xl font-heading font-extrabold">
            - Mohamed Sanjeed
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 left-10 right-10 flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center lg:justify-between">
        <div>
          <SocialMediaIcons placement="hero-section" />
        </div>
        <div className="mb-5 lg:m-0">
          <Location />
        </div>
      </div>
    </div>
  );
};

export default Hero;
