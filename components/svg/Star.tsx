import React from "react";

const Star = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.5l2.68 5.43 5.99.87-4.33 4.22 1.02 5.93-5.36-2.82-5.36 2.82 1.02-5.93-4.33-4.22 5.99-.87 2.68-5.43z"
      />
    </svg>
  );
};

export default Star;
