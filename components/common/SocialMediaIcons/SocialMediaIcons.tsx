import React from "react";
import { socialMediaIconData } from "./data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SocialMediaIcons = ({ placement }: { placement: string }) => {
  return (
    <ul className="flex items-center gap-1">
      {socialMediaIconData.map((item) => (
        <Link href={item.href} key={item.id}>
          <li
            className={cn(
              placement === "mobile-sidebar"
                ? "bg-app-projectBg stroke-white fill-white"
                : "bg-white stroke-app-text fill-app-text",
              "flex items-center justify-center gap-1 rounded-full p-2 hover:rounded-md w-14 h-6"
            )}
          >
            <span className="w-4 h-4">{item.icon}</span>
            <ArrowRight
              className={cn(
                placement === "mobile-sidebar"
                  ? "stroke-white"
                  : "stroke-app-text",
                "-rotate-45 w-4 h-4"
              )}
            />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
