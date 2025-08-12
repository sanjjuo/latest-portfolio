"use client";
import AppButton from "@/components/common/AppButton/AppButton";
import LargeText from "./LargeText";
import SocialMediaIcons from "@/components/common/SocialMediaIcons/SocialMediaIcons";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[calc(100vh-10rem)] lg:h-[calc(100vh-2rem)] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[url('/images/hero-img.jpg')] bg-center bg-cover blur-sm h-full"></div>
      <div className="absolute inset-0 bg-black/80 bg-center"></div>
      <div className="absolute inset-5 lg:inset-0 flex flex-col items-center justify-center space-y-10">
        <div className="flex flex-col items-center space-y-10">
          <div className="h-24 lg:h-[450px]">
            <LargeText />
          </div>
          <SocialMediaIcons />
          <AppButton name="Talk to me" href="" style="normal-btn" />
        </div>
      </div>

      <div className="absolute right-10 bottom-10 flex flex-col -space-y-2 items-center text-white">
        <span className="text-lg font-medium tracking-wide">
          Al Muteena, Deira
        </span>
        <span className="font-medium tracking-wide">Dubai, UAE</span>
      </div>
    </div>
  );
};

export default Hero;
