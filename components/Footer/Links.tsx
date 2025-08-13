import React from "react";
import { FooterLinksType } from "./types";
import Link from "next/link";

interface LinksProps {
  data: FooterLinksType[number];
}

const Links: React.FC<LinksProps> = ({ data }) => {
  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-semibold text-white font-heading">
        {data.title}
      </h2>
      <ul className="space-y-2">
        {data.links.map((link) => (
          <li key={link.id}>
            {link.name ? (
              <Link href={link.href} className="text-white">
                {link.name}
              </Link>
            ) : (
              <Link href={link.href} className="text-white">
                {link.label}: {link.value}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
