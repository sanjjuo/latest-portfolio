"use client";
import DecryptedText from "@/components/React-bits/DecryptedText/DecryptedText";

const LargeText = ({ text }: { text: string }) => {
  return (
    <DecryptedText
      text={text}
      animateOn="view"
      revealDirection="center"
      speed={200}
      maxIterations={10}
      className="text-app-text text-[140px] lg:text-[350px] name-title z-50"
      encryptedClassName="text-app-text text-[140px] lg:text-[350px] name-title z-50"
    />
  );
};

export default LargeText;
