import React from "react";
import { socialMediaIconData } from "./data";
import Link from "next/link";

const SocialMediaIcons = () => {
  return (
    <ul className="flex items-center gap-40">
      {socialMediaIconData.map((item) => (
        <Link href={item.href} key={item.id}>
          <li className="flex items-center gap-1 text-white text-xl border-b border-transparent hover:border-b-white">
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
