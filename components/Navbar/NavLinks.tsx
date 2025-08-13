import React from "react";
import { navLinkData } from "./data";
import Link from "next/link";
import { useIsScrolledHook } from "../hooks/isScrolledHook";
import { cn } from "@/lib/utils";

const NavLinks = () => {
  const { isScrolled } = useIsScrolledHook();
  return (
    <ul className="flex items-center gap-5">
      {navLinkData.map((item) => (
        <Link href={item.href} key={item.id}>
          <li
            className={cn(
              isScrolled ? "text-white font-light" : "text-app-text font-light",
              "text-sm tracking-wide  capitalize"
            )}
          >
            [{item.label}]
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
