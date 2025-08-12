import React from "react";
import { navLinkData } from "./data";
import Link from "next/link";
import { useIsScrolledHook } from "../hooks/isScrolledHook";
import { cn } from "@/lib/utils";

const NavLinks = () => {
  const { isScrolled } = useIsScrolledHook();
  return (
    <ul className="flex items-center gap-10">
      {navLinkData.map((item) => (
        <Link href={item.href} key={item.id}>
          <li
            className={cn(
              isScrolled
                ? "text-app-text font-light"
                : "text-white font-extralight",
              "text-sm tracking-wide  capitalize"
            )}
          >
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
