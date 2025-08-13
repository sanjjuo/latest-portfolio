import * as React from "react";
import { SVGProps } from "react";
const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    // width={200}
    // height={200}
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      style={{
        fill: "none",
      }}
    />
    <path d="M36 4H12c-4.4 0-8 3.6-8 8v24c0 4.4 3.6 8 8 8h24c4.4 0 8-3.6 8-8V12c0-4.4-3.6-8-8-8zM24 34c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm11-19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);
export default Instagram;
