import React from "react";
import { navLinkData } from "./data";
import Link from "next/link";

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-10">
      {navLinkData.map((item) => (
        <Link href={item.href} key={item.id}>
          <li className="text-white text-sm tracking-wide font-extralight capitalize">
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
