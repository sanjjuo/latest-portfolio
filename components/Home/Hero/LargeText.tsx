"use client";
import DecryptedText from "@/components/React-bits/DecryptedText/DecryptedText";
import React from "react";

const LargeText = () => {
  return (
    <DecryptedText
      text="sanjeed"
      animateOn="view"
      revealDirection="center"
      speed={100}
      maxIterations={30}
      className="text-white text-[100px] lg:text-[380px] font-custom z-50"
      encryptedClassName="text-white text-[100px] lg:text-[380px] font-custom z-50"
    />
  );
};

export default LargeText;
