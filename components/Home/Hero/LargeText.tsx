"use client";
import DecryptedText from "@/components/React-bits/DecryptedText/DecryptedText";
import React from "react";

const LargeText = ({ text }: { text: string }) => {
  return (
    <DecryptedText
      text={text}
      animateOn="view"
      revealDirection="center"
      speed={100}
      maxIterations={30}
      className="text-app-text text-[100px] lg:text-[350px] name-title z-50"
      encryptedClassName="text-app-text text-[100px] lg:text-[350px] name-title z-50"
    />
  );
};

export default LargeText;
