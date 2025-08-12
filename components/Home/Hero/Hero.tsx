"use client";
import AppButton from "@/components/common/AppButton/TalktoMeBtn";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[calc(100vh-10rem)] lg:h-[calc(100vh-2rem)] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[url('/images/hero-img.jpg')] bg-center bg-cover blur-sm h-full"></div>
      <div className="absolute inset-0 bg-black/80 bg-center"></div>
      <div className="absolute inset-5 lg:inset-0 flex flex-col items-center justify-center space-y-10">
        <div className="flex flex-col items-center space-y-10">
          <div className="text-center lg:text-start -space-y-1 lg:-space-y-12">
            <h1 className="uppercase text-white text-[40px] lg:text-[180px] font-custom">
              sanjeed
            </h1>
            <p className="flex items-center justify-around text-white w-full text-lg lg:text-2xl uppercase font-thin">
              i make designs and develop websites for people and help them to
              grow their business.
            </p>
          </div>
          <AppButton />
        </div>
        {/* <SocialMediaIcons /> */}
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
