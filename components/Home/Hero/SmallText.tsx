import DecryptedText from "@/components/React-bits/DecryptedText/DecryptedText";
import React from "react";

const SmallText = ({ text }: { text: string }) => {
  return (
    <DecryptedText
      text={text}
      animateOn="view"
      revealDirection="center"
      speed={100}
      maxIterations={30}
      className="text-app-text text-base lg:text-lg font-heading"
      encryptedClassName="text-app-text text-base lg:text-lg font-heading"
    />
  );
};

export default SmallText;
