import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="sticky top-0 w-full z-50 app-width">
        <Navbar />
      </div>
      <div className="-mt-20 p-2">{children}</div>
    </>
  );
};

export default HomeLayout;
