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
        hour12: false,
      });
      setTime(dubaiTime);
    };

    updateTime(); // set initial time
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <div className="relative flex flex-col items-center justify-center space-y-10 h-[calc(100vh-10rem)] lg:h-[calc(100vh-2rem)] overflow-hidden rounded-2xl">
      <div className="space-y-10">
        <div className="flex items-end gap-5">
          <div className="max-w-[150px] text-right">
            <SmallText text="I am Indian frontend developer based in Dubai, UAE" />
          </div>
          <div className="h-24 lg:h-[200px] max-w-full">
            <LargeText text="FRONTEND" />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="h-24 lg:h-[300px] max-w-full">
            <LargeText text="DEVELOPER" />
          </div>
          <div className="max-w-[170px] text-left">
            <SmallText text="I create designs and build web experiences that bring ideas to life." />
          </div>
        </div>
        <div className="flex items-end justify-between w-full">
          <p className="font-heading">Dubai, UAE {time}</p>
          <p className="text-5xl font-heading font-extrabold">
            - Mohamed Sanjeed
          </p>
        </div>
      </div>

      <div className="absolute bottom-5 right-10 flex items-end justify-between w-full">
        <div className="w-full">
          <SocialMediaIcons />
        </div>
        <div className="w-full">
          <Location />
        </div>
      </div>
    </div>
  );
};

export default Hero;
