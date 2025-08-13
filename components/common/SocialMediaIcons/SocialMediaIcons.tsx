import React from "react";
import { socialMediaIconData } from "./data";
import Link from "next/link";

const SocialMediaIcons = () => {
  return (
    <ul className="flex items-center gap-5">
      {socialMediaIconData.map((item) => (
        <Link href={item.href} key={item.id}>
          <li className="bg-white rounded-full p-2">{item.icon}</li>
        </Link>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
