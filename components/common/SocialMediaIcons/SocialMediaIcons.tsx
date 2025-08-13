import React from "react";
import { socialMediaIconData } from "./data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SocialMediaIcons = () => {
  return (
    <ul className="flex items-center gap-1">
      {socialMediaIconData.map((item) => (
        <Link href={item.href} key={item.id}>
          <li className="flex items-center gap-1 bg-white rounded-full px-2 py-1 hover:rounded-md">
            {item.icon}
            <ArrowRight className="-rotate-45 w-4 h-4" />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
